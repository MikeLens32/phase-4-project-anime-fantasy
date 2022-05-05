Rails.application.routes.draw do
  resources :characters, only: [:index, :show]
  # resources :invitations, only: [:create]
  resources :leagues
  resources :users
end
