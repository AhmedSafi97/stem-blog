---
title: Tensor
date: 2020-07-18T15:22:00.000Z
image: 800px-components_stress_tensor.svg.png
category: mathematics
---
This article is copied from wikipedia for educational purposes, [see the original article](https://en.wikipedia.org/wiki/Tensor)

In mathematics, a tensor is an algebraic object that describes a (multilinear) relationship between sets of algebraic objects related to a vector space. Objects that tensors may map between include vectors and scalars, and even other tensors. Tensors can take several different forms – for example: scalars and vectors (which are the simplest tensors), dual vectors, multilinear maps between vector spaces, and even some operations such as the dot product. Tensors are defined independent of any basis, although they are often referred to by their components in a basis related to a particular coordinate system.

Tensors are important in physics because they provide a concise mathematical framework for formulating and solving physics problems in areas such as mechanics (stress, elasticity, fluid mechanics, moment of inertia, ...), electrodynamics (electromagnetic tensor, Maxwell tensor, permittivity, magnetic susceptibility, ...), or general relativity (stress–energy tensor, curvature tensor, ... ) and others. In applications, it is common to study situations in which a different tensor can occur at each point of an object; for example the stress within an object may vary from one location to another. This leads to the concept of a tensor field. In some areas, tensor fields are so ubiquitous that they are often simply called "tensors".

Tensors were conceived in 1900 by Tullio Levi-Civita and Gregorio Ricci-Curbastro, who continued the earlier work of Bernhard Riemann and Elwin Bruno Christoffel and others, as part of the absolute differential calculus. The concept enabled an alternative formulation of the intrinsic differential geometry of a manifold in the form of the Riemann curvature tensor.

### Definition

Although seemingly different, the various approaches to defining tensors describe the same geometric concept using different language and at different levels of abstraction.

**As multidimensional arrays**

A tensor may be represented as an (potentially multidimensional) array. Just as a Vector space in an $n$-dimension vector space is represented by a one-dimensional array with $n$ components with respect to a given Basis, any tensor with respect to a basis is represented by a multidimensional array. For example, a linear operator is represented in a basis as a two-dimensional square $n \times n$ array. The numbers in the multidimensional array are known as the _scalar components_ of the tensor or simply its _components_. They are denoted by indices giving their position in the array, as subscript and superscript, following the symbolic name of the tensor. For example, the components of an order $2$ tensor $T$ could be denoted $T_{\mathclap{ij}}$, where $i$ and $j$ are indices running from $1$ to $n$, or also by $\textstyle{T_j^i}$.

Whether an index is displayed as a superscript or subscript depends on the transformation properties of the tensor, described below. Thus while $T_{\mathclap{ij}}$ and $\textstyle{T_j^i}$ can both be expressed as $n \times n$ matrices, and are numerically related via index juggling, the difference in their transformation laws indicates it would be improper to add them together. The total number of indices required to identify each component uniquely is equal to the dimension of the array, and is called the _order_, _degree_ or _rank_ of the tensor. However, the term "rank" generally has another meaning in the context of matrices and tensors.