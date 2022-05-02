class AddMemberIdToInvitaions < ActiveRecord::Migration[6.1]
  def change
    add_reference :invitations, :member, null: false, foreign_key: { to_table: :users}
  end
end
