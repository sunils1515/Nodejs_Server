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
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {


  // Multiply.find()
  //   .then(data => {
  //     if (!data)
  //       res.status(404).send({ message: "Not found Multiply "});
  //     else res.send(data);
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .send({ message: "Error retrieving"});
  //   });

  Multiply.findOne({}).sort({_id:-1}).limit(1).then(function(result){
    res.send(result);
}).catch();
};
