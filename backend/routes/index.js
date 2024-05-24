const express = require("express");

const router = express.Router();

const userSignUpController = require("../controllers/userSignup");
const userSignInController = require("../controllers/userSignin");
const userDetailsController = require("../controllers/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controllers/userLogout");
const allUsers = require("../controllers/allUsers");
const updateUser = require("../controllers/updateUser");
const bookSlot = require("../controllers/bookSlot");

router.post("/signup", userSignUpController);
router.post("/login", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//slot book
router.post("/book-slot", bookSlot);

//admin panel
//users
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

module.exports = router;
