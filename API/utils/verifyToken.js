const jwt=require('jsonwebtoken')
const {error}=require("./error")
const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token) return next(403,"You are not authenticated !!")
    jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err) return next(403,"Token Invalid")
    req.user=user;
    next();
    })
}

const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if (req.user.id== req.params.id || req.user.isAdmin)
         next()
        else 
         return next(403,"You are not authorized!!")
    })
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if ( req.user.isAdmin)
         next()
        else {
            console.log("You are not authorized!!");
            return next(403,"You are not authorized!!")
        }
        
    })
}

module.exports={verifyToken,verifyUser,verifyAdmin}