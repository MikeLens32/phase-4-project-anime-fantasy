class LeagueCharacter < ApplicationRecord
  belongs_to :league
  belongs_to :character
end
