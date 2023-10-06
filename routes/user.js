const express = require("express");
const router = express.Router();
const {
    GET_ALL_USERS,
    ADD_USER,
    GET_USER_BY_ID,
    GET_USER_CART,
    GET_USER_PRODUCTCART
} = require("../controller/user");

router.get("/users", GET_ALL_USERS);
router.get("/users", ADD_USER);
router.post("/users/:id", GET_USER_BY_ID);
router.get("/users/:userId/cart", GET_USER_CART);
router.post("/users/:userId/addToCart/:productId", GET_USER_PRODUCTCART);
module.exports = router;