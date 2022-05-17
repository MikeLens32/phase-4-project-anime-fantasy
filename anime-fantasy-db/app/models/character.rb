class Character < ApplicationRecord
  has_many :league_characters
  has_many :leagues, through: :league_characters
end
