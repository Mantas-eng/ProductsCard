const UserModel = require("../models/user");

let users = [];

const GET_ALL_USERS = (req, res) => {
    UserModel.find().then((response) => {
        return res.json({ tasks: response });
    });
};

const GET_USER_BY_ID = (req, res) => {
    UserModel.findById(req.params.id).then((response) => {
        return res.json({ task: response });
    });
};
const ADD_USER = (req, res) => {
    const user = new UserModel({ name: req.body.name, email: req.body.email, user_tasks: [] });

    user
        .save()
        .then((dbResponse) => {
            return res
                .status(201)
                .json({ response: "User was added", user: dbResponse });
        })
        .catch((err) => {
            console.log("ERROR: ", err);
            res.status(500).json({ response: "something went wrong" });
        });
};

const GET_USER_CART = async (req, res) => {
    try {
        const userId = req.params.userId;
        const productId = req.params.productId;

        const user = await UserModel.findById(userId);
        const product = await ProductModel.findById(productId);

        if (!user || !product) {
            return res.status(404).json({ error: 'Vartotojas arba produktas nerastas' });
        }

        if (user.userCartProducts.includes(productId)) {
            return res.status(400).json({ error: 'Produktas jau yra krepšelyje' });
        }

        user.userCartProducts.push(productId);
        await user.save();

        res.json({ message: 'Produktas pridėtas į krepšelį', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nepavyko pridėti produkto į krepšelį' });
    }
};
const UserModel = require("../models/user");

const GET_USER_PRODUCTCART = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Vartotojas nerastas' });
        }

        const userCartProducts = user.userCartProducts;

        res.json({ userCartProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nepavyko gauti vartotojo krepšelio produktų' });
    }
};

module.exports = {
    GET_USER_BY_ID,
    GET_ALL_USERS,
    ADD_USER,
    GET_USER_CART,
    GET_USER_PRODUCTCART
};
