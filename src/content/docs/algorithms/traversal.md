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

Next we explain these algorithms with example implementations in Rust language. You can imagine similar implementations in your favorite language. You can ask Bard to degenerate code for you and try to execute the code, to verify it's functionality.

### Printing elements

```rust
fn main() {
    // Create an array using the range syntax
    let numbers: Vec<i32> = (1..=10).collect();

    // Iterate over the array and print each element with a comma
    for element in numbers.iter() {
        print!("{}, ", element);
    }

    // Print a newline for formatting
    println!("");
}
```

This code will print the following output:

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
```

**Explanation:**

1. **Array Creation:**
   - `(1..=10)` creates a range of integers from 1 to 10 (inclusive).
   - `collect()` gathers the range elements into a `Vec<i32>` (vector of 32-bit integers).

2. **Iterating and Printing:**
   - `for element in numbers.iter()` iterates over each element in the vector using a reference (`iter()`).
   - `print!("{}, ", element)` prints the element followed by a comma and space, using formatted printing (`print!`) to avoid a newline.

3. **Final Newline:**
   - `println!("")` prints a newline for proper formatting.

**Key Rust Concepts:**

- **Ranges:** `(start..end)` or `(start..=end)` create ranges of values.
- **Vectors:** `Vec<T>` is a dynamically resizable array, storing elements of type `T`.
- **Iterators:** `iter()` provides a way to traverse collections without consuming ownership.
- **Formatted Printing:** `print!` prints without a newline, while `println!` adds a newline.
- **Type Annotations:** `let numbers: Vec<i32>` explicitly specifies the vector's type.


### Sum of elements

Here's we demonstrate array traversal in Rust by making a sum for an Array of 12 Fibonacci numbers in series from first to last and print the sum:

```rust
fn main() {
    // Define the Fibonacci function
    fn fibonacci(n: u16) -> u16 {
        if n <= 1 {
            n
        } else {
            fibonacci(n - 1) + fibonacci(n - 2)
        }
    }

    // Create an array to store the Fibonacci numbers
    let mut fib_array: Vec<u16> = Vec::with_capacity(12);

    // Generate and store the first 12 Fibonacci numbers
    for i in 1..=12 {
        fib_array.push(fibonacci(i));
    }

    // Calculate the sum of the array elements
    let sum: u16 = fib_array.iter().sum();

    // Print the sum
    println!("Sum of Fibonacci numbers: {}", sum);
}
```

**Explanation:**

1. **Fibonacci Function:**
   - `fn fibonacci(n: u16) -> u16 { ... }` defines a recursive function using `u16` for 16-bit unsigned integers.

2. **Array Creation:**
   - `let mut fib_array: Vec<u16> = Vec::with_capacity(12);` creates a mutable vector with initial capacity 12.

3. **Generating Fibonacci Numbers:**
   - `for i in 1..=12 { ... }` iterates from 1 to 12.
   - `fib_array.push(fibonacci(i));` calls `fibonacci` for each `i` and appends the result to the vector.

4. **Sum Calculation:**
   - `let sum: u16 = fib_array.iter().sum();` uses the `iter()` method to create an iterator and the `sum()` method to calculate the sum efficiently.

5. **Printing the Sum:**
   - `println!("Sum of Fibonacci numbers: {}", sum);` prints the final sum.

**Key Rust Concepts:**

- **Recursion:** Functions can call themselves to solve problems recursively.
- **Unsigned Integers:** `u16` represents non-negative integers from 0 to 65,535.
- **Vectors:** `Vec<T>` is a dynamic array, allowing elements to be added or removed.
- **Iterators:** `iter()` provides a way to traverse collections without consuming ownership.
- **Method Chaining:** `iter().sum()` chains methods for concise operations.
- **Type Annotations:** `let sum: u16` explicitly specifies the variable's type.


---

## Tree Traversal

Tree traversal involves visiting each node in a specific order. There are three main traversal methods:

**a. Pre-order traversal:** Visit the current node, then recursively visit its left and right children.


```rust
fn preorder_traversal(node: &Node) {
    if !node.is_empty() {
        println!("{}", node.value);
        preorder_traversal(&node.left);
        preorder_traversal(&node.right);
    }
}
```

**Explanation:**

1. **Function Signature:**
   - `fn preorder_traversal(node: &Node)` takes a reference to a `Node` struct as input.

2. **Empty Node Check:**
   - `if !node.is_empty() { ... }` conditionally executes the traversal if the node is not empty.

3. **Print Node Value:**
   - `println!("{}", node.value);` prints the current node's value.

4. **Recursive Calls:**
   - `preorder_traversal(&node.left);` traverses the left subtree recursively.
   - `preorder_traversal(&node.right);` traverses the right subtree recursively.

**Key Rust Concepts:**

- **References:** `&node` passes a reference to the node, avoiding ownership transfer and enabling recursion.
- **Struct Methods:** `node.is_empty()` and `node.value` access fields and methods of the `Node` struct.
- **Recursion:** The function calls itself to traverse the subtrees, forming a preorder traversal pattern (root, left, right).

**Assumptions:**

- A `Node` struct with fields `value`, `left`, and `right` exists.
- An `is_empty()` method is defined for the `Node` struct.


**b. In-order traversal:** Visit the left child, then the current node, and then the right child.


```rust
fn inorder_traversal(node: &Node) {
    if !node.is_empty() {
        inorder_traversal(&node.left);
        println!("{}", node.value);
        inorder_traversal(&node.right);
    }
}
```

**Explanation:**

1. **Function Signature:**
   - Identical to the preorder traversal, taking a reference to a `Node`.

2. **Empty Node Check:**
   - Same as before, ensures traversal only for non-empty nodes.

3. **Traversal Order:**
   - `inorder_traversal(&node.left);` recursively traverses the left subtree first.
   - `println!("{}", node.value);` prints the current node's value after the left subtree.
   - `inorder_traversal(&node.right);` recursively traverses the right subtree last.

**Key Difference from Preorder Traversal:**

- The order of operations within the conditional block has changed:
   - Preorder: Print -> Left -> Right
   - Inorder: Left -> Print -> Right

This swap results in the inorder traversal pattern (left, root, right), visiting nodes in ascending order if the tree is a binary search tree.

**Assumptions:**

- Same as for the preorder traversal, a `Node` struct with `value`, `left`, and `right` fields and an `is_empty()` method exist.


**c. Post-order traversal:** Visit the left child, then the right child, and then the current node.


```rust
#[derive(Debug)] // Add this to enable printing of Node values
struct Node {
    value: i32, // Assuming integer values for nodes
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

impl Node {
    fn is_empty(&self) -> bool {
        self.value == 0 // Assuming 0 indicates an empty node
    }
}

fn postorder_traversal(node: &Node) {
    if !node.is_empty() {
        postorder_traversal(&node.left.as_ref().unwrap());
        postorder_traversal(&node.right.as_ref().unwrap());
        println!("{}", node.value);
    }
}
```

**Explanation:**

1. **Struct Definition:**
   - `#[derive(Debug)]`: This attribute enables printing the `Node` structure for debugging purposes.
   - `value`: Stores the node's value (assumed to be an integer here).
   - `left` and `right`: Option<Box<Node>> types represent optional child nodes, using `Box` for heap allocation to manage ownership.

2. **`is_empty` Method:**
   - Checks if a node is empty by comparing its value to 0 (adjust this condition if needed).

3. **`postorder_traversal` Function:**
   - Takes a reference to a `Node` to avoid unnecessary copies.
   - Uses recursion to traverse the tree:
     - If the node is not empty:
       - Recursively traverse the left subtree.
       - Recursively traverse the right subtree.
       - Print the node's value using `println!`.

4. **Handling Options:**
   - `as_ref().unwrap()` is used to safely access the child nodes within the `Option` wrapper, ensuring they are not empty before proceeding.

**Example Usage:**

```rust
let root = Node {
    value: 1,
    left: Some(Box::new(Node {
        value: 2,
        left: Some(Box::new(Node { value: 4, left: None, right: None })),
        right: Some(Box::new(Node { value: 5, left: None, right: None })),
    })),
    right: Some(Box::new(Node {
        value: 3,
        left: Some(Box::new(Node { value: 6, left: None, right: None })),
        right: Some(Box::new(Node { value: 7, left: None, right: None })),
    })),
};

postorder_traversal(&root); // Output: 4 5 2 6 7 3 1
```


----

## Graph Traversal

