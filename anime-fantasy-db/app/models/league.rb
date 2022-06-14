class League < ApplicationRecord
  belongs_to :creator, class_name: "User"#, foreign_key: :user_id
  has_many :invitations, dependent: :destroy
  has_many :users, through: :invitations
  has_many :league_characters, dependent: :destroy
  has_many :characters, through: :league_characters

  # validates :name, presence: true, uniqueness: true
  
  def self.find_character(league_character)
    self.all.filter do |l|
      l.characters.find {|c| c.name.downcase === league_character.downcase}
    end
  end
end
