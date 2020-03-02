---
id: introduction
title: Introduction
---

What comes to mind when talking about AI and it's last great successes ? Machine Learning and especially Supervised Learning.

Supervised Learning is a family of learning tasks with the aim to learn a concept $(Y|X)$ from instances $X$ and their associated labels $Y$. In this thesis we will focus on Binary Classification, a task from this family where the labels can only take two different values $Y ∈ \mathcal{Y} = \{-1,+1\}$. An example of such a task would be learning to predict if an image contains a dog or a cat. In this example $X$ correspond to an image, $Y$ the animal contained in the image, $\mathcal{Y}=\{"cat","dog"\}$ and the concept to learn $(Y|X)$ be which animal the image contains.

Netherless the efficiency of such tasks rely on having a lot of clean labels adapted for every instances in the training dataset. For some use cases acquiring these labels could be costly, inefficient or even impossible. To be more specific, the labels in three different ways :

A weak supervision could be defined thanks to three differents criteria on the available labels :
* Quantity
* Quality
* Adaptability

The quantity of available labels greatly influence the efficiency of supervised learning algorithms. As we know from "Theoretical Comparisons of Positive-Unlabeled Learning against Positive-Negative Learning" by Niu et Al. the error bound for a supervised learning task is invertionally proportional to the squared root of the dataset size $O(1/√n)$.

The quality of labels can be defined in term of difference between the true concept to learn $(Y|X)$ and the observed concept $(\tilde{Y}|X)$. It could be caused because of missingness of the labels as in Semi Supervised Learning or Positive Unlabeled Learning, or because of noise in the labels as in Robust Learning to Label Noise.

The adaptability of labels describe how much they fit to an instance. For example, if the labels are perfectly adapted, there is one label per instance as in Supervised Learning. If the labels are not adapted, there might be only one label per bag of instances as in Multi Instance Learning or there might be labels not meant for the learning task as in Higher Order Supervision.

Learning with weak supervision define a new family of learning tasks which is called Weakly Supervised Learning.

The first chapter of this thesis is going to give the reader a deeper comprehension of Weakly Supervised Learning, novel ways to think about the family, state of the art algorithms with yes-no chart ready to be used for engineers and the open questions of the domain.