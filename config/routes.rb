Rails.application.routes.draw do
  
  resources :carts
  resources :reviews
  resources :sizes
  resources :sales
  resources :product_categories
  resources :colors
  resources :products
  resources :cart_items
  resources :shopping_sessions
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
