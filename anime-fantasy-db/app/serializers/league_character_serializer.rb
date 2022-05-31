class LeagueCharacterSerializer < ActiveModel::Serializer
  attributes :id, :league_id, :character_id, :character

  # belongs_to :league, serializer: LeagueSerializer
  # belongs_to :character, serializer: CharacterSerializer
end