 **Graph traversal** is a fundamental technique in graph theory and computer science that involves systematically visiting every node (or vertex) in a graph. It's essential for various tasks, including:

- **Finding paths between nodes:** Determining the shortest or most efficient routes in maps, networks, and routing algorithms.
- **Searching for specific nodes or patterns:** Utilized in search engines, social network analysis, and pattern recognition.
- **Detecting cycles and connectivity:** Identifying circular relationships and determining if all nodes are reachable from each other.
- **Topological sorting:** Ordering nodes based on their dependencies, used in scheduling tasks and resolving dependencies in code.

**Common Traversal Methods:**

1. **Depth-First Search (DFS):**
   - Starts at a root node and explores as far as possible along each branch before backtracking.
   - Often implemented recursively or using a stack for tracking visited nodes.
   - Useful for finding paths, connected components, and cycle detection.

2. **Breadth-First Search (BFS):**
   - Explores nodes level by level, visiting all nodes at the current level before moving to the next.
   - Typically implemented using a queue to maintain the order of nodes to visit.
   - Used for finding shortest paths, solving puzzles like mazes, and determining the minimum number of steps between nodes.

**Traversal Order:**

- **Preorder:** Visits the root node first, then the left subtree, and finally the right subtree (applicable for trees).
- **Inorder:** Visits the left subtree, then the root node, and finally the right subtree (often used for binary search trees).
- **Postorder:** Visits the left subtree, then the right subtree, and finally the root node (useful for evaluating expressions and deleting trees).

**Key Considerations:**

- **Handling Cycles:** Graphs can have cycles, so algorithms must avoid infinite loops by keeping track of visited nodes.
- **Directed vs. Undirected Graphs:** Traversal approaches might differ slightly for directed graphs (where edges have a direction) and undirected graphs (where edges don't have a direction).
- **Graph Representation:** The choice of graph representation (e.g., adjacency matrix, adjacency list) can influence the efficiency of traversal algorithms.

---


**Disclaim:** Examples are created with Bard.




