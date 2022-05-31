class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :invite_accepted, :member_id, :member#, serializer: MemberSerializer
end
