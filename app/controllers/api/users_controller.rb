class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end
end
