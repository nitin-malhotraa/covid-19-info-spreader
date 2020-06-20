var mongoose = require("mongoose");
let mongoUrl =
  "mongodb+srv://nitin:Nitin@1257@cluster0-f8qky.mongodb.net/test?retryWrites=true&w=majority";

function initMongo() {
  mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log("MongoDB connected");
}

module.exports = initMongo;
