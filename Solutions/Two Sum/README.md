## Approach : 

### Naive:
This can be done in 2 ways, one is brute force which takes 0(n^2) time by running two for loops and checking their matched sum and returning the numbers.

### Optimal:
We can use Hash Table and run it in one pass.
We need to iterate and keep inserting elements into table. We check concurrently if a complement of a current number already exists in the table. If yes, we exit and return the solution.

###Explanation:

Steps :
1. Store difference of target and initial values in array into hash table.
2. Check the dictionary to see if value in nums array match with value in hash array.
3. If match found , we return the index of value at position i and index of value from the dictionary.
4. Note that we add difference(between target and nums[i]) and index i of the iteration to the hash table.
