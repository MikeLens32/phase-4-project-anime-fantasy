class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :league
  belongs_to :member, class_name: "User", foreign_key: :member_id
  #Foreign key uses
end
