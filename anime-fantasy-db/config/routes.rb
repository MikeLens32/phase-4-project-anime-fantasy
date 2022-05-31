Rails.application.routes.draw do
  
  resources :characters, only: [:index, :show]
  resources :invitations, only: [:create]
  resources :league_characters, only: [:index, :show]
  resources :leagues

  resources :users, only: [:update, :destroy]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'


end
