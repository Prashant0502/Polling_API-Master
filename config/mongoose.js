const mongoose = require("mongoose");


// Connect to the database using mongoose.connect() method.

mongoose.connect(
  "mongodb+srv://ps842848:Prashant@pollingapi.a4asckt.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Store default connection in a variable named db
const db = mongoose.connection;

// Listen for any errors that may occur in the db connection and log them to the console
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Once the connection is established, then log  message to the console indicating the successful connection
db.once("open", () => {
  console.log("MongoDB connected");
});

// Export the db object for use in other files.
module.exports = db;
