class Portrait < ApplicationRecord

  def grayscale?
    url.include?('grayscale')
  end
end
