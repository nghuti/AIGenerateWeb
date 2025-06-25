import jwt from 'jsonwebtoken'


const userAuth = async (req, res,next) => {
    const {token} = req.headers;

    if(!token){
        return res.json({success: false, message: 'Not authirized'})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            //sửa , ban đầu : req.body.userId = tokenDecode.id
            req.userId = tokenDecode.id
        }else {
            return res.json({success: false, message: 'Not authirized'})
        }

        next();

    } catch (error) {
        res.json({success: false, message: error.message});
    }
};

export default userAuth;