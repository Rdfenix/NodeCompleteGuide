const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;


// const database = require('../util/database');
// const Cart = require('./cart');


// class Product {
//     constructor(id, title, imageUrl, description, price) {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save() {
//         return database.execute('INSERT INTO products (title, price, imageUrl, description) VALUES(?, ?, ?, ?)', [
//             this.title, this.price, this.imageUrl, this.description
//         ])
//     }

//     static deleteById(id) {}

//     static fetchAll() {
//         return database.execute('SELECT * FROM products')
//     }

//     static findById(id) {
//         return database.execute('SELECT * FROM products WHERE products.id = ? ', [id])
//     }
// };

// module.exports = Product