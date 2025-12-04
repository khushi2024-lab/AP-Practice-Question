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

const checkAccess = (req,res,next)=>{
    const {user} = req.params;
    if(user.includes("READ_WRITE")){
        next();
    }else{
        res.status(403).json({"message":"Access Denied"});
    }

}

module.exports = {checkAccess}