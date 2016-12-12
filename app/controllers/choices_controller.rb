class ChoicesController < ApplicationController
  def index
    @user    = current_user
    @group   = @user.groups.find_by(id: params[:id])
    @choices = Choice.all
  end
end
