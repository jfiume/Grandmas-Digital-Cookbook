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
  title: "Test food",
  type_of_food: "test genre",
  ingredients: "test1, test2, test3...",
  prep: "test prep",
  directions: "test: step 1: ..."
)
