const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  Product.create({
    title,
    imageUrl,
    description,
    price
  })
    .then(result => console.log("Result ", result))
    .catch(err => console.log("Error ", err));
  // const product = new Product(null, title, imageUrl, description, price);
  // product.save()
  //     .then(() => {
  //         res.redirect('/');
  //     })
  //     .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");

  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) return res.redirect("/");

    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const { productId, title, price, imageUrl, description } = req.body;
  // const updatedProduct = new Product(productId, title, imageUrl, description, price);
  // updatedProduct.save();
  Product.create({
    title,
    price,
    imageUrl,
    description
  });
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Page",
        path: "/admin/products"
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  return res.redirect("/admin/products");
};
