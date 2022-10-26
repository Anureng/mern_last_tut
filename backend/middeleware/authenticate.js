const jwt = require("jsonwebtoken")
const user = require("../model/useSchema");
const Authenticate = async (req, res, next) => {
   try {
      const token = req.cookies.jwtoken;
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

      const rootuser = await user.findOne({ _id: verifyToken._id, "tokens.token": token });

      if (!rootuser) throw new Error("user not found");

      req.token = token;
      req.rootuser = rootuser;
      req.userID = rootuser._id;

      next();

   } catch (err) {
      console.log(err);
   }
}
module.exports = Authenticate