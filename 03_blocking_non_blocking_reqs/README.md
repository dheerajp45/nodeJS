# Blocking vs Non-Blocking Requests in Node.js

This README explains the difference between blocking (synchronous) and non-blocking (asynchronous) requests in Node.js, based on the code and comments in [index.js](03_blocking_non_blocking_reqs/index.js).

## Blocking (Synchronous) Requests

- Synchronous methods (like `fs.readFileSync`) block the execution of further code until the operation completes.
- The result is returned immediately and can be used in variables.
- Example:
  ```js
  console.log("blocking 1");
  const block_res = fs.readFileSync('./abc.txt', "utf-8");
  console.log(block_res);
  console.log("blocking 2");
  ```
- Output order:
  1. "blocking 1"
  2. Contents of `abc.txt`
  3. "blocking 2"

## Non-Blocking (Asynchronous) Requests

- Asynchronous methods (like `fs.readFile`) do not block execution; code continues running while the operation completes in the background.
- Results are handled in a callback function.
- Example:
  ```js
  console.log("non blocking 1");
  fs.readFile("./xyz.txt", "utf-8", (err, non_block_res) => {
    console.log(non_block_res);
  });
  console.log("non blocking 2");
  ```
- Output order:
  1. "non blocking 1"
  2. "non blocking 2"
  3. Contents of `xyz.txt` (after file read completes)

## Key Points from Comments

- Blocking requests pause execution until finished; you see file data before subsequent logs.
- Non-blocking requests allow other code to run; file data appears after other logs.
- Use synchronous methods for simple scripts or when order matters, but prefer asynchronous methods for scalable, non-blocking applications.

## Summary Table

| Method           | Type         | Blocks Execution | Returns Value | Uses Callback | Example                      |
|------------------|--------------|------------------|--------------|--------------|------------------------------|
| readFileSync     | Synchronous  | Yes              | Yes          | No           | readFileSync(path, encoding) |
| readFile         | Asynchronous | No               | No           | Yes          | readFile(path, encoding, cb) |

---

For more details, see the code and comments in [index.js](03_blocking_non_blocking_reqs/index.js).
