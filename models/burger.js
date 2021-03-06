// // Import the ORM to create functions that will interact with the database.
// const orm = require("../config/orm.js");

// const cat = {

//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },

//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },

//   delete: (condition, cb) => orm.delete("burgers", condition, cb)

// };

// // Export the database functions for the controller (burgersController.js).
// module.exports = cat;


module.exports = (db, dbType) =>
    db.define("Burger", {
        burger_name: dbType.STRING,
        eaten: dbType.BOOLEAN

    }
    , {
    timestamps: false,
    tableName: 'burgers'
});
 