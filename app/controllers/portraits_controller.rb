class PortraitsController < ApplicationController
  before_action :set_portrait, only: [:edit, :update]
  before_action :set_saved_portraits, only: [:index, :edit]

  def index
    @portrait = Portrait.new
  end
  
  def edit
  end

  def create
    @portrait = Portrait.new(portrait_params)
    if @portrait.save
      render 
    else
      render :index
    end
  end

  def update
    if @portrait.update(portrait_params)
      render 
    else
      render :index
    end
  end

  private

  def set_saved_portraits
    @images = default_images
    @saved_portraits = Portrait.order(created_at: :desc)
  end

  def set_portrait
    @portrait = Portrait.find(params[:id])
  end

  def default_images
    JSON.parse(File.read('default_images.json'))
  end
  
  def portrait_params
    params.require(:portrait).permit(:author, :pic_id, :url)
  end
end
