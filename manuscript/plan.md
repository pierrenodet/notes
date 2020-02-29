---
id: plan
title: Plan
---

## Introduction

  * Supervised Learning is good but sometimes we don't have labels for that. And Yan said in AAAI 2020 that it's hyped so let's do a thesis on this.

## Weak Supervision

When talking about weakly supervised learning, it's not all about having weak labels, it's broader than that. It's about these three key comoponents :

    * quantity of labels
    * quality of labels
    * adaptability of labels

The three following subsections will be dedicated to respectively define these terms.

## Right Proxy

### The boomer way

#### RLL

  * definition
  * differences between MCAR, MCD, MAR

#### SLL

  * definition
  * AL oracle
  * PNU
  * PU somewhat different (ref to RLL)
  * MCAR MCD and MAR also apply to PNU

#### Quantity of Labels

  * schema with |L| as axis with algorithm families.

#### Question Tree for the datascientist

  * Synthesis figure

### Biquality Data

  * define (Dt, Du, p, q)
  * Strong ( ∀q,p=1 || ∀p,q=1 )
  * Unsupervised ( p=q=0 )
  * SSL ( ∀p != 1 != 0, q=0 )
  * RLL ( ∀q != 1 != 0, p=0 ) Robust Label Learning

### Setup Plan

  * le carré

### Setup Tree

  * l'arbre

## Wrong Proxy

### Transfer Learning

  * Source Dataset = Untrusted Dataset / Target = Trusted
  * Domain Adaptation : Only source labels
  * Multi Task : Source and Target labels -> Linkable with RLL thanks to SOSELETO (ICLR 2019)

### Automatic Labelling / Higher Supervision

  * Snorkell
  * Snuba

### Multi Instance Learning

  * Just take what's Zhou did

### Setup Tree

## Conclusion

Full Setup Tree