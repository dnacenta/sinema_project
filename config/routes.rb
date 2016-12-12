Rails.application.routes.draw do
  devise_for :users

  get '/users/:user_id/groups/:id/exit_group', to: 'groups#exit_group', as: :exit_group

  get '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user_to_group'
  post '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user', as: :add_user

  root 'users#show'

  resources :users do
    resources :groups do
      resources :choices
    end
  end
end
