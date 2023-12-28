---
title: Complexity
description: A guide about complex data structures
author: Bard/Gemini
date: 2023-12-11
tags: markup, complex, structure
sort: 2
---


***Complex data structures:*** are those that go beyond simple types like integers, strings, and booleans. They allow you to organize and store your data in a more structured and flexible way, especially when dealing with larger or more complex datasets.


## Examples

**1. Lists of Lists:**

Imagine you have a list of students, and each student has a list of their grades. A simple list wouldn't be enough to represent this data effectively. Instead, you can use a list of lists:

```
students = [
  ["John", [90, 85, 95]],
  ["Jane", [80, 75, 90]],
  ["Mike", [70, 80, 85]],
]
```

This structure allows you to access individual students and their grades efficiently. You can iterate through the outer list to access each student and then through the inner list to access their specific grades.

**2. Dictionaries of Objects:**

In another scenario, you might have a list of users, and each user has various attributes like name, age, and email address. A single list wouldn't be able to capture this information effectively. Instead, you can use a dictionary of objects:

```
users = {
  "john_doe" => User(name="John Doe", age=30, email="john.doe@example.com"),
  "jane_doe" => User(name="Jane Doe", age=25, email="jane.doe@example.com"),
  "mike_lee" => User(name="Mike Lee", age=40, email="mike.lee@example.com"),
}
```

This structure allows you to access each user by their unique identifier and then access their individual attributes using dot notation. It's also easier to add new users or update existing ones.

These are just two simple examples, but they demonstrate how complex data structures can be used to store and manage complex datasets more effectively. They offer several benefits compared to simple data types:

* **Improved organization:** Data is organized in a logical and hierarchical manner, making it easier to understand and navigate.
* **Efficient access:** Complex structures allow for faster and easier access to specific pieces of data based on keys, indexes, or other criteria.
* **Flexibility and extensibility:** They can adapt to different types of data and grow alongside the complexity of your data needs.
* **Reusable and modular:** Code based on these structures can be easily reused and adapted to different contexts.

As you work with larger and more diverse datasets, understanding and utilizing complex data structures will become increasingly important for writing efficient and maintainable code.

---

## In Rust

Rust offers a wide range of complex data structures beyond basic arrays and dictionaries. These structures can be used to efficiently represent and manipulate various kinds of data, improving code organization and performance. Let's explore some common examples:


 **Here are some common examples of complex data structures in Rust:**

- **Linked Lists:**
    - Store a sequence of elements where each element (or node) contains data and a link to the next node.
    - Useful for dynamic collections where elements are frequently added or removed, such as task queues or undo/redo stacks.
    - Example: `LinkedList` from the `std::collections` module.

- **Trees:**
    - Hierarchical structures with a root node and child nodes, forming a branching structure.
    - Used for representing hierarchical data like file systems, organizational charts, or decision trees.
    - Types:
      - Binary trees: Each node has at most two children (e.g., binary search trees for efficient searching).
      - General trees: Nodes can have any number of children (e.g., expression trees for parsing mathematical expressions).

- **Graphs:**
    - A collection of nodes (vertices) connected by edges, representing relationships or connections.
    - Used for modeling networks, maps, social relationships, and many other real-world systems.
    - Representations:
      - Adjacency matrix: A 2D matrix indicating connections between nodes.
      - Adjacency list: A list of neighbors for each node.

- **Heaps:**
    - Special tree-based structures where the value of each node is either greater than or equal to (max-heap) or less than or equal to (min-heap) the values of its children.
    - Used for priority queues, efficient sorting algorithms (heap sort), and graph algorithms like Dijkstra's shortest path algorithm.

- **Hash Maps:**
    - Efficient key-value storage where keys are mapped to values using a hash function for fast lookups.
    - Used for dictionaries, caches, and implementing sets.
    - Example: `HashMap` from the `std::collections` module.

- **Sets:**
    - Collections of unique elements, ensuring no duplicates.
    - Used for membership testing, removing duplicates, and performing set operations like unions and intersections.
    - Example: `HashSet` from the `std::collections` module.

---

**Disclaim:** This article was created with Bard






