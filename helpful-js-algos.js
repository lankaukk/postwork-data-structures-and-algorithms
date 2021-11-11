```
function findElement(arr, target):
  iterate over arr:
    if element == target:
      return true 

  return false
```

```
function findDuplicate(arr):
  zeroth_element = arr[0]

  iterate over arr starting at index 1:
    if element == zeroth_element:
      return true

  return false
```

// example of O(n) time complexity:
// linear
```
function find_lowest_and_highest(arr):
  result = []
  result << iterate and find minimum in arr
  result << iterate and find maximum in arr

  return result
```

// example of O(1) time complexity:
// constant
```
function find_by_index(arr, index):
  print arr[index]
  return arr[index]
```

// example of O(n^2) time complexity:
// quadratic
```
function nested_loop_quadratic_time(arr):
  iterate over arr:
    iterate over arr:
      perform some operation
```

// example of O(log n) time complexity:
// logarithmic
```
function useless_log_n_loop(arr):
  n = length of arr

  while n > 0:
    print arr[n]
    n = n / 2
    round down n to nearest integer
```

// When calculating Big O for recursive functions, we compare the total stack frames over time to the size of the input.
// Big O is O(n)
```
function count(stop_count, count = 0):
  if count >= stop_count:
    return 'done'

  return count(stop_count, count + 1)
```