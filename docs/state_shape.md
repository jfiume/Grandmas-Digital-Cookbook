{
  session: {
    current_user: {
      id: 3,
      username: "grandma"
    },
    errors: {
      username_errors: [],
      password_errors: []
    }
  }
  recipes: {
    1: {
      image_url: "meatballs.jpg",
      title: "Meatballs",
      genre: "Italian",
      description: "breaded meats rolled in to a ball sautéed in olive oil, and marinara sauce, typically served with pasta",
      directions: "Step 1: ..., Step 2: ...",
      views: {
        4: {
          count: 10,
          userId: 3,
          recipeId: 1
        }
      }
      favorites: {
        7: {
          userId: 3,
          recipeId: 1
        }
      }
    }
  }
  searchResults: {
    recipes: {
      //will be populated by search query;
    }
  }


}
