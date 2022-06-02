class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :img
      t.string :alt
      t.integer :health
      t.integer :attack
      t.integer :defense
      t.integer :stamina
      t.integer :ult_move
      t.belongs_to :league, null: false, foreign_key: true

      t.timestamps
    end
  end
end
