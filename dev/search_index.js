var documenterSearchIndex = {"docs":
[{"location":"man/types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/types/#Problem","page":"Types","title":"Problem","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"Problem{IT, FT}","category":"page"},{"location":"man/types/#Sparspak.SpkProblem.Problem","page":"Types","title":"Sparspak.SpkProblem.Problem","text":"Problem{IT, FT}\n\nType of a sparse-matrix coupled linear algebraic equations problem.\n\nFields \n\nnrows: \nnumber of rows in the matrix\nnumber of elements in a row permutation\nncols:\nnumber of columns in the matrix\nnumber of elements in a column permutation\n\nOther variables:\n\nNOTE: a user can input (i, j, v), indicating that position (i, j) in the matrix contains the value v. Or, a user can input (i, j), indicating that position (i, j) is nonzero, but not specifying a value there. Hence the distinction between \"nonzeros\" and \"nonzero values\" below.\n\nnnz - number of nonzero * values * in the matrix.\ndnz - number of nonzero * values * on the diagonal of the matrix.\nnedges - number of nonzeros in the matrix.\ndedges - number of nonzeros on the diagonal of the matrix.\n\nThe elements of the matrix are stored by columns using three \"parallel\" arrays: (link, rowsubs, values). The first element of column i stored is found in values[head[i]]. The row subscript of the element is rowsubs[head[i]]. The next element in the column is values[link[head[i]]] and so on. A zero value for link marks the end of the column.\n\nNOTE: the elements in each column are stored in increasing order of row subscript. Some algorithms used in the package depend on this fact.\n\nThe right hand side of the matrix equation is stored in rhs, and the solution (when provided or computed) is stored in the array x. The size of the arrays is extended as required, and their lengths for not generally correspond to the number of nonzeros in the matrix: or the number of columns in the matrix.\n\nThe user can improve efficiency by providing an estimate of the number of nonzeros in the matrix -  - this is done via the optional keyword parameter nnz.\n\nSimilarly, the user can improve efficiency by providing estimates for the number of rows and columns in the matrix via the optional keyword parameters nrows and ncols.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Sparse-LU-Solver","page":"Types","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"SparseSolver","category":"page"},{"location":"man/types/#Elimination-Trees","page":"Types","title":"Elimination Trees","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkETree","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"ETree{IT}","category":"page"},{"location":"man/types/#Sparspak.SpkETree.ETree","page":"Types","title":"Sparspak.SpkETree.ETree","text":"ETree{IT}\n\nElimination Tree type.\n\nUsed for finding and manipulating elimination trees, finding (weighted) postorderings of them, and more.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Graphs","page":"Types","title":"Graphs","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGraph","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"Graph{IT}","category":"page"},{"location":"man/types/#Sparspak.SpkGraph.Graph","page":"Types","title":"Sparspak.SpkGraph.Graph","text":"Graph{IT}\n\nnv - the number of vertices in the graph.\n(xadj, adj) - array pair storing the adjacency lists of the vertices.\n\nThe adjacency lists of the graph are stored in consecutive locations in the array adj. The adjacency list for the i - th vertex in the graph is stored in positions adj[k], k = xadj[i], .... xadj[i + 1] - 1.\n\nWhen the graph is symmetric, if vertex i is in vertex j'\"'s adjacency vertex j is in vertex i's list. Using the representation above each edge in the graph is stored twice.\n\nThere are no self - loops (no \"diagonal elements\") by default. If diagonal elements are required, just input \"diagonal\" or \"diag\".\n\nFor convenience in accessing the lists, xadj is of length nv + 1, with xadj[nV + 1] = nEdges + 1. Thus, accessing vertex nV's list is the same as for any other of the vertices.\n\nGraphs are created from Problem objects, which have a certain number of rows (nrows) and columns (ncols). These numbers are captured and stored in Graph objects as nrows and ncols as well.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Ordering","page":"Types","title":"Ordering","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkOrdering","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"Ordering{IT}","category":"page"},{"location":"man/types/#Sparspak.SpkOrdering.Ordering","page":"Types","title":"Sparspak.SpkOrdering.Ordering","text":"Ordering{IT}\n\nType of ordering of the rows and columns.\n\nnrows is the number of rows in the matrix\nncols is the number of columns in the matrix\n\nOrdering objects contain two permutations and their inverses:\n\nrperm is a row permutation: rperm[i] = k means that the new position of   row k is in position i in the new permutation.\nrinvp is a row permutation satisfying rinvp[rperm[i]] = i. Thus, rinvp[k]   provides the position in the new ordering of the original row k.\n\ncperm and cinvp are analogous to rperm and rinvp, except they apply     to column permutations of the matrix.\n\nWhen the matrix is symmetrically permuted, rperm = cperm and rinvp = cinvp.\n\nxrowblk  is an array that is sometimes used to contain a partitioning   of the rows of the matrix, or both the rows and columns when the   matrix is symmetric.\nnrowblks is the number of blocks in the partitioning; the rows of the   i - th partition are xrowblk[i], xrowblk[i] + 1 ... xrowblk[i + 1] - 1.   For convenience, xrowblk has nrowblks + 1 elements, with   xrowblk[nrowblks + 1] = nrows + 1.\n\nWhen the matrix is not symmetric, and a partitioning of the columns is required as well, the pair (ncolblks, xcolblk) is used.\n\n\n\n\n\n","category":"type"},{"location":"man/types/#Grid","page":"Types","title":"Grid","text":"","category":"section"},{"location":"man/types/","page":"Types","title":"Types","text":"CurrentModule = Sparspak.SpkGrid","category":"page"},{"location":"man/types/","page":"Types","title":"Types","text":"Grid{IT}","category":"page"},{"location":"man/types/#Sparspak.SpkGrid.Grid","page":"Types","title":"Sparspak.SpkGrid.Grid","text":"Grid(h::IT, k::IT) where {IT}\n\nConstruct a grid with a given number of spacings.\n\n\n\n\n\n","category":"type"},{"location":"concepts/concepts/","page":"Concepts","title":"Concepts","text":"Table of contents","category":"page"},{"location":"concepts/concepts/#Guide","page":"Concepts","title":"Guide","text":"","category":"section"},{"location":"tutorials/tutorials/","page":"Tutorials","title":"Tutorials","text":"Table of contents","category":"page"},{"location":"tutorials/tutorials/#Tutorials","page":"Tutorials","title":"Tutorials","text":"","category":"section"},{"location":"howto/howto/","page":"How to","title":"How to","text":"Table of contents","category":"page"},{"location":"howto/howto/#How-to-guide","page":"How to","title":"How-to guide","text":"","category":"section"},{"location":"howto/howto/#How-to-install","page":"How to","title":"How to install","text":"","category":"section"},{"location":"howto/howto/","page":"How to","title":"How to","text":"The latest release of Sparspak can be installed from the Julia REPL prompt with","category":"page"},{"location":"howto/howto/","page":"How to","title":"How to","text":"julia> ]add Sparspak","category":"page"},{"location":"howto/howto/","page":"How to","title":"How to","text":"The closing square bracket switches to the package manager interface and the add commands installs Sparspak and any missing dependencies.  To return to the Julia REPL hit the delete key.","category":"page"},{"location":"howto/howto/#How-to-solve-a-random-problem","page":"How to","title":"How to solve a random problem","text":"","category":"section"},{"location":"howto/howto/","page":"How to","title":"How to","text":"This code makes up a random-coefficient (but diagonally dominant) sparse matrix and a simple right hand side vector. The sparse linear algebraic equation problem is then solved with the LU factorization. The solution is tested against the solution with the built-in solver.","category":"page"},{"location":"howto/howto/","page":"How to","title":"How to","text":"using LinearAlgebra\nusing SparseArrays\nusing Sparspak.Problem: Problem, insparse!, outsparse, infullrhs!\nusing Sparspak.SparseSolver: SparseSolver, solve!\n\nfunction _test()\n    n = 1357\n    A = sprand(n, n, 1/n)\n    A = -A - A' + 20 * LinearAlgebra.I\n    \n    p = Problem(n, n)\n    insparse!(p, A);\n    infullrhs!(p, 1:n);\n    \n    s = SparseSolver(p)\n    solve!(s, p)\n    A = outsparse(p)\n    x = A \\ p.rhs\n    @show norm(p.x - x) / norm(x) \n\n    return true\nend\n\n_test()","category":"page"},{"location":"howto/howto/","page":"How to","title":"How to","text":"For more details see the file test/test_sparse_method.jl, module msprs016.","category":"page"},{"location":"howto/howto/#How-to-improve-performance","page":"How to","title":"How to improve performance","text":"","category":"section"},{"location":"howto/howto/","page":"How to","title":"How to","text":"Use MKL:","category":"page"},{"location":"howto/howto/","page":"How to","title":"How to","text":"using LinearAlgebra\nusing SparseArrays\nusing MKL # <------------- Notice we put this before referencing Sparspak\nusing Sparspak.Problem: Problem, insparse!, outsparse, infullrhs!\nusing Sparspak.SparseSolver: SparseSolver, solve!\n\nfunction _test()\n    n = 1357\n    A = sprand(n, n, 1/n)\n    A = -A - A' + 20 * LinearAlgebra.I\n    \n    p = Problem(n, n)\n    insparse!(p, A);\n    infullrhs!(p, 1:n);\n    \n    s = SparseSolver(p)\n    solve!(s, p)\n    A = outsparse(p)\n    x = A \\ p.rhs\n    @show norm(p.x - x) / norm(x) \n\n    return true\nend\n\n_test()","category":"page"},{"location":"#Sparspak-Documentation","page":"Home","title":"Sparspak Documentation","text":"","category":"section"},{"location":"#Package-features","page":"Home","title":"Package features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Solves systems of coupled linear algebraic equations with a sparse coefficient matrix.\nReorderings of various kinds are supported, including the Multiple Minimum Degree (MMD).\nFactorizations of various kinds are supported.\nSolutions with multiple right hand sides, and solutions with preserved structure but changed matrix coefficients are supported. ","category":"page"},{"location":"#Documentation","page":"Home","title":"Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":" Learning Working\nPractical Tutorials How to\nTheoretical Concepts Reference","category":"page"},{"location":"man/man/#Reference-Manual","page":"Reference Manual","title":"Reference Manual","text":"","category":"section"},{"location":"man/man/","page":"Reference Manual","title":"Reference Manual","text":"Functions\nTypes","category":"page"},{"location":"man/functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"man/functions/#Problem","page":"Functions","title":"Problem","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkProblem","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"Problem(nrows::IT, ncols::IT, nnz::IT=2500, z::FT=0.0, info = \"\") where {IT, \n    FT}\ninaij!(p::Problem{IT,FT}, rnum, cnum, aij=zero(FT)) where {IT,FT}\ninbi!(p::Problem{IT, FT}, rnum::IT, bi::FT) where {IT, FT}\ninsparse!(p::Problem{IT,FT}, spm) where {IT,FT}\ninfullrhs!\noutsparse\ncomputeresidual\nmakerhs!\nmakegridproblem","category":"page"},{"location":"man/functions/#Sparspak.SpkProblem.Problem-Union{Tuple{FT}, Tuple{IT}, Tuple{IT, IT}, Tuple{IT, IT, IT}, Tuple{IT, IT, IT, FT}, Tuple{IT, IT, IT, FT, Any}} where {IT, FT}","page":"Functions","title":"Sparspak.SpkProblem.Problem","text":"Problem(nrows::IT, ncols::IT, nnz::IT=2500, z::FT=0.0, info = \"\") where {IT, FT}\n\nConstruct a problem.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkProblem.inaij!-Union{Tuple{FT}, Tuple{IT}, Tuple{Sparspak.SpkProblem.Problem{IT, FT}, Any, Any}, Tuple{Sparspak.SpkProblem.Problem{IT, FT}, Any, Any, Any}} where {IT, FT}","page":"Functions","title":"Sparspak.SpkProblem.inaij!","text":"inaij!(p::Problem{IT,FT}, rnum, cnum, aij=zero(FT)) where {IT,FT}\n\nInput a matrix coefficient. \n\nThe value is added to the existing contents.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkProblem.inbi!-Union{Tuple{FT}, Tuple{IT}, Tuple{Sparspak.SpkProblem.Problem{IT, FT}, IT, FT}} where {IT, FT}","page":"Functions","title":"Sparspak.SpkProblem.inbi!","text":"inbi!(p::Problem{IT, FT}, rnum::IT, bi::FT) where {IT, FT}\n\nInput an entry of the right-hand side vector.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkProblem.insparse!-Union{Tuple{FT}, Tuple{IT}, Tuple{Sparspak.SpkProblem.Problem{IT, FT}, Any}} where {IT, FT}","page":"Functions","title":"Sparspak.SpkProblem.insparse!","text":"insparse(p::Problem{IT,FT}, spm) where {IT,FT}\n\nInput sparse matrix.\n\nBuild a problem from a sparse matrix.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkProblem.infullrhs!","page":"Functions","title":"Sparspak.SpkProblem.infullrhs!","text":"infullrhs!(p::Problem{IT,FT}, rhs)  where {IT,FT}\n\nInRHSProblem adds a vector of values, rhs, to the current right hand side of a problem object.\n\nInput:\n\nrhs - the source right-hand side. It must be of length at least       p.nrows and if it is greater than p.nrows, only the first       p.nrows are used.\n\nUpdated:\n\np - the problem in which rhs is to be inserted.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkProblem.outsparse","page":"Functions","title":"Sparspak.SpkProblem.outsparse","text":"outsparse(p::Problem{IT,FT})  where {IT,FT}\n\nOutput the sparse matrix.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkProblem.computeresidual","page":"Functions","title":"Sparspak.SpkProblem.computeresidual","text":"computeresidual(p::Problem, res::Vector{FT}, xin::Vector{FT} = FT[], mtype = \"T\") where {FT}\n\nCompute the residual of a problem.\n\nGiven a vector x, this routine calculates the difference between the RHS of the given Problem and A*x and places this in res.\n\nInput:\n\np - the Problem used to calculate res, using xin\nxin - the input \"solution\" vector used to compute the residual\nmtype - matrix type (optional). If the matrix is symmetric and only           the lower or upper triangle is present, the user must let           the routine know this by setting mType to one of:               \"L\" or \"l\" - when only the lower triangle is present               \"U\" or \"u\" - when only the upper triangle is present               \"T\" or \"t\" - when either the lower or upper triangle is                            present.\n\nOutput:\n\nres - the calculated residual\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkProblem.makerhs!","page":"Functions","title":"Sparspak.SpkProblem.makerhs!","text":"makerhs(p::Problem, x::Vector{FT} = FT[], mtype = \"T\") where {FT}\n\nThis routine constructs the RHS of a problem given an x for the equation Ax = rhs. The x must have the same number of elements as the problem (represented by A above) has columns. If x is not present,  a right hand side is contructed so that the solution is 1, 2, 3, ...m.\n\nInput Parameter:   x - the vector in the equation ``Ax = rhs\"\"   mType - matrix type (optional). If the matrix is symmetric and only             the lower or upper triangle is present, the user must let             the routine know this by setting mType to one of:                 \"L\" or \"l\" - when only the lower triangle is present                 \"U\" or \"u\" - when only the upper triangle is present                 \"T\" or \"t\" - when either the lower or upper triangle is                              present. Updated Parameter:    p - the problem for which the RHS is being constructed.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkProblem.makegridproblem","page":"Functions","title":"Sparspak.SpkProblem.makegridproblem","text":"makegridproblem(g::Grid{IT}) where {IT}\n\nThis routine fills in a problem object using a given grid.\n\nInput:\n\ng - the Grid to be used to fill a Problem matrix\n\nOutput:\n\np - the Problem object to be filled\n\n\n\n\n\nmakegridproblem(h::IT, k::IT) where {IT}\n\nConstruct a problem object based on a grid.\n\nInput:\n\nh - the number of rows in the Grid\nk - the number of columns in the Grid\n\nOutput:\n\np - the Problem object to be filled\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparse-LU-Solver","page":"Functions","title":"Sparse LU Solver","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkSparseSolver","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"SparseSolver\nfindorder!\nfindorderperm!\nsymbolicfactor!\ninmatrix!\nfactor!\ntriangularsolve!\nsolve!","category":"page"},{"location":"man/functions/#Sparspak.SpkSparseSolver.SparseSolver","page":"Functions","title":"Sparspak.SpkSparseSolver.SparseSolver","text":"SparseSolver{IT, FT}\n\nType of LU general sparse solver.\n\n\n\n\n\n","category":"type"},{"location":"man/functions/#Sparspak.SpkSparseSolver.findorder!","page":"Functions","title":"Sparspak.SpkSparseSolver.findorder!","text":"findorder!(s::SparseSolver{IT}, orderfunction::F) where {IT, F}\n\nFind reordering of the coefficient matrix.\n\n\n\n\n\nfindorder!(s::SparseSolver{IT}) where {IT, F}\n\nFind reordering of the coefficient matrix using the default method.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.findorderperm!","page":"Functions","title":"Sparspak.SpkSparseSolver.findorderperm!","text":"findorderperm!(s::SparseSolver{IT}, perm) where {IT}\n\nFind reordering of the coefficient matrix using a given permutation.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.symbolicfactor!","page":"Functions","title":"Sparspak.SpkSparseSolver.symbolicfactor!","text":"symbolicfactor!(s::SparseSolver{IT})\n\nSymbolic factorization of the(reordered) matrix A.\n\nCreate the data structures for the factorization and forward and backward substitution. \n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.inmatrix!","page":"Functions","title":"Sparspak.SpkSparseSolver.inmatrix!","text":"inmatrix!(s::SparseSolver{IT}, p::Problem{IT}) where {IT}\n\nPut numerical values of the matrix stored in the problem into the data structures of the solver.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.factor!","page":"Functions","title":"Sparspak.SpkSparseSolver.factor!","text":"factor!(s::SparseSolver{IT}) where {IT}\n\nNumerical factorization of the coefficient matrix.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.triangularsolve!","page":"Functions","title":"Sparspak.SpkSparseSolver.triangularsolve!","text":"triangularsolve!(s::SparseSolver{IT},  p::Problem{IT}) where {IT}\n\nForward and backward substitution (triangular solution).\n\n\n\n\n\ntriangularsolve!(s::SparseSolver{IT, FT}, solution::Vector{FT}) where {IT, FT}\n\nForward and backward substitution (triangular solution).\n\nVariant where the right-hand side vector is passed in.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Sparspak.SpkSparseSolver.solve!","page":"Functions","title":"Sparspak.SpkSparseSolver.solve!","text":"solve!(s::SparseSolver{IT}, p::Problem{IT}) where {IT}\n\nExecute all the steps of the solution process.\n\nGiven a symmetric matrix A, the steps are:\n\nReordering of the matrix A. \nSymbolic factorization of the(reordered) matrix A. \nPutting numerical values of A into the data structures. \nNumerical factorization of A. \nForward and backward substitution (triangular solution).\n\nThe solution can be retrieved as p.x.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#Graphs","page":"Functions","title":"Graphs","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkGraph","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"Graph(p::Problem{IT}, diagonal=false) where {IT}\nmakestructuresymmetric(g::Graph{IT}) where {IT}\nsortgraph!(g::Graph{IT}) where {IT}\nisstructuresymmetric(g::Graph{IT}) where {IT}","category":"page"},{"location":"man/functions/#Sparspak.SpkGraph.Graph-Union{Tuple{Sparspak.SpkProblem.Problem{IT}}, Tuple{IT}, Tuple{Sparspak.SpkProblem.Problem{IT}, Any}} where IT","page":"Functions","title":"Sparspak.SpkGraph.Graph","text":"Graph(p::Problem{IT}, diagonal=false) where {IT}\n\nConstruct a graph from a problem object.\n\nIt does not check that the problem object contains a structurally symmetric matrix, since sometimes only the lower or upper triangle of a symmetric matrix may be stored. There are routines in this module to make a given graph object structurally symmetric.\n\nInput:\n\np - the problem object, used to create the graph\ndiagonal - indicates that the diagonal elements are included. If   diagonal is not given, the adjacency structure does not include   the diagonal elements.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkGraph.makestructuresymmetric-Union{Tuple{Sparspak.SpkGraph.Graph{IT}}, Tuple{IT}} where IT","page":"Functions","title":"Sparspak.SpkGraph.makestructuresymmetric","text":"makestructuresymmetric(g::Graph{IT}) where {IT}\n\nMake the graph structure symmetric.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkGraph.sortgraph!-Union{Tuple{Sparspak.SpkGraph.Graph{IT}}, Tuple{IT}} where IT","page":"Functions","title":"Sparspak.SpkGraph.sortgraph!","text":"sortgraph!(g::Graph{IT}) where {IT}\n\nSort the adjacency lists of the graph.\n\nImportant assumption: This works only for graphs that are symmetric.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Sparspak.SpkGraph.isstructuresymmetric-Union{Tuple{Sparspak.SpkGraph.Graph{IT}}, Tuple{IT}} where IT","page":"Functions","title":"Sparspak.SpkGraph.isstructuresymmetric","text":"isstructuresymmetric(g::Graph{IT}) where {IT}\n\nDetermines if a graph is structurally symmetric.\n\nImportant assumption: It is assumed that the adjacency lists are in increasing order.\n\nOutput: either true or false\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#Multiple-minimum-degree-(MMD)-ordering.","page":"Functions","title":"Multiple minimum degree (MMD) ordering.","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkMMD","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"mmd(g::Graph, order::Ordering)","category":"page"},{"location":"man/functions/#Elimination-Trees","page":"Functions","title":"Elimination Trees","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkSymfct","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"getetree!(g::Graph, order::Ordering, t::ETree)\ngetpostorder!(t::ETree{IT}, order::Ordering, weight) where {IT}","category":"page"},{"location":"man/functions/#Symbolic-Factorization","page":"Functions","title":"Symbolic Factorization","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkSymfct","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"","category":"page"},{"location":"man/functions/#Grid","page":"Functions","title":"Grid","text":"","category":"section"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"CurrentModule = Sparspak.SpkGrid","category":"page"},{"location":"man/functions/","page":"Functions","title":"Functions","text":"","category":"page"}]
}
