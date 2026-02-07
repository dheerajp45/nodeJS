# NodeJS Modules Example

## Overview

This project demonstrates how to create and use custom modules in Node.js. It covers:
- Exporting functions from modules
- Importing modules using `require`
- Destructuring and renaming imports



### 1. Exporting Functions
- Use `module.exports` to export functions or objects from a module.
- Example:
  ```js
  function add(a, b) { return a + b; }
  module.exports = { add };
  ```

### 2. Importing Modules
- Use `require('./moduleName')` to import a module.
- You can import the whole exported object or use destructuring to import specific functions.

### 3. Renaming Imports
- You can rename imported properties using destructuring:
  ```js
  const { mul: m, div: d } = require("./maths2");
  ```

### 4. Export Names
- Exported property names do not need to match the file or package name.
- The names you use when importing must match the exported property names, but you can rename them as needed.

### 5. Best Practices
- Keep related functions in separate modules for better organization.
- Use clear and descriptive names for exports.

---

## Notes

### 1. Exporting Functions
- Functions are exported using `module.exports` as an object.
- Example:
  ```js
  function add(a, b) { return a + b; }
  module.exports = { add };
  ```
- You can export multiple functions together:
  ```js
  module.exports = { mul, div };
  ```

### 2. Importing Modules
- Import all exports as a single object:
  ```js
  const math = require("./maths");
  ```
  - Usage: `math.add(3, 4)`

- Import specific functions using destructuring:
  ```js
  const { mul, div } = require("./maths2");
  ```
  - Usage: `mul(3, 4)`, `div(4, 4)`

- Import and rename functions:
  ```js
  const { mul: m, div: d } = require("./maths2");
  ```
  - Usage: `m(4, 4)`, `d(4, 4)`

### 3. Printed Results
- The code prints results of different operations:
  - Addition: `math.add(3, 4)` prints `7`
  - Division: `d(4, 4)` prints `1`
  - You can also print multiplication, subtraction, etc., by calling the respective functions.

### 4. Different Import Styles
- You can import all functions as an object, or use destructuring to import only what you need.
- You can rename imported functions for convenience.

### 5. Best Practices
- Organize related functions in separate modules.
- Use clear names for exports and imports.
- Choose import style based on your needs (all, specific, or renamed).

---

This covers the different methods used, the printed results, and the various import styles demonstrated in your code.