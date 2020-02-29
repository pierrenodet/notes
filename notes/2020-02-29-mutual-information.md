---
title: "Flexible Biquality Learning with Mutual Information"
---

The concept of Biquality Data has been introduced in "Unifying Semi-Supervised and Robust Learning by Mixup" by Hataya and Nakayama where there is two sets of data, a trusted and an untrusted one.

The trusted dataset ($D_T$) contains labels $Y_T$ that represents the true concept ($Y_T|X$) to learn on the learning task. The untrusted dataset ($D_U$) contains labels $Y_U$ that range from being uniformative (as in Unsupervised Learning) to being the same as the trusted dataset (as in Supervised Learning).

In order to represents where the untrusted labels lie in this range, we define the quality of the untrusted labels. In the previous paper, they used a ratio of Kullback-Leibler divergence. Without critising the chosen formula, they were unable in the paper to directly use this value in the learning process.

<!--truncate-->

## Mutual Information

In this document we are going to use a different formula, hoping to use it directly in the learning process, the mutual information between the trusted and the untrusted concepts :

$$
q = I(Y_T|X,Y_U|X) = H(Y_T|X) + H(Y_U|X) - H((Y_T|X),(Y_U|X))
$$

Where I is the mutual information between two random variables and H is the entropy of a random variable and H( , ) is the joint entropy for two random variables.

We chose the mutual information because we thought it would better represent the usefullness of the untrusted dataset for the true learning task. As stated by the wikipedia definition : "mutual information quantifies the "amount of information" obtained about one random variable through observing the other random variable".

Rewriting it in terms of entropy helps us better understand how this formula behaves.

The first term $H(Y_T|X)$ correspond to the entropy of the trusted concept. It would be estimated by a probabilistic classifier on the trusted data. This term will measure the informativeness of the output of the classifier, the higher the more widespread the probabilities will be between $[0,1]$, the lower the more classifier will output only $0$ and $1$. It corresponds to the hardness of the learning task and to the confidence of the learned probabilistic classifier. 

The second term $H(Y_U|X)$ is analog to $H(Y_T|X)$ but on the untrusted dataset.

The last term $H((Y_T|X),(Y_U|X))$ correspond to the joint entropy of the trusted and untrusted concept. After estimating the two marginals with probabilistic classifier, we need to estimate the joint probability with a copule or another model. Then the joint entropy measure the agreement between the two classifiers, the higher the higher the discord, the lower the higher the agreement.

## More intituion with Label Noise

In order to feel if this is the right formula for data quality, we can make the same exercise with label noise. We are going to take the simplest setup where the noise function is constant by label and by instance and is notated $ρ$. We are going to use $\tilde{π}$ for the prior distribution of the observed labels $\tilde{Y}$ and $π$ for the prior of the true labels $Y$.

Let's calculate the mutual information between $\tilde{Y}$ and $Y$ :

$$
\begin{aligned}
I(\tilde{Y},Y) &= H(\tilde{Y}) - H(\tilde{Y}|Y)\\
&= - ∑_{\tilde{y}∈\mathcal{Y}}ℙ(\tilde{Y}=\tilde{y})log_2(ℙ(\tilde{Y}=\tilde{y})) + ∑_{y∈\mathcal{Y}}∑_{\tilde{y}∈\mathcal{Y}}ℙ(\tilde{Y}=\tilde{y}|Y=y)log_2(ℙ(\tilde{Y}=\tilde{y}|Y=y))\\
&= -(\tilde{π}log_2(\tilde{π})+(1-\tilde{π})log_2(1-\tilde{π})) + 2(ρlog_2(ρ)+(1-ρ)log_2(1-ρ))\\
\end{aligned}
$$

If we plot this formula we obtain this two figures with $x$ as $\tilde{π}$ and $y$ as $ρ$ :

<p align="center">

![Mutual Information 3D](/img/mutual-information/3d.gif)

![Mutual Information Contour](/img/mutual-information/contour.gif)

</p>

On the last plot if we follow the axis $x=0.5$ we are looking at the quality of the data when the observed class are balanced. We are the highest value possible on the domain when $y=0$, then as $y$ goes up we are reducing the quality of the data to the point of having the lowest quality when $y=0.5$. Then it goes up again to go back to the highest value when $y=1$, indeed if all the labels are flipped, the classification task should be as easy as if there is no flips, the separator should be the same.

This property of the quality of the data was not found in the original paper as it was measured with divergence, if the labels where all flipped, the divergence would have been at the highest and thus the quality as it's lowest.

## Estimation of the Mutual Information

Estimating the mutual information on continuous random variables is widely known problem and there is a extensive research on this topic. For example see "On The Estimation Of Mutual Information" by Carrara and Ernst, they directly estimate the joint distribution and use it to compute the marginals.

For educational purposes, we are going to estimate it from the ground up.

$$
I(Y_T|X,Y_U|X) = H(Y_T|X) + H(Y_U|X) - H((Y_T|X),(Y_U|X))
$$

### Estimation of the Entropy of the trusted concept

$$
H(Y_T|X) = -∫_{x∈\mathcal{X}}∑_{y∈\mathcal{Y}}ℙ(Y_T=y|X=x)log_2(ℙ(Y_T=y|X=x))
$$

We can estimate $ℙ(Y_T=y|X=x)$ with a probabilistic classifier $f$ learned on the trusted dataset $D_T$.

We can estimate the $∫_{x∈\mathcal{X}}$ by $∑_{x∈\mathcal{D_T}}$ which is summing on the trusted dataset $D_T$ only.

### Estimation of the Entropy of the untrusted concept

$$
H(Y_U|X) = -∫_{x∈\mathcal{X}}∑_{y∈\mathcal{Y}}ℙ(Y_U=y|X=x)log_2(ℙ(Y_U=y|X=x))
$$

Same way as the trusted concept

### Estimation of the Joint Entropy of both concepts

$$
H((Y_T|X),(Y_U|X)) = -∫_{x_u∈\mathcal{X}}∑_{y_u∈\mathcal{Y}}∫_{x_u∈\mathcal{X}}∑_{y_u∈\mathcal{Y}}ℙ(Y_T=y_t|X=x_t,Y_U=y_u|X=x_u)log_2(ℙ(Y_T=y_t|X=x_t,Y_U=y_u|X=x_u))
$$

We can estimate the $∫_{x∈\mathcal{X}}$ by summing onth on the trusted dataset $D_T$ and once on the untrusted dataset $D_U$

For the joint probability of the output of the classifiers, we at this point only have the marginals of the distribution. We need a copule or a model in order to model the joint probability.

## Using Mutual Information to learn on Biquality Data

One way to use mutual information to drive our learning algorithm could be to weight the correction of the classifier learned on the untrusted data with the one learned on the trusted data.

Properties that would be nice to have on this learning algorithm :

* If the quality of the data is null, learn as a SSL algorithm
* If the quality of the data is perfect, learn as a Supervised Algorithm
* If the quality of the data is meh, weight a RLL algorithm with a Supervised one
* This choice is continuous (not if else)

## Applications to more specific setup

### Positive Unlabeled Learning

In PUL we have trusted 1 and missing data as untrusted with a null quality. Can we learn a one class classifier on the trusted data and another one on the untrusted and combine them for final prediction ?
