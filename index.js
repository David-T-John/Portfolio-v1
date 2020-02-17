const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
<<<<<<< HEAD
const port = process.env.PORT;
app.use(cors());
=======
const port = 5000;

>>>>>>> 7ddabb53b882e2f3d7cdd78f02b42e183e65822a
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "auth-token");
<<<<<<< HEAD

=======
  // if (res.header === "OPTIONS") {
  //   res.header(
  //     "Access-Control-Allow-Methods",
  //     "PUT",
  //     "POST",
  //     "PATCH",
  //     "DELETE"
  //   );
  //   return res.status(200).json({});
  // }
>>>>>>> 7ddabb53b882e2f3d7cdd78f02b42e183e65822a
  next();
});

mongoose.connect(
  process.env.ATLAS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to database")
);

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
app.use(express.json());
app.use("/api/users", authRoute);
app.use("/api/posts", postsRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
