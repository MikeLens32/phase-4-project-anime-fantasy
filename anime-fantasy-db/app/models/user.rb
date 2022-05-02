class User < ApplicationRecord
    has_many :sent_invitations, class_name: "Invitation"
    has_many :recieved_invitations, class_name: "Invitation", foreign_key: :member_id

    has_many :created_leagues, class_name: "League", foreign_key: :creator_id
    #active records is going to check all the leagues to see which creator id links what your looking for
    has_many :pending_league_invites, -> {where(invite_accepted: false) }, through: :recieved_invitations, source: :league
    has_many :accepted_league_invites, -> {where(invite_accepted: true) }, through: :recieved_invitations, source: :league

    has_secure_password
end
