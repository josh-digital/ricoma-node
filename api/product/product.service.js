const { compareSync } = require("bcrypt");
const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    var colorIds = Array.from(new Set(data.colorIds.split(","))).join();

    pool.query(
      `insert into products(company_id,name,description,imageurl,sizeId,colorIds) values (?,?,?,?,?,?)`,
      [
        data.companyId,
        data.name,
        data.description,
        data.imageurl,
        data.sizeId,
        colorIds,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getProductByCompanyId: (id, callBack) => {
    pool.query(
      `select id,company_id,name,description,imageurl,sizeId,colorIds from products where isDeleted=0 and company_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateProduct: (data, callBack) => {
    var colorIds = Array.from(new Set(data.colorIds.split(","))).join();
    pool.query(
      `update products set company_id=?, name=?, description=?, imageurl=?, sizeId=?, colorIds=? where id = ?`,
      [
        data.companyId,
        data.name,
        data.description,
        data.imageurl,
        data.sizeId,
        colorIds,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, null);
      }
    );
  },
  deleteProduct: (data, callBack) => {
    pool.query(
      `update products set isDeleted=1 where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, null);
      }
    );
  },
};
