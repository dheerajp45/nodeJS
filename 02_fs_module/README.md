# Node.js FS Module Notes

This README summarizes the usage of the `fs` module in the provided [index.js](02_fs_module/index.js) file, including explanations from the comments.

## Synchronous vs Asynchronous File Operations

- **Synchronous Methods** (`fs.writeFileSync`, `fs.readFileSync`, etc.)
  - Block execution until the operation completes.
  - Return values directly (e.g., file contents can be assigned to a variable).
  - Example:
    ```js
    fs.writeFileSync('./abc.txt', 'dheeraj p 45');
    const res = fs.readFileSync('./contacts.txt', 'utf-8');
    console.log(res);
    ```

- **Asynchronous Methods** (`fs.writeFile`, `fs.readFile`, etc.)
  - Do not block execution; use callbacks to handle results.
  - Cannot return values directly; results are accessed inside the callback.
  - Example:
    ```js
    fs.writeFile('./xyz.txt', 'dheeraj github linkedin', (err) => {});
    fs.readFile('./info.txt', 'utf-8', (err, result) => {
      if (err) {
        console.log('Error:', err);
      } else {
        console.log(result);
      }
    });
    ```

## Additional FS Methods Used

- **fs.appendFileSync**
  - Appends data to a file synchronously.
  - Example: `fs.appendFileSync('./date.txt', {new Date().toLocaleString()}\n');`

- **fs.cpSync**
  - Copies a file synchronously.
  - Example: `fs.cpSync('./date.txt', './copy.txt');`

- **fs.unlink**
  - Deletes a file asynchronously.
  - Example: `fs.unlink('./dhee.txt')` (throws error if file does not exist)

## Key Points from Comments

- `fs.readFile` cannot return values directly; results are handled in the callback.
- `fs.readFileSync` can return values into a variable.
- For writing files, both sync and async methods exist, but their usage and return values differ.
- Deleting files with `fs.unlink` will throw an error if the file does not exist.

## Summary Table

| Method              | Sync/Async | Returns Value | Uses Callback | Example                      |
|---------------------|------------|--------------|--------------|------------------------------|
| writeFileSync       | Sync       | Yes          | No           | writeFileSync(path, data)    |
| writeFile           | Async      | No           | Yes          | writeFile(path, data, cb)    |
| readFileSync        | Sync       | Yes          | No           | readFileSync(path, encoding) |
| readFile            | Async      | No           | Yes          | readFile(path, encoding, cb) |
| appendFileSync      | Sync       | Yes          | No           | appendFileSync(path, data)   |
| cpSync              | Sync       | Yes          | No           | cpSync(src, dest)            |
| unlink              | Async      | No           | Yes          | unlink(path, cb)             |

---

For more details, see the code and comments in [index.js](02_fs_module/index.js).
