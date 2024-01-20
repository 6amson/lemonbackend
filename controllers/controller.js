const RiskObject = require('../schemas/schema')

module.exports.signup_post = async (req, res) => {
    const { riskScore, riskOptions } = req.body;
    res.send({
        "email": "damolele@yahoo.com",
        "password": "extrovert"
    });

    // try {
    //     const riskObject = await RiskObject.create({ riskScore, riskOptions });
    //     res.status(201).send("success storing the data");


    // } catch (err) {
    //     res.status(405).send("Could't store data, retry");
    //     throw err;
    // }

}