const { createProduct, updateProduct,deleteProduct,getProductByCompanyId } = require("./product.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createProduct);
router.patch("/", updateProduct);
router.delete("/", deleteProduct);
router.get("/:id",getProductByCompanyId);

module.exports = router;  
