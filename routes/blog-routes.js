const express = require("express");

const router = express.Router();

// const isAuth = require("../middleware/is-auth");

const blogController = require("../controllers/blogController");
router.get("/", blogController.firstPage);

router.get("/login", blogController.login);
router.get("/signup", blogController.signup);
router.post("/signup", blogController.postSignUp);

router.post("/login", blogController.postLogin);
router.get("/logout", blogController.logout);

router.post("/logout", blogController.logout);

router.get("/home", blogController.isAuth, blogController.welcome);
router.get("/pro", blogController.isAuth, blogController.pro);
router.get("/checkout/success", blogController.isAuth, blogController.success);
router.get("/checkout/cancel", blogController.isAuth, blogController.fail);

router.get("/allBLogs", blogController.isAuth, blogController.allBlogs);
router.get("/allBLogs/page", blogController.isAuth, blogController.allBlogs);

router.get(
  "/category/:category",
  blogController.isAuth,
  blogController.foodBlogs
);

router.get("/myBlogs", blogController.isAuth, blogController.myBlogs);

router.post("/home", blogController.isAuth, blogController.welcome);

router.get("/new-post", blogController.isAuth, blogController.newPost);
router.post("/new-post", blogController.isAuth, blogController.addNewBlog);
router.get(
  "/delete-post/:id",
  blogController.isAuth,
  blogController.deletePost
);
router.get("/edit-post/:id", blogController.isAuth, blogController.editPost);
router.post("/edit-post/:id", blogController.isAuth, blogController.updatePost);

module.exports = router;
