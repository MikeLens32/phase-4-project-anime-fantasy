class CreateInvitation < ActiveRecord::Migration[6.1]
  def change
    create_table :invitations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :league, null: false, foreign_key: true
      t.boolean :invite_accepted

      t.timestamps
    end
  end
end
