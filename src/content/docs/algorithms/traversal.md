---
title: Traversal
description: Array Traversal
collection: algorithms
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

**Disclaim:** Examples are created with Bard.




