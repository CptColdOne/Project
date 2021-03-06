Rails.application.routes.draw do
  resources :posts
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get 'home/index', as: 'user_root'
  get '/posts/hashtag/:name', to: 'posts#hashtags'
  get 'search', to: 'posts#search' 
end
