const { create,  updateProduct,
  deleteProduct,getProductByCompanyId } = require("./product.service");


module.exports = {
  createProduct: (req, res) => {
    
    create( req.body, (err, results) => {
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
  getProductByCompanyId: (req, res) => {
    const id = req.params.id;
    getProductByCompanyId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results
      });
    });
  },


  updateProduct: (req, res) => {
   
    updateProduct(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "product updated successfully"
      });
    });
  },
  deleteProduct: (req, res) => {
    const data = req.body;
    deleteProduct(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      
      return res.json({
        success: 1,
        message: "product deleted successfully"
      });
    });
  }
};
