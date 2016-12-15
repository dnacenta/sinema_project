class SiteController < ApplicationController
  skip_before_action :authenticate_user!

  def about
    @user = current_user
  end
end
