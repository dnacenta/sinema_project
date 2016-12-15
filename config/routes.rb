Rails.application.routes.draw do
  devise_for :users

  get '/about', to: 'site#about'

  get '/users/:user_id/groups/:id/exit_group', to: 'groups#exit_group', as: :exit_group

  get '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user_to_group'
  post '/users/:user_id/groups/:id/add_user_to_group', to: 'groups#add_user', as: :add_user

  post '/users/:user_id/groups/:group_id/choices', to: 'choices#create', as: :create_choice

  root 'users#show'

  resources :users, except:[:index] do
    resources :groups, except:[:index] do
      resources :choices, except: [:create]
    end
  end
end
