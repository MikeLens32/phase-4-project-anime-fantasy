class League < ApplicationRecord
  belongs_to :creator, class_name: "User"#, foreign_key: :user_id
  has_many :invitations
  has_many :users, through: :invitations

  validate :end_date_in_future

  def end_date_in_future
    if !!end_date && end_date <= DateTime.current
      errors.add(:end_date, :time_warp, message: "End date should be at a later date than draft date.")
    end
  end
  
end
