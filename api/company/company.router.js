const { createCompany, login } = require("./company.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createCompany);
router.post("/login", login);

// router.post("/",checkToken,getlist);

module.exports = router;
