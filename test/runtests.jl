using Test

@time @testset "Problem" begin
    include("test_problem.jl")
end

@time @testset "Ordering" begin
    include("test_ordering.jl")
end

@time @testset "Graph" begin
    include("test_graph.jl")
end

@time @testset "ETree" begin
    include("test_etree.jl")
end

@time @testset "Grid" begin
    include("test_grid.jl")
end

@time @testset "Generic LAPACK/BLAS" begin
    include("test_blfragments.jl")
end

@time @testset "Sparse method" begin
    include("test_sparse_method.jl")
end

@time @testset "Generic floating type" begin
    include("test_generic.jl")
end

@time @testset "SparseMatrixCSC Interface" begin
    include("test_cscinterface.jl")
end

@time @testset "Structurally unsymmetric" begin
    include("test_structunsymm.jl")
end

@time @testset "Further tests of small unsymmetric matrices" begin
    include("test_small.jl")
end


