class ChoicesController < ApplicationController
  def index
    @user    = current_user
    @group   = @user.groups.find_by(id: params[:id])
    @choices = Choice.all
  end

  def create
    title =
    date  =
  end

  private

  def book_param
      params.require(choice).permit(:title, :date)
  end
end
