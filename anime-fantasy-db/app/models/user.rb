class User < ApplicationRecord
    has_many :sent_invitations, class_name: "Invitation"
    has_many :recieved_invitations, class_name: "Invitation", foreign_key: :member_id, dependent: :destroy

    has_many :created_leagues, class_name: "League", foreign_key: :creator_id, dependent: :destroy

    
    #active records is going to check all the leagues to see which creator id links what your looking for
    has_many :pending_league_invites, -> {where(invite_accepted: false) }, through: :recieved_invitations, source: :league
    has_many :accepted_league_invites, -> {where(invite_accepted: true) }, through: :recieved_invitations, source: :league
    
    validates :username, presence: true, uniqueness: true, length: {in: 4..20}
    validates :password, length: {in: 6..20}

    # enum role: %i(client admin superadmin)

    has_secure_password

    def all_leagues
       joined_league_ids = recieved_invitations.map(&:league_id) 
   
       created_league_ids = created_leagues.map(&:id) 

       League.find(joined_league_ids+created_league_ids)

    end


end
