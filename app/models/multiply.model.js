module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      input1:Number,
      input2: Number,
      result: Number
  },
    // { timestamps: true }
  );

  const Multiply = mongoose.model("multiply", schema);
  return Multiply;
};
