---
id: wsl
title: Weakly Supervised Learning
---

Weakly Supervised Learning is a family of learning tasks in the context of weak supervision. Weak supervision is defined by a lack of three criteria in comparison of strong supervision, the quanity, the quality or the adaptability of the labels. The most oustanding criteria here is the adaptability, at the moment their is a dichotomy on how to learn with such labels. Either you have one label per instance for the learning task, and you stay in a widely know litterature of algorithms or you don't and you need to rely on Multi Instance Learning or Higher Order Supervision. In this chapter we are gonna review first the case where you are at the right proxy, having one label per instance for the given learning task, and in a second time the case where you are at the wrong proxy, when you are not in this situation.

## Right Proxy

If you are at the right proxy, that means one of the three criteria is fixed and your labels are adapted. There is still two more criteria about quantity and quality of the labels. Usually they are treated separatedely and extensive litterature for both of them. For the first, it's about Semi-Supervised Learning and the second Robust Learning under Label noise.

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