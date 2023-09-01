const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const {
  create_account,
  fetchByAccountInfo,
  fetchAllAccountInfo,
} = require("../controllers/index");

const { validateUserToken } = require("../lib/ath");

// route for authentication
router.post(
  "/create_account",
  body("accountname", "Name is required").trim(),
  create_account
);
router.get("/getAccountInfo", fetchByAccountInfo);
router.get("/getAllInfo", fetchAllAccountInfo);

module.exports = router;

