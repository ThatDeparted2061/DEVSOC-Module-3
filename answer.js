import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
const port = 3000;

app.use(express.static("Public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Use routes globally
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const admin = {
  username: "admin",
  password: "123456"
};

app.get("/", (req, res) => {
  res.render("Signin.ejs");
});

app.post("/signin", (req, res) => {
  try {
    if (
      req.body.username === admin.username &&
      req.body.password === admin.password
    ) {
      res.render("admin.ejs");
    } else {
      res.render("user.ejs");
    }
  } catch (error) {
    console.log(error);
    res.render("Signin.ejs"); // Redirect to Signin in case of error
  }
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
