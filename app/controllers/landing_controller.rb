class LandingController < ApplicationController
  def index
    redirect_to entries_path if user_signed_in?
  end
end
