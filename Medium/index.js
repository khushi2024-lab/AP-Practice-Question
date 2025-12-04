// # File Access Middleware with Role-Based Authorization

// ## Problem Statement

// You are tasked with building an Express.js server in `index.js` that
// checks user file access permissions based on their role, which is passed
// through the request URL.

// Each user has a specific access level, defined as either **READ_WRITE**
// or **READ**.

// When a user sends a request to the endpoint `/data/:user`, your
// middleware (`middleware.js`) should:

// -   Check if the user has **READ_WRITE** access.
// -   If the user has READ_WRITE access, call `next()` and allow access to
//     the `/data/:user` route.
// -   The route should read the contents of a file named `data.txt` and
//     send it in the response as JSON with the key `"message"` and status
//     code `200`.
// -   If the user does not have READ_WRITE access, reject the request with
//     status code `403` and the message:


//     { "message": "Access Denied" }

// ### Example

// **Request:**

// `GET /data/RAHUL_READ_WRITE`

// **Response (200 OK):**

//     {
//       "message": "File content here..."
//     }

// **Request:**

// `GET /data/NEERAJ_READ`

// **Response (403 Forbidden):**

//     {
//       "message": "Access Denied"
//     }

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const {checkAccess} = require("./middleware");
app.get("/data/:user", checkAccess,(req, res) => {
    const filePath = path.join(__dirname, "data.txt");
    const data = fs.readFileSync(filePath, "utf8");
    res.status(200).json({message: data});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });