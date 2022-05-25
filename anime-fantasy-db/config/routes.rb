Rails.application.routes.draw do
  
  resources :characters, only: [:index, :show]
  # resources :invitations, only: [:create]
  resources :leagues, only: [:show, :create, :destroy, :update]

  resources :users, only: [:update, :destroy]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/signout', to: 'sessions#delete'


end
