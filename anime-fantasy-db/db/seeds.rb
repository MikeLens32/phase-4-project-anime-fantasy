# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Users----"
#User.create(username: 'kingofkings', email: 'mike@gmail.com', password: 'MineNotYours')
mike = User.create(username: 'kingofkings', email: 'mike@gmail.com', password: 'Minenotyours')
jared = User.create(username: 'basetankgod', email: 'jared@gmail.com', password: 'Yourefunny')
larry = User.create(username: 'thabigslo', email: 'larry@gmail.com', password: 'Quoteoftheday')

puts "Creating Leagues----"
#League.create(creator_id: 1, name:'My Wakanda Academia', end_date:  'Sat, 09 JUL 2022')
mwa = League.create(creator_id: 1, name:'My Wakanda Academia', end_date:  'Sat, 09 JUL 2022')


puts "Creating Invitations----"
#Invitation.create(user_id: 1, league_id: 1, member_id: 2, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')
Invitation.create(user_id: 1, league_id: 1, member_id: 2, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')
Invitation.create(user_id: 1, league_id: 1, member_id: 3, invite_accepted: true, draft_time: 'Sat, 18 JUN 2022')



puts "Seeding Complete----"