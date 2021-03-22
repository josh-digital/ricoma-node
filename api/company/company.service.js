const { compareSync } = require("bcrypt");
const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into company(companyname,email,password) values (?,?,?)`,
      [data.companyname, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getCompanyByEmail: (email, callback) => {
    pool.query(
      `select * from company where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
