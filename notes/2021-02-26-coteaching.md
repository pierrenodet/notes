---
title: "Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)"
tags: [reading-notes,instance-selection,collaborative-learning]
---

<p align="center">

![Co-teaching](/figures/coteaching.png)

</p>

* **code** : https://github.com/bhanML/Co-teaching
* **pdf** : https://arxiv.org/pdf/1804.06872.pdf

## Summary

Summarize the main claims/contributions of the paper in your own words

1. Collaborative algorithm between two networks to learn on untrusted data only.
2. Each round, loss of each network is computed on it's own minibatch. The samples with the smallest loss are considered the most informative and are given to the other network to learn.
3. Leverage memorization effect of deep neural networks (first learn clean and easy patterns then overfit noise).
4. Introduction of a dynamic size for the number of informative samples used (start high then reduce with number of epochs)

<!--truncate-->

## Assets

### Strengths

1. Leverage the memorization effect
2. Collaborative learning between two models
3. Small loss instances are the most informatives.

### Drawbacks

1. Needs noise rate for hyperparameter tuning (can be fixed in the biquality case).
2. Tested on only three vision datasets and two noise types.
3. An empirical paper (no proofs) with good improvments on pair noise but not on symmetric one.
4. Somewhat high algorithm complexity as it needs two learn two networks at once.

## Novelty

It's a novel algorithm as it reuses proven idea from different fields, small loss instances as informative from Mentor Net (distillation), collaborative learning from Co-Training (semi-supervised learning) and the memorization effect of neural networks (robust learninng to label noise).

## Significance

The results are somewhat significant, especially on pair noise. Nonetheless too few datasets and kind of noises have been used for an experimental paper.

## Soudness

The paper seems OK but no proofs have been provided but convergence seems to work empirically.

## Evaluation

The evaluation is somewhat weak because of the lack of proofs and lack of more in depth experiments.

## How can I use/enhance the paper ?

The mixing of ideas from different fields to assemble an algorithm is quite nice and I should reuse the free main principles about memorization, two networks and small loss instances.

## What did I learn from reading this paper ?

That the three principles above works well empirically.

## New paper to read/Interesting Citations

1. Mentor Net

## How I am going to use this paper ?

Citation. The requirement of the noise rate could make it part of the biquality learning algorithm family but i'm not quite sure yet. Otherwise Implement it.

## Bibtex

```
@inproceedings{NEURIPS2018_a19744e2,
 author = {Han, Bo and Yao, Quanming and Yu, Xingrui and Niu, Gang and Xu, Miao and Hu, Weihua and Tsang, Ivor and Sugiyama, Masashi},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {S. Bengio and H. Wallach and H. Larochelle and K. Grauman and N. Cesa-Bianchi and R. Garnett},
 pages = {},
 publisher = {Curran Associates, Inc.},
 title = {Co-teaching: Robust training of deep neural networks with extremely noisy labels},
 url = {https://proceedings.neurips.cc/paper/2018/file/a19744e268754fb0148b017647355b7b-Paper.pdf},
 volume = {31},
 year = {2018}
}
```