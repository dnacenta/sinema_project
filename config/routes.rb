Rails.application.routes.draw do
  devise_for :users

  get '/', to: 'site#home'
  post '/users/:user_id/groups/:id', to: 'groups#add_user', as: :add_user
  
  resources :users do
    resources :groups
  end
end
