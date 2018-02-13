# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all

recipe1 = Recipe.create(
  image_url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Cannoli_siciliani.jpg",
  title: "Cannoli",
  type_of_food: "Italian",
  ingredients: ["Shells:", "2 cups all-purpose flour", "1 tablespoon granulated sugar", "1/4 teaspoon kosher salt", "1 tablespoon plus 2 teaspoons unsalted butter, cut into pieces", "1 egg yolk", "1/2 cup dry white wine", "Filling:", "2 cups ricotta cheese, preferably whole milk", "3/4 cup powdered sugar", "1 teaspoon gound cinnamon", "1/4 teaspoon allspice", "1/4 cup heavy cream", "1/4 cup small semisweet chocolate chips", "1 lemon", "1 quart canola oil, for frying", "Flour, for rolling", "1 egg, lightly beaten, for egg wash", "Powdered sugar, for dusting"],
  prep: ["test prep"],
  directions: ["test: step 1: ..."]
)
