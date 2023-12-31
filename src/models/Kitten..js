//shape data
const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
});

const abc = mongoose.model("Kitten", kittySchema);

// const cat = new abc({ name: "Hoi Dan It Cat abc" });
// cat.save();

module.exports = Kitten;
