class GroupsController < ApplicationController
  def show
    @user = current_user
    @group = @user.groups.find_by(id: params[:id])
    unless @group
      render 'forbidden'
    end
  end
end
