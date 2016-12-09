Rails.application.routes.draw do
  devise_for :users

  get '/', to: 'site#home'
  get '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user_to_group'
  post '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user', as: :add_user

  resources :users do
    resources :groups
  end
end
