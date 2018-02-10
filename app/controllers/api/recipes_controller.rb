class Api::RecipesController < ApplicationController


  def index
    query = params[:query]
    if query
      if query[:genre]
        search_by_genere
      else
        search_by_title
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
    @recipes = Recipe.where("lower(title) LIKE ?", "%#{title}%")
    render "api/recipes/index"
  end

  def search_by_genere
    genre = params[:query][:genre].downcase
    @recipes = Recipe.where("lower(genre) LIKE ?", "%#{genre}%")
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
    params.require(:recipe).permit(:image_url, :title, :description, :genre, :directions)
  end
end
