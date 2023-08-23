const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const blogRoutes = require("./routes/blog-routes");

const mongoose = require("mongoose");
const Blog = require("./models/blogs");

mongoose.connect(
  "mongodb+srv://supremebilal78:t5OxJKSK26h9q9YU@test-db.v6p1fbj.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", blogRoutes);
app.get("/new-post", blogRoutes);
app.post("/new-post", blogRoutes);
app.use("/delete-post", blogRoutes);
app.post("/edit-post", blogRoutes);

app.listen(3000, function () {
  console.log("Server running");
});

// const newBlog = new Blog({
//   title: "yo",
//   content: "bilal@gmail.com",
// });
// newBlog
//   .save()
//   .then(() => {
//     console.log("Data inserted successfully");
//   })
//   .catch((error) => {
//     console.error("Error inserting data:", error);
//   });
