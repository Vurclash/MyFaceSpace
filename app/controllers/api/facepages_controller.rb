class Api::FacepagesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_facepages(current_user.liked_facepages)
  end

  def update
    current_user.liked_facepages << params[:id].to_i
    current_user.save
  end

  def my_facepages
    render json: User.liked(current_user.liked_facepages)
  end
end
