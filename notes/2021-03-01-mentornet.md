---
title: "MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)"
tags: [reading-notes,meta-learning,importance-reweighting]
---

<p align="center">

![MentorNet](/figures/mentornet.gif)

</p>

* **code** : https://github.com/google/mentornet
* **pdf** : https://arxiv.org/pdf/1712.05055.pdf

## Summary

1. Modern take/refresh on curriculum learning
2. Meta Learning algorithm to learn a curriculum from data instead of hand designing it : Learning curriculum
3. Actual Biquality Learning algorithm (learning the curriculum on a mix of trusted and untrusted data)
4. Proposed architecture of MentorNet (model that represent the learned curriculum) with bidirection LSTM (for loss evolution and memory) and MLP
5. MentorNet learned as a supervised classification task (clean samples as 1, corrupted samples as 0). Student Net learn the usual tasks on reweighted samples from MentorNet.
6. Insights on the algorithm that might (not automatically) optimize an M-Robust loss function.
7. Exaustive experiments against state of the art curriculum based reweighting scheme.

<!--truncate-->

## Assets

### Strengths

1. Learning curriculum (removing humain expertise/biais by pure learning)
2. Exaustive benchmark of curriculum based algorithm
3. Nice insights on both curriculum learning and MentorNet relation to the robust M-estimator

### Drawbacks

1. Complexed and heavily hand designed architecture for the MentorNet

![MentorNetArchitecture](/figures/mentornet-architecture.png)

2. No comparison against other weakly supervised algorithm
3. The predefined curriculum case is useless and only brings noise to the paper and makes it hard to understand fully (especially the algorithm).
4. The algorithm seems to work well for very deep architecture (100M parameters), but not for "ok"-deep architecture (1M parameters).

## Novelty

It's a very novel approach that brings the learning instead of hand designing further for the case of curriculum learning algorithm.

## Significance

The results are significant, there is still some cases where MentorNet does not bring a lot of value in comparison of the simple self-paced learning as with not-too-deep architecture. Tho, to achieve this results it needs to use a lot of "usual tricks" as the warmup phase.

## Soudness

The paper is technically sound with a lot of theortical insights on why it works.

## Evaluation

The paper is very convincing and well written. It could be perfect without the case of "estimating predifined curriculum" to make the paper less noisy.

## How can I use/enhance the paper ?

Implementing it and redoing

## What did I learn from reading this paper ?

I learned a lot about curriculum learning.

## New paper to read/Interesting Citations

1. mixup: Beyond Empirical Risk Minimization (deep networks first learn easy and clean signal then overfits noisy data).
2. Self-paced learning for latent variable models (important paper on curriculum learning)

## How I am going to use this paper ?

Implementation, it's a very important paper of the field, I need to fully understand the pros and cons even at the technical level.

## Bibtex

```
@InProceedings{pmlr-v80-jiang18c, 
title = {{M}entor{N}et: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels}, 
author = {Jiang, Lu and Zhou, Zhengyuan and Leung, Thomas and Li, Li-Jia and Fei-Fei, Li}, 
booktitle = {Proceedings of the 35th International Conference on Machine Learning},
pages = {2304--2313}, 
year = {2018}, 
editor = {Jennifer Dy and Andreas Krause}, 
volume = {80}, series = {Proceedings of Machine Learning Research}, 
address = {Stockholmsmässan, Stockholm Sweden}, 
month = {10--15 Jul}, 
publisher = {PMLR}, 
pdf = {http://proceedings.mlr.press/v80/jiang18c/jiang18c.pdf}, 
url = {http://proceedings.mlr.press/v80/jiang18c.html}}
```