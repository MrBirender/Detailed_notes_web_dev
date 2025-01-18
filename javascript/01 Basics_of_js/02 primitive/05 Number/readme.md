
### 1.What is the difference between 'isNaN' and 'isFinite' methods in JavaScript?
Answer: isNaN() checks if the value is not a number, while isFinite() checks 
if the value is a finite number.


## 2.What does the 'Number.isInteger()' method do? How is it different from the 'isNaN()' method?
Answer: Number.isInteger() checks if the value is an integer( An integer is a -
whole number without a fractional part. It can be positive, negative, or zero.), while isNaN() 
checks if the value is not a number.

### 3.How to Convert a String to a Number in JavaScript?

# You can convert a string to a number using `parseInt` or `Number`. Here's a summary of their differences:

## **1. `Number()`**
- Converts the **entire string** to a number.
- Returns `NaN` if the string contains **any non-numeric characters**.
- **Example:**
  ```javascript
  const str2 = '123b';
  const num2 = Number(str2);
  console.log(num2); // NaN
