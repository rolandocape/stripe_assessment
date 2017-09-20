const apiConf = require("./apiConf");
const stripe = require("stripe")(apiConf.api_key);

function createKey(req, res) {
    stripe.ephemeralKeys.create(
        {customer: req.query.id},
        {stripe_version: apiConf.stripe_version}
    ).then((key) => {
        res.status(200).json(key);
    }).catch((err) => {
        res.status(500).end(err);
    });
}

module.exports = createKey;