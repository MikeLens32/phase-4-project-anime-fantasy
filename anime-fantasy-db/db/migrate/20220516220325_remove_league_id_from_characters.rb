class RemoveLeagueIdFromCharacters < ActiveRecord::Migration[6.1]
  def change
    remove_column :characters, :league_id
  end
end
