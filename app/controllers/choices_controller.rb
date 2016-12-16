class ChoicesController < ApplicationController
  skip_before_action :authenticate_user!, except: [:index]
  skip_before_action :verify_authenticity_token, except: [:index]

  def index
    @user     = current_user
    @group    = Group.find(params[:group_id])
    @choices  = Choice.where(user_id: @user.id, group_id: @group.id)
  end

  def create
    @user        = current_user
    @group       = @user.groups.find_by(id: params[:group_id])
    title        = params[:title]
    poster       = params[:poster_url]
    user_choice  = params[:user_id]
    group_choice = params[:group_id]

    choice = Choice.create(title: title,
                           poster_url: poster,
                           user_id: user_choice,
                           group_id: group_choice)
  end
end
