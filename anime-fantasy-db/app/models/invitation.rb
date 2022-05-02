class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :league
  belongs_to :member, class_name: "User", foreign_key: :user_id
  #Foreign key uses 

  validate :draft_time_in_future

  def draft_time_in_future
    if !!draft_time && draft_time <= DateTime.current
      errors.add(:draft_time, :time_warp, message: "Draft time should be in the future.")
    end
  end

end
