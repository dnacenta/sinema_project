class ChoicesController < ApplicationController
  def index
    @user    = current_user
    @group   = @user.groups.find_by(id: params[:id])
    @choices = Choice.all
  end

  def create
    @title = params[:title]
    Choice.create(choice_params)
  end

  private

  def choice_params
      params.require(choice).permit(:title)
  end
end
