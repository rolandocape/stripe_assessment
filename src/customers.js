const apiConf = require("./apiConf");
const stripe = require("stripe")(apiConf.api_key);

function createCostumer(req, res) {
    stripe.customers.create({
        description: 'Default Customer Description',
    }).then((customer) => {
        res.status(200).json(customer);
    }).catch((err) => {
        res.status(500).end(err);
    });
}

module.exports = createCostumer;