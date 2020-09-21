---
title: Operations Research/Linear Programming
date: 2020-09-21T16:12:22.010Z
image: linear_programming_graphical_solution.png
category: mathematics
---
This article is copied from wikibooks for educational purposes, [see the original article](https://en.wikibooks.org/wiki/Operations_Research/Linear_Programming)

Linear Programming (LP) is a mathematical modelling technique useful for allocation of limited resources such as material, machines etc to several competing activities such as projects, services etc. A typical linear programming problem consists of a linear objective function which is to be maximized or minimized subject to a finite number of linear constraints. (By a linear function we mean a function of the form $a_{\mathclap{1}}x_{\mathclap{1}} + a_{\mathclap{2}}x_{\mathclap{2}} + \cdots a_{\mathclap{n}}x_{\mathclap{n}}$ where $x_{\mathclap{1}}, x_{\mathclap{2}}, \cdots x_{\mathclap{n}}$ are all variables.)

The founders of LP are George B. Dantzig, who published the simplex method in 1947, John von Neumann, who developed the theory of the duality in the same year, and Leonid Kantorovich, a Russian mathematician who used similar techniques in economics before Dantzig and won the Nobel prize in 1975 in economics. The linear programming problem was first shown to be solvable in polynomial time by Leonid Khachiyan in 1979, but a larger major theoretical and practical breakthrough in the field came in 1984 when Narendra Karmarkar introduced a new interior point method for solving linear programming problems.

### The Two Variable LP model

Two variable LP models don't usually exist in practice but their study can provide us with an example as to how a general model can be handled.

We will explain the model by an example.

Consider a chemical company which produces two salts: $X$ and $Y$. Suppose an acid and a base are the only two chemicals required by the company to produce these two salts. Further suppose that by past experience the owner of the company has obtained the following data:

To make $1$ unit of the salt $X$, $6$ units of the acid and $1$ unit of the base is required. To make $1$ unit of the salt $Y$, $4$ units of the acid and $2$ units of the base are required. At most $24$ units of the acid and $6$ units of the base are available daily. $1$ unit of the salt $X$ gets him a profit of $5$ (in whatever currency) and $1$ unit of the salt Y gets him a profit of $4$. In addition due to a market survey he knows that the daily demand for the salt $Y$ cannot exceed that for $X$ by more than $1$ unit, and that the maximum daily demand for the salt $Y$ is $2$ units.

The company owner wants the best product mix. That is to say, he wants to know the amount of $X$ and $Y$ he should make daily so that he gets the highest profit.

To formulate the LP model for this problem we first need to identify the decision variables. These are the variables which will represent the entities about which we have to actually make a decision about. In our problem it is clear that the entities are the salts $X$ and $Y$ and so the variables should represent the amount they should be each made. So let,

$x_{\mathclap{1}}$ = Units produced daily of salt $X$

$x_{\mathclap{2}}$ = Units produced daily of salt $Y$

The next step is to decide what should be the objective function for our model. It is clear from the name itself that the objective function represents our objective i.e. maximizing our total profit. Since the total profit is usually the sum of the profits obtained from $X$ and $Y$ it should be equal to $5x_{\mathclap{1}} + 4x_{\mathclap{2}}$. This is assuming that if $1$ unit of $X$ (or $Y$) gives a profit of $5$ (or $4$) then $x_{\mathclap{1}}$ (or $x_{\mathclap{2}}$) units would give a profit of $5x_{\mathclap{1}}$ (or $4x_{\mathclap{2}}$). Hence if $z$ represents the total daily profit the objective is:

Maximize $z$ = $5x_{\mathclap{1}} + 4x_{\mathclap{2}}$

Now we consider the constraints that restrict the usage of the acids and the salts. We know that the total amount of acid which we use in the day can't exceed $24$. Since $6x_{\mathclap{1}}$ and $4x_{\mathclap{2}}$ are reasonably the amounts of the acid used in making the salt $X$ and $Y$ we may conclude that our constraint is:

$6x_{\mathclap{1}} + 4x_{\mathclap{2}} \leq 24$

Similarly, for the base:
$x_{\mathclap{1}} + 2x_{\mathclap{2}} \leq 6$
$x_{\mathclap{2}} - x_{\mathclap{1}}$
Now the market dictates that the excess of the daily production of Y over X which is $x_{\mathclap{2}} - x_{\mathclap{1}}$ can't exceed $1$ which means that:

$x_{\mathclap{2}} - x_{\mathclap{1}} \leq 1$

Also the maximum daily demand for the salt $Y$ is $2$ units so that:

$x_{\mathclap{2}} \leq 2$

An implicit assumption is that the variables x*{\mathclap{1}} and x*{\mathclap{2}} can't assume negative values (Why?). The nonnegativity restrictions, $x_{\mathclap{1}},x_{\mathclap{2}} \geq 0$ account for this requirement.

The complete model can be now stated as:

Maximize $z$ = $5x_{\mathclap{1}} + 4x_{\mathclap{2}}$

subject to,

$6x_{\mathclap{1}} + 4x_{\mathclap{2}} \leq 24$

$x_{\mathclap{1}} + 2x_{\mathclap{2}} \leq 6$

$x_{\mathclap{2}} - x_{\mathclap{1}} \leq 1$

$x_{\mathclap{2}} \leq 2$

$x_{\mathclap{1}} , x_{\mathclap{2}} \geq 0$

Any values of $x_{\mathclap{1}}$ and $x_{\mathclap{2}}$ that satisfy all the five constraints constitute a feasible solution. Otherwise the solution is infeasible. For example, the solution $x_{\mathclap{1}} = 3$ and $x_{\mathclap{2}} = 1$ is feasible because on substitution in the constraints none of the inequalities are violated. On the other hand the solution, the solution $x_{\mathclap{1}} = 4$ and $x_{\mathclap{2}} = 1$ is infeasible because it does not satisfy constraint (1), namely $6 * 4 + 4 * 1 = 28$ which is larger then the right hand side ($=24$).

Our goal is to find the optimum solution, i.e. one which maximizes the objective function besides being feasible. The procedure to do that will be discussed in the succeeding sections.
