const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const errorController = require("./controllers/error");
const database = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use(errorController.getErrorPage);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

database
  //   .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Rud", email: "rud@test.com" });
    }
    return user;
  })
  .then((user) => {
    console.log("Result ", user);
    app.listen(3000);
  })
  .catch((err) => console.log("Err", err));
