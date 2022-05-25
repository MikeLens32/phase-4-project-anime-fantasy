class League < ApplicationRecord
  belongs_to :creator, class_name: "User"#, foreign_key: :user_id
  has_many :invitations
  has_many :users, through: :invitations
  has_many :league_characters
  has_many :characters, through: :league_characters
  
end
