const db = require("../models");
const Multiply = db.multiply;

// Create and Save a new multiply
exports.create = (req, res) => {
  // Validate request
  if (!req.body.input1) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a multiply
  const multiply = new Multiply({
    input1: req.body.input1,
    input2: req.body.input2,
    result: req.body.result 
  });

  // Save in the database
  multiply
    .save(multiply)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Multiplication."
      });
    });
};


// Retrieve last updated value
exports.findOne = (req, res) => {

  Multiply.findOne({}).sort({_id:-1}).limit(1).then(function(result){
    res.send(result);
}).catch();
};
