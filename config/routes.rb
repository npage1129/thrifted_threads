Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :create]
  resources :products, only: :index
  resources :shopping_sessions, only: [:create, :update, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
