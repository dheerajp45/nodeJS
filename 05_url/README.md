## What is a URL?

A URL (Uniform Resource Locator) is the web address used to locate and access resources on the internet.

### Basic Structure
```
protocol://domain/path?query
```
- **protocol**: Specifies how data is transferred (e.g., http, https). HTTPS is secure, HTTP is not.
- **domain**: The user-friendly name that maps to an IP address (e.g., www.example.com).
- **path**: The specific location or resource on the server (e.g., /products, /user/profile). Paths can be single or nested.
- **query parameters**: Extra information passed in the URL, usually after a `?` (e.g., ?id=123&sort=asc). Used to filter or provide additional data to the server.

### Example
```
https://www.example.com/products?id=123&sort=asc
```
Here:
- Protocol: https
- Domain: www.example.com
- Path: /products
- Query parameters: id=123, sort=asc


# Node.js URL Module Notes

This README summarizes the usage and concepts of URLs in Node.js, based on the code and README content in the 05_url folder.

## What is a URL?
A URL (Uniform Resource Locator) is the address used to access resources on the internet. It specifies the location and retrieval method for a resource.

### URL Structure
```
scheme://domain:port/path?query#fragment
```
- **scheme**: Protocol (e.g., http, https)
- **domain**: Website address (e.g., www.example.com)
- **port**: Optional, specifies port (e.g., :8000)
- **path**: Resource location (e.g., /index.html)
- **query**: Optional, parameters (e.g., ?id=123)
- **fragment**: Optional, page anchor (e.g., #section)

## URL Module in Node.js
Node.js provides a built-in `url` module to parse and work with URLs. This is useful for handling HTTP requests, extracting parameters, and routing.

### Example: Parsing a URL
```js
const url = require('url');
const myUrl = 'https://www.example.com/products?id=123';
const parsedUrl = url.parse(myUrl, true);
console.log(parsedUrl.pathname); // '/products'
console.log(parsedUrl.query.id); // '123'
```

## Key Points
- URLs are essential for identifying and accessing resources on the web.
- The `url` module helps extract parts of a URL, such as pathname and query parameters.
- Useful for web servers and routing logic in Node.js applications.

---


