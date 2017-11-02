class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true

  private

  def logged_in?
    !!current_user
  end


end
