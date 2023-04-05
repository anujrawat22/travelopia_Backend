const { DataModel } = require("../model/data.model");

exports.post = async (req, res) => {
  try {
    const {
      name,
      email,
      destination,
      number_of_travellers,
      budget_Per_person,
    } = req.body;
    const total = +number_of_travellers * +budget_Per_person;

    const data = await new DataModel({
      name,
      email,
      destination,
      number_of_travellers,
      budget_Per_person,
      total,
    });
    data.save();
    res.status(201).send({ message: "Data saved sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Server Error" });
  }
};

exports.getData = async (req, res) => {
  try {
    const { sort } = req.query;
    if (sort) {
      const Data = await DataModel.find().sort({ createdAt: sort });
      res.status(201).send({ message: "Form Data", Data });
    } else {
      const Data = await DataModel.find();
      res.status(201).send({ message: "Form Data", Data });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Server Error" });
  }
};

exports.searchbyname = async (req, res) => {
  try {
    const { name } = req.body;
    const Data = await DataModel.find({
      name: { $regex: name, $options: "i" },
    });
    res.status(201).send({ message: `Data with name ${name}`, Data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Server Error" });
  }
};

exports.searchbyDate = async (req, res) => {
  try {
    const { createdAt } = req.body;
    const Data = await DataModel.find({ createdAt });
    res.status(201).send({ message: `Data createdAt ${createdAt}`, Data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: "Server Error" });
  }
};
