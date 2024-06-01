const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const userModel = require("../models/userModel");

const sendResetPasswordMail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "",
        pass: "",
      },
    });

    const mailOptions = {
      from: "",
      to: email,
      subject: "For Reset Password",
      html:
        "<p>Hii" +
        name +
        ', Please copy the link and <a href="http://localhost:5900/api/resetPassword?token="' +
        token +
        "> reset your password</a>",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent:- ", info.response);
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = userModel.findOne({ email: email });

    console.log("user email----->", userData);

    if (userData) {
      const randomString = randomstring.generate();
      const data = await userModel.updateOne(
        { email: email },
        { $set: { token: randomString } }
      );
      sendResetPasswordMail(userData.name, userData.email, randomString);
      res.status(200).json({
        message: "Please check your inbox of mail and reset your password",
        success: true,
        error: false,
      });
    } else {
      res.status(500).json({
        message: "This email does not exist",
        success: false,
        error: true,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || error, success: false, error: true });
  }
};

module.exports = forgotPassword;
