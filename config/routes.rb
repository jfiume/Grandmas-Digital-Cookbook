Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :recipes, only: [:index, :show, :create, :destroy, :edit]
    resource :user, only: [:show]
  end
  get 'api/search', to: "api/recipe#search", defaults: {format: :json}
end
