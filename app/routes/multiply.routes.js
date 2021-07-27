module.exports = app => {
  const multiply = require("../controllers/multiply.controller.js");

  var router = require("express").Router();

  // Save Values.
  router.post("/saveData", multiply.create);

  // Retrieve values.
  router.get("/getData", multiply.findOne);


  app.use("/api/multiply", router);
};
