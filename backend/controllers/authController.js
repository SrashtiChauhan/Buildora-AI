import { User } from "../models/userModel.js"
import jwt from 'jsonwebtoken'

// export const googleAuth = async (req, res) => {
//     try {
        
//         const { name, email, avatar } = req.body;
        

//         console.log("BODY:", req.body); 

//         //  safety check 
//         if (!email) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email missing from request"
//             });
//         }

//         let user = await User.findOne({ email })
//         if (!user) {
//             user = await User.create({ name, email, avatar })
//         }

//         const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "7d" })
//         res.cookie("token", token,
//             { httpOnly: true, secure: true, sameSite: "none", maxAge: 7 * 24 * 60 * 60 * 1000 })

//         return res.status(200).json(user)

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// export const logoutUser = async (_, res) => {
//     try {
//          res.clearCookie("token")
//          return res.status(200).json({message:"User Logout Successfully"})
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }



// GOOGLE LOGIN 
export const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    console.log("BODY:", req.body);

    // Safety check
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email missing from request",
      });
    }

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, avatar });
    }

    // Check secret key
    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY missing in environment");
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Detect environment
    const isProduction = process.env.NODE_ENV === "production";

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction, // true only on HTTPS (Render)
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);

  } catch (error) {
    console.log("GOOGLE AUTH ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// LOGOUT 
export const logoutUser = async (_, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    return res.status(200).json({
      success: true,
      message: "User Logout Successfully",
    });

  } catch (error) {
    console.log("LOGOUT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};