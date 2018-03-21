// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models
const db = require("../models");

// Routes
// =============================================================
module.exports = app => {

  // GET route for getting all of the burgers

 app.get("/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    
    db.Burger.findAll({}).then(function(results) {
            // res.json(results);
            const hbsObject = {
      burgers: results
    };
    console.log(JSON.stringify(hbsObject,null,2));
    res.render("index", hbsObject);
        });

  });


  app.get("/api", (req, res) =>  
      // findAll returns all entries for a table when used with no options
      db.Burger.findAll({}).then(result => res.json(result)));




  // POST route for saving a new burger
  app.post("/api/burgers", (req, res) => {
      console.log(JSON.stringify(req.body,null,2));
      
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a burger_name
      // and eaten property (req.body)
      db.Burger.create({
          burger_name: req.body.burger_name
          
      })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });

  // PUT route for updating burgers. 
  // We get the updated burger data from req.body
  app.put("/api/burgers", (req, res) => {
      console.log(JSON.stringify(req.body,null,2));

      // Update takes in an object describing the properties we want to update, and
      // we use where to specify which objects we want to update
      db.Burger.update({
          burger_name: req.body.burger_name,
          eaten: req.body.eaten
      }, {where: {id: req.body.id}})
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });

   // DELETE route for deleting burgers. 
  // We get the id of the burger to delete from req.params.id
  app.delete("/api/burgers/:id", (req, res) => {
      console.log(`Delete Burger with id = ${req.params.id}`);
    
      // We just have to specify which burger we want to destroy with "where"
      db.Burger.destroy({ where: { id: req.params.id }})
        .then(result => res.json(result));
  });
};
