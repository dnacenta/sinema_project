class SiteController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @user = current_user
  end

  def about
    @user = current_user
  end
end
