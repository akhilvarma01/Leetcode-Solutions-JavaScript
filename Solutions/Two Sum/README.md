## Approach : 

### Naive:
This can be done in 2 ways, one is brute force which takes 0(n^2) time by running two for loops and checking their matched sum and returning the numbers.

### Optimal:
We can use Hash Table and run it in one pass.
We need to iterate and keep inserting elements into table. We check concurrently if a complement of a current number already exists in the table. If yes, we exit and return the solution.
