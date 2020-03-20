class PortraitsController < ApplicationController
  def index
    @images = default_images
    @portrait = Portrait.new
    @portraits = Portrait.order(created_at: :desc)
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

  private

  def default_images
    JSON.parse(File.read('default_images.json'))
  end

  def portrait_params
    params.require(:portrait).permit(:author, :pic_id, :url)
  end
end
