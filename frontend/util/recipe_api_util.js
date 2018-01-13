export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes'
  })
);

export const fetchRecipe = id => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes/${id}`
  })
);

export const searchRecipe = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes',
    data: { query }
  })
);
