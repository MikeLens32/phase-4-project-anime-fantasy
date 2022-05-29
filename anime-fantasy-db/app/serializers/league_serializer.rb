class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :creator_id, :character_id, :member_id
end
