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
  prep: [],
  directions: ["For the shell dough: In a medium bowl, sift together the flour, sugar and salt. Work the butter pieces into the flour with your fingers until the mixture becomes coarse and sandy. Add the egg yolk and the white wine and mix until it becomes a smooth dough. Spread a piece of plastic wrap on a flat surface and place the dough in the center. Wrap the plastic loosely around it and press the dough to fill the gap. Flattening the dough will mean less rolling later. Let it rest in the fridge for a few minutes while you make the filling.", "For the filling: In a medium bowl, whisk the ricotta until smooth. Sift in the powdered sugar, cinnamon and allspice. Mix to blend. In a separate bowl (or in the bowl of an electric mixer fitted with the whisk attachment), beat the heavy cream until fairly stiff. Using a rubber spatula, gently fold the cream into the ricotta mixture. Stir in the chocolate chips. Lightly zest the exterior of the lemon and stir it into the ricotta. Refrigerate for a half hour to an hour.", "To roll and fry the shells: In a medium pot with a heavy bottom, heat the canola oil to 360 degrees F. Meanwhile, sift an even layer of flour on a flat surface. Flour a rolling pin. Roll the dough until it is very thin (about 1/8-inch thick). Cut the dough into fourths and work in small batches. Use any glass or small bowl that has a 3-to-4-inch diameter. Cut rounds, tracing around each one to assure the dough has been fully cut. You should have about 24 circles. Wrap each circle around a cannoli mold. Use a little of the egg wash on the edge of each round to seal it shut and to assure it won't slide or fall off the mold before pressing it closed over the mold. Flare the edges out slightly from the mold. Flaring will allow the oil to penetrate each cannoli shell as they fry. Use a pair of tongs to hold the edge of the mold as you submerge and fry the shell in the oil until crispy, 2 to 3 minutes. Remove from the oil, and holding the mold in one had with your tongs, gently grip the shell in your other hand with a kitchen towel and carefully slide it off the mold. Set aside to cool. Repeat with all of the circles.", " To fill the cannolis: Just before serving, use a pastry bag without a tip to pipe the ricotta into the cannoli molds. Fill the cannoli shells from both ends so the cream runs through the whole shell. Dust with powdered sugar. Powdered sugar gives that little extra sweetness and added texture to the exterior. It also makes me feel like I have a professional bakery touch in my own home. Serve immediately."]
)

recipe2 = Recipe.create(
  image_url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Macaroni_and_cheese_%282%29_%28cropped%29.jpg",
  title: "Macaroni and Cheese",
  type_of_food: "Comfort",
  ingredients: ["4 cups (1 pound) elbow macaroni", "5 tablespoons unsalted butter", "4 cups milk", "1/2 medium onion, stuck with 1 clove", "4 cloves garlic", "1 bay leaf", "3 sprigs fresh thyme", "1 teaspoon dry mustard", "2 tablespoons all-purpose flour", "2 cups grated Cheddar, plus 1 cup in big chunks", "1/2 cup grated Parmesan", "Kosher salt and freshly ground black pepper"],
  prep: [],
  directions: ["Cook the macaroni in a large pot of boiling salted water until done, about 5 to 7 minutes. Drain and toss it with 2 tablespoons butter; set aside.", "Heat the oven to 350 degrees F.", "Coat a large baking dish with 1 tablespoon butter and set it aside. Put the milk into a saucepan and add the clove studded onion, garlic, bay leaf, thyme, and mustard. Warm over medium low heat until the milk starts to steam, about 10 minutes. Remove from the heat and let the flavors infuse while you make the roux. In a large pot over medium heat add 2 tablespoons butter and the flour. Cook, stirring, for about 2 to 3 minutes; don't let the roux color. Strain the infused milk onto the roux, whisking constantly to avoid lumps. Cook, stirring often, for about 5 minutes until the sauce is thick. Remove from the heat and add 1/2 the grated Cheddar and 1/2 the Parmesan; stir until it is melted and smooth. Taste and adjust seasoning with salt and pepper. Pour this over the macaroni, add the chunks of Cheddar, and mix until well blended; put this into the prepared baking dish. Sprinkle the remaining Cheddar and Parmesan cheeses evenly over the top. Bake until the top is golden and crusty, about 25 to 30 minutes."]
)

recipe3 = Recipe.create(
  image_url: "https://res.cloudinary.com/pancake/image/upload/v1522027010/New-England-Clam-Chowder_y3sjxo.jpg",
  title: "New England Clam Chowder",
  type_of_food: "Soup",
  ingredients: ["4 dozen little neck or cherry stone clams, scrubbed", "4 thick slices bacon, cut into lardons", "1 large onions, cut into 1/4 inch dice", "Kosher salt", "1 1/2 pounds Yukon gold potatoes, cut into 1/2 inch dice", "3 tablespoons flour", "1 1/2 cups heavy cream", "1 1/2 cups whole milk", "1 bundle of thyme", "2 bay leaves", "1 to 2 shakes hot sauce, optional (recommended: Tabasco)", "Extra-virgin olive oil"],
  prep: [],
  directions: ["Place the clams and 1 cup of water in a large pot. Cover and place over a high heat and cook the clams for 6 to 7 minutes. Uncover and remove the open clams.Cover the pot again and continue cooking the clams that haven't opened yet. Cook the clams for another 2 to 3 minutes. Turn off the heat and discard any clams that have not opened. Strain the liquid from the pot through a mesh strainer lined with a coffee filter and reserve.", "Coarsely chop the clams and reserve.", "Drizzle a few drops of olive oil into the bottom of the clam pot and toss in the bacon. Bring the pan to a medium heat. When the bacon has let off a lot of fat and become brown and crispy, toss in the onions and season lightly with salt. Cook the onions until they are very soft and aromatic but have no color, 7 to 8 minutes. Add the potatoes and cook for another 5 minutes.", "Sprinkle the flour over the onions and potato mixture and stir to combine. Gradually whisk in the reserved clam juice. When the clam juice has been whisked in and there are no lumps, whisk in the milk and heavy cream and toss in the bay leaves and thyme. Taste for seasoning and adjust if needed. Bring to a boil and reduce to a simmer and simmer until the potatoes are cooked through, 10 to 15 minutes.", "Toss in the reserved clams. Taste and re-season if needed and add hot sauce if using."]
)

# recipe4 = Recipe.create(
#
# )
