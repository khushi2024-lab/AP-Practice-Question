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
    const [name, role1, role2] = user.split("_");
    if(role1 === "READ" && role2 === "WRITE"){
        next();
    }else{
        res.status(403).json({"message":"Access Denied"});
    }

}

module.exports = {checkAccess}