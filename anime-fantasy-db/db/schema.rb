ActiveRecord::Schema.define(version: 2022_05_16_220325) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "img"
    t.string "alt"
    t.integer "health"
    t.integer "attack"
    t.integer "defense"
    t.integer "stamina"
    t.integer "ult_move"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "invitations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "league_id", null: false
    t.boolean "invite_accepted"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "member_id", null: false
    t.index ["league_id"], name: "index_invitations_on_league_id"
    t.index ["member_id"], name: "index_invitations_on_member_id"
    t.index ["user_id"], name: "index_invitations_on_user_id"
  end

  create_table "league_characters", force: :cascade do |t|
    t.integer "league_id", null: false
    t.integer "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_league_characters_on_character_id"
    t.index ["league_id"], name: "index_league_characters_on_league_id"
  end

  create_table "leagues", force: :cascade do |t|
    t.string "name"
    t.integer "creator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["creator_id"], name: "index_leagues_on_creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "invitations", "leagues"
  add_foreign_key "invitations", "users"
  add_foreign_key "invitations", "users", column: "member_id"
  add_foreign_key "league_characters", "characters"
  add_foreign_key "league_characters", "leagues"
  add_foreign_key "leagues", "users", column: "creator_id"
end
