class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :creator_id

  has_many :invitations, serializer: InvitationSerializer
  has_many :league_characters
end
