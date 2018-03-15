class Api::RecipesController < ApplicationController


  def index
    query = params[:query]
    if query
      if query[:title]
        search_by_title
      else
        type_of_food
      end
    else
      @recipes = Recipe.all
      render "api/recipes/index"
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    render "api/recipes/show"
  end

  def search_by_title
    title = params[:query][:title].downcase
    @recipes = Recipe.where("lower(title) LIKE ?", "#{title}%")
    render "api/recipes/index"
  end

  def type_of_food
    type_of_food = params[:query][:type_of_food].downcase
    @recipes = Recipe.where("lower(type_of_food) LIKE ?", "#{type_of_food}%")
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render :show
    else
      flash.now[:errors] = @favorite.errors.full_messages
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render :index
  end

  def edit

  end

  private

  def recipe_params
    params.require(:recipe).permit(:image_url, :title, :type_of_food, :directions, :ingredients, :prep)
  end
end
