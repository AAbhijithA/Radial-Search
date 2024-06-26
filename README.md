# Radial-Search

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

An implementation to visit all indexes in a grid as a radial search to compress the visit time from O(n²) to O(n) using asynchronous functions and finding independent path of traversal. In many systems locations are kept in grid formats to aid in easier computation and doing batch wise or logistics wise computation. Hence finding necessary resources from a radial point becomes very important and can be done by finding independent paths whithin the the Grid of dimensions [n x n] as shown below.
- - - -
### Working of Implementation

![](RSImages/branching.png)

* Over here each connection away from the Centre C acts as an independent asynchronous function.
* L, R, U and D are Left, Right, Up and Down nodes respecitively and move only in the same direction of propogation.
* Example for a diagonal function is LDU is the left diagonal extending upwards and branches into another LDU, L and U function, similarly done for other diagonal nodes.
* Due to calling each function asynchronously we induce paralellism in the discovery of nodes and compute it in O(n) time complexity.
- - - -
### Implementation Output

![](RSImages/RadialSearch.gif)

***(Give the dimension of the grid to construct a Grid of dimensions [n x n] and it branches out visiting nodes from the centre)*** 
- - - -
#### Understandings and Scope

* Compressed it from a O(n²) to an O(n) approach but it requires to not have too many branches as in some languages it could lead to generating too many threads.
* Requires geolocation mapping to a decently sized grid to not overload it with the asynchronous functions which may lead to memory leaks and overutilizing resources.
* Extend the usage of this algorithm to moderate sized batch wise and map a function to find solutions from the nearest visited cells.
- - - -
#### Deployment
[Link to the Deployed Page](https://aabhijitha.github.io/Radial-Search/Grid.html)
