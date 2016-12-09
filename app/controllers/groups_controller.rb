class GroupsController < ApplicationController
  def show
    @user = current_user
    @group = @user.groups.find_by(id: params[:id])
    unless @group
      render 'forbidden'
    end
  end

  def new
    @user = User.find(params[:user_id])
    unless @user
      render 'forbidden'
      return
    end
    @group = Group.new
  end

  def create
    @user = User.find(params[:user_id])
    unless @user
      render 'forbidden'
      return
    end
    @group = @user.groups.create(group_params)
    render 'show'
  end

  # def add_user
  #   @user = current_user
  #   group = @user.groups.find_by(id: params[:id])
  #   new_user = User.find(params[:name])
  #   unless new_user
  #     render 'User not found'
  #     return
  #   end
  #   @user.group.push(new_user)
  # end

  private

  def group_params
    params.require(:group).permit(:name)
  end
end
