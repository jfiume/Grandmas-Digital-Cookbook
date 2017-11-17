class Recipe < ApplicationRecord
  validates :image_url, uniqueness: true

  has_many :favorites
  has_many :views
end
