class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :attack, :defense, :stamina, :ult_move
end
