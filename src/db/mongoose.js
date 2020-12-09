const mongoose = require("mongoose");
const connectionURL = process.env.DB_ADDRESS;

// Connect to database
mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});





