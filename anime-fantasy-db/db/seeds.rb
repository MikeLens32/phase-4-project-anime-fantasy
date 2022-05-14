# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying Everything"
User.destroy_all
Invitation.destroy_all
League.destroy_all
Character.destroy_all


puts "Creating Users----"
#User.create(username: 'kingofkings', email: 'mike@gmail.com', password: 'MineNotYours')
mike = User.create(username: 'kingofkings', email: 'mike@gmail.com', password: 'Minenotyours')
jared = User.create(username: 'basetankgod', email: 'jared@gmail.com', password: 'Yourefunny')
larry = User.create(username: 'thabigslo', email: 'larry@gmail.com', password: 'Quoteoftheday')

puts "Creating Invitations----"
#Invitation.create(user_id: 1, league_id: 1, member_id: 2, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')
Invitation.create(user_id: 1, league_id: 1, member_id: 2, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')
Invitation.create(user_id: 1, league_id: 1, member_id: 3, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')

puts "Creating Leagues----"
#League.create(creator_id: 1, name:'My Wakanda Academia', end_date:  'Sat, 09 JUL 2022')
# create member id
mwa = League.create(creator_id: 1, name:'My Wakanda Academia', end_date:  'Sat, 09 JUL 2022')

puts "Creating Charaters----"
# Character.create(name: "Goku", health: 4000, attack: 2000, defense: 1000, stamina: 1,  ult_move: 3500)
goku = Character.create(name: "Goku", health: 4000, attack: 2000, defense: 1000, stamina: 1,  ult_move: 3500)
saitama = Character.create(name: "Saitama", health: 4000, attack: 1500, defense: 1000, stamina: 1,  ult_move: 3000)
deku = Character.create(name: "Deku", health: 1500, attack: 700, defense: 800, stamina: 4,  ult_move: 1500)
gojo = Character.create(name: "Gojo", health: 2500, attack: 1500, defense: 2500, stamina: 1,  ult_move: 2200)
remaru = Character.create(name: "Remaru", health: 3000, attack: 1000, defense: 2000, stamina: 1,  ult_move: 2200)
luffy = Character.create(name: "Luffy", health: 4000, attack: 1300, defense: 2300, stamina: 2,  ult_move: 2000)
law = Character.create(name: "Law", health: 2000, attack: 1200, defense: 1500, stamina: 3,  ult_move: 1700)
kid = Character.create(name: "Kid", health: 2000, attack: 900, defense: 1800, stamina: 3,  ult_move: 1500)
megumi = Character.create(name: "Megumi", health: 1200, attack: 800, defense: 1000, stamina: 2,  ult_move: 1800)
sakuna = Character.create(name: "Sakuna", health: 3000, attack: 2000, defense: 1200, stamina: 1,  ult_move: 2500)
vegeta = Character.create(name: "Vegeta", health: 4000, attack: 1800, defense: 1000, stamina: 1,  ult_move: 3000)
yusake = Character.create(name: "Yusake", health: 3000, attack: 1400, defense: 1200, stamina: 2,  ult_move: 1800)
naruto = Character.create(name: "Naruto", health: 3200, attack: 1300, defense: 1200, stamina: 1,  ult_move: 2500)
sasuke = Character.create(name: "Sasuke", health: 3000, attack: 1200, defense: 1400, stamina: 1,  ult_move: 2300)
kanekie = Character.create(name: "Kanekie", health: 2500, attack: 1000, defense: 1500, stamina: 3,  ult_move: 1400)
ichigo = Character.create(name: "Ichigo", health: 2000, attack: 1500, defense: 1000, stamina: 1,  ult_move: 2500)
asta = Character.create(name: "Asta", health: 1500, attack: 1200, defense: 1800, stamina: 2,  ult_move: 1800)
yuno = Character.create(name: "Yuno", health: 1800, attack: 1500, defense: 1500, stamina: 2,  ult_move: 2000)
mob = Character.create(name: "Mob", health: 2500, attack: 1500, defense: 1200, stamina: 1,  ult_move: 3500)
koro_sensie = Character.create(name: "Koro Sensie", health: 2500, attack: 1800, defense: 2000, stamina: 1,  ult_move: 2000)


puts "Seeding Complete----"