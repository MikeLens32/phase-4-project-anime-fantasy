class Character < ApplicationRecord
  has_many :league_characters, dependent: :destroy
  has_many :leagues, through: :league_characters

end
