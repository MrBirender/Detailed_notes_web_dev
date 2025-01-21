
### 1. What is the difference between 'isNaN' and 'isFinite' methods in JavaScript?
Answer: isNaN() checks if the value is not a number, while isFinite() checks if the value is a finite number.

---

### 2. What does the 'Number.isInteger()' method do? How is it different from the 'isNaN()' method?
Answer: Number.isInteger() checks if the value is an integer (A whole number without a fractional part. It can be positive, negative, or zero), while isNaN() checks if the value is not a number.

---

### 3. How to Convert a String to a Number in JavaScript?

You can convert a string to a number using `parseInt` or `Number`. Here's a summary of their differences:

**1. `Number()`**
- Converts the **entire string** to a number.
- Returns `NaN` if the string contains **any non-numeric characters**.
- As we know type of `NAN` is number, the resultant value will have the type number.
- **Example:**
  ```javascript
  const str2 = '123b';
  const num2 = Number(str2);
  console.log(num2); // NaN
  ```

**2. `parseInt()`**
- Does not convert the entire string to a number.
- Stops parsing the string when it encounters a non-numeric character and will return `NaN`.
- As we know type of `NAN` is number, the resultant value will have the type number.
  ```javascript
  const str = "123b" || "123.45";
  const num = parseInt(str);
  console.log(num); // 123
  ```

---

### 4. What is 'NaN' in JavaScript and how can you check if a value is 'NaN'?

- **NaN (Not a Number)** is a special value in JavaScript that represents an invalid or undefined numerical operation.
- You can check if a value is `NaN` using the `isNaN()` function.

#### Example:
```javascript
console.log(isNaN("hello")); // true (because "hello" is not a number)
console.log(isNaN(123));     // false (because 123 is a number)
console.log(isNaN(NaN));     // true (because NaN is not a valid number)
```

---

### 5. How do you handle precision errors when dealing with floating-point numbers in JavaScript?
- **Answer: To handle precision errors, you can use the toFixed() method to format a number to a specific number of decimal places.

---
### 6. Why the `toFixed()` fucntion return the string as an output?
- ** Answer:
1. **`Formatting Focus`**: `toFixed()` is designed for display purposes, ensuring precise formatting like trailing zeros, which numbers can't inherently retain. 

2. **`Preventing Precision Loss`**: Numbers don't store unnecessary precision (e.g., trailing zeros), so returning a string preserves the exact representation.

3. **`Ease of String Manipulations`**: Returning a string makes it easier to append units, symbols, or perform further formatting without converting the value.

---
### 7. What are 'Infinity' and '-Infinity' in JavaScript? How do they behave in 
arithmetic operations?
- **Answer: `Infinity` and `-Infinity` are special values in JavaScript that represent infinity. They are used to represent positive and negative infinity respectively.
---

### 8. What does 'Number.MAX_VALUE' represent in JavaScript?

**Answer**: `Number.MAX_VALUE` is a constant in JavaScript that represents the maximum value that can be represented by a JavaScript number.

#### Example:

```javascript
const maxValue = Number.MAX_VALUE;
console.log("Maximum Value:", maxValue); 
// Output: Maximum Value: 1.7976931348623157e+308

const largerThanMax = maxValue * 2;
console.log("Larger Than MAX_VALUE:", largerThanMax); 
// Output: Larger Than MAX_VALUE: Infinity

const smallerThanMax = maxValue - 1;
console.log("Smaller Than MAX_VALUE:", smallerThanMax); 
// Output: Smaller Than MAX_VALUE: 1.7976931348623157e+308


---
### 9. What is the purpose of the `toLocaleString()` method in JavaScript for numbers? Explain with an example.

**Answer:**

- **The `toLocaleString()` method in JavaScript is used to convert a number to a string, using the local language-sensitive representation. It formats the number according to the locale and options provided, such as grouping separators, decimal places, and currency formatting.

### Example 1: Basic Number Formatting
By default, `toLocaleString()` formats the number based on the locale of the environment.

```javascript
const num = 1234567.89;
console.log(num.toLocaleString()); // Output (in US locale): "1,234,567.89"

---
