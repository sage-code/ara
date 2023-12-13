---
title: Traversal
description: Array Traversal
collection: algorithms
parent: Introduction
sort: 3
---

Array traversal is one of the most basic and fundamental algorithms in computer science. It is considered a simple algorithm because it involves straightforward logic and requires minimal computational resources.

## Characteristics

1. **Straightforward Logic:** The basic idea behind array traversal is to visit each element in the array one by one and perform some operation on it. This operation could be something simple like printing the element, or something more complex like calculating a sum or searching for a specific value.
2. **Limited Control Flow:** Array traversal typically uses simple control flow structures like loops (for loop, while loop) to iterate through the elements. These structures are easy to understand and implement, making the algorithm easy to follow.
3. **Minimal Computational Resources:** Array traversal algorithms require minimal computational resources. They typically have low memory requirements and involve basic arithmetic operations. This makes them efficient and suitable for even resource-constrained environments.

## Examples

* **Printing elements:** This involves iterating through the array and printing each element to the console.
* **Finding the sum of elements:** This involves iterating through the array and adding each element to a running total.
* **Searching for a specific value:** This involves iterating through the array and comparing each element to the target value.

While these are simple examples, the same basic principles can be applied to more complex tasks. For example, you can use array traversal to perform operations on multi-dimensional arrays, linked lists, and other data structures.

Next we explain these algorithms with example implementations in Julia language. You can imagine similar implementations in your favorite language. You can ask Bard to degenerate code for you and try to execute the code, to verify it's functionality.

### Printing elements

```julia
# Create an array from a range of 10 numbers
numbers = 1:10

# Traverse the array and print each element
for element in numbers
    print(element, ", ")
end
println(" ")
```

This code will print the following output:

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
```

### Sum of elements

Here's we demonstrate array traversal in Julia by making a sum for an Array of 12 Fibonacci numbers in series from first to last and print the sum:

```julia
# Define a function to calculate the nth Fibonacci number
function fibonacci(n)
    if n <= 1
        return n
    else
        return fibonacci(n-1) + fibonacci(n-2)
    end
end

# Initialize an array to store the Fibonacci numbers
fib_array = Array{Int64}(12)

# Generate the first 12 Fibonacci numbers and store them in the array
for i in 1:12
    fib_array[i] = fibonacci(i)
end

# Traverse the array and calculate the sum
sum = 0
for element in fib_array
    sum += element
end

# Print the sum of the Fibonacci numbers
println("Sum of Fibonacci numbers:", sum)
```

This code defines a function `fibonacci` to calculate the nth Fibonacci number. It then initializes an array `fib_array` to store the first 12 Fibonacci numbers. The loop iterates through the range 1 to 12, calling the `fibonacci` function for each value and storing the result in the corresponding index of the `fib_array`.

Next, another loop iterates through the `fib_array` and accumulates the sum of each element in a variable `sum`. Finally, the code prints the total sum of the Fibonacci numbers.

This code demonstrates two ways to traverse an array in Julia:

1. **Explicit loop:** This uses the `for` loop with an index variable to access each element by its position in the array.
2. **Implicit loop:** This uses the `for` loop with an iterator variable to access each element directly without requiring an index.

Both methods achieve the same result, but the explicit loop might be easier to understand for beginners, while the implicit loop can be more concise and readable for experienced Julia programmers.

---

## Tree Traversal

Tree traversal involves visiting each node in a specific order. There are three main traversal methods:

**a. Pre-order traversal:** Visit the current node, then recursively visit its left and right children.

```julia
function preorder_traversal(node)
    if !is_empty_node(node)
        println(node.value)
        preorder_traversal(node.left)
        preorder_traversal(node.right)
    end
end
```

**b. In-order traversal:** Visit the left child, then the current node, and then the right child.

```julia
function inorder_traversal(node)
    if !is_empty_node(node)
        inorder_traversal(node.left)
        println(node.value)
        inorder_traversal(node.right)
    end
end
```

**c. Post-order traversal:** Visit the left child, then the right child, and then the current node.

```julia
function postorder_traversal(node)
    if !is_empty_node(node)
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        println(node.value)
    end
end
```

----

## Graph Traversal

In Julia, graph traversal refers to the process of visiting all vertices of a graph in some specific order. There are several algorithms for performing graph traversal, each with its own advantages and disadvantages. The two most common types of graph traversal are:

**1. Breadth-First Search (BFS):**

This algorithm explores all the neighbors of a vertex before moving on to the next level. It uses a queue data structure to keep track of visited and unexplored vertices. BFS is ideal for finding the shortest path between two vertices in an unweighted graph.

**2. Depth-First Search (DFS):**

This algorithm explores one branch of the graph as far as possible before backtracking and exploring other branches. It uses a stack data structure to keep track of the path taken. DFS is useful for finding all paths between two vertices, identifying connected components, and cycle detection.

Here are some key points to remember about graph traversal in Julia:

* **Graphs.jl**: This is the most popular Julia package for working with graphs. It provides efficient implementations of both BFS and DFS algorithms.
* **Path and Traversal**: This module within Graphs.jl offers various functions for performing graph traversal, including `breadth_first_search`, `depth_first_search`, and `shortest_path`.
* **Edge Distance**: You can specify edge distances in some algorithms, allowing you to find the path with the minimum total distance.
* **Directionality**: You should choose the appropriate traversal algorithm based on whether your graph is directed or undirected. Some algorithms only work with directed graphs, while others can be used with either type.

---


**Disclaim:** Examples are created with Bard.




