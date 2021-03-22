const { create, getCompanyByEmail } = require("./company.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createCompany: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    getCompanyByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return results.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      const datares = compareSync(body.password, results.password);
      if (datares) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login success",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          message: "Invalid Email or password",
        });
      }
    });
  },
};
