const RiskObject = require('../schemas/schema');

module.exports.updaterisk = async (req, res) => {
    const { riskScore, riskOptions } = req.body;

    try {
        const riskObject = await RiskObject.create({ riskScore, riskOptions });
        res.status(201).send(riskObject);


    } catch (err) {
        res.status(400).send("Could't store data, retry");
        throw err;
    }

}

module.exports.getrisk = async (req, res) => {

    try {
        RiskObject.find({})
        .then((documents) => {
            res.status(200).send(documents);
        })
        .catch((err) => {
            console.log(err);
        })

    } catch (err) {
        res.status(404).send("Could't retrieve data, retry");
        throw err;
    }

}