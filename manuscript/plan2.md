---
id: plan2
title: Plan 2
---

## Introduction

  * Supervised Learning is good but sometimes we don't have labels for that. And Yan said in AAAI 2020 that it's hyped so let's do a thesis on this.

  * Definition of what's a weak supervision :
    * quantity of labels
    * quality of labels
    * adaptability of labels

  *  Vocabulary :
    *  proxy

## Right Proxy

### Biquality Data

  * define (Dt, Du, p, q)
  * Strong ( ∀q,p=1 || ∀p,q=1 )
  * Unsupervised ( p=q=0 )
  * SSL ( ∀p != 1 != 0, q=0 )
  * RLL ( ∀q != 1 != 0, p=0 ) Robust Label Learning

### Setup Plan

  * le carré

### RLL

  * definition
  * differences between MCAR, MCD, MAR

### SLL

  * definition
  * AL : p -> 0 and oracle
  * PNU : p-> 1
  * PU somewhat different (ref to RLL)
  * MCAR MCD and MAR also apply to PNU

### Setup Tree

### Which algorithm to choose ?

  * schema with |L| as axis with algorithm families.

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
