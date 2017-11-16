class Api::RecipeController < ApplicationController


  def index
    query = params[:query]
    if query
      if query[:genre]
        search_by_genere
      else
        search_by_title
      end
    else
      @recipes = Recipie.all
      render "api/recipes/index"
    end
  end

  def show
    @recipie = Recipie.find(params[:id])
    render "api/recipies/show"
  end

  def search_by_title
    title = params[:query][:title].downcase
    @recipie = Recipie.where("lower(title) LIKE ?", "%#{title}%")
    render "api/recipies/index"
  end

  def search_by_genere
    genre = params[:query][:genre].downcase
    @recipies = Recipie.where("lower(genre) LIKE ?", "%#{genre}%")
  end

end


end
