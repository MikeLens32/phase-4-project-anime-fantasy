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


puts "----Creating Users----"
#User.create(username: 'kingofkings', email: 'mike@gmail.com', password: 'MineNotYours')
mike = User.create(username: 'kingofkings', password: 'Mike123')
jared = User.create(username: 'basetankgod', password: 'Jared123')
larry = User.create(username: 'thabigslo', password: 'Larry123')
ovan = User.create(username: 'onemagic19', password: 'Ovan123')
rod = User.create(username: 'roddygeez', password: 'Rod123')


puts "----Creating Leagues----"
#League.create(creator_id: 1, name:'My Wakanda Academia', end_date:  'Sat, 09 JUL 2022')
# create member id
mwa = League.create(creator: mike, name:'My Wakanda Academia')
hnc = League.create(creator: larry, name:'Hound Ninja Chat')


puts "----Creating Charaters & League Associations----"
# Character.create(name: "Goku", health: 4000, attack: 2000, defense: 1000, stamina: 1,  ult_move: 3500)
# LeagueCharacter.create(character: goku, league: mwa)
goku = Character.create(name: 'Goku', health: 4000, attack: 2000, defense: 1000, stamina: 1,  ult_move: 3500)
LeagueCharacter.create(character: goku, league: mwa)
LeagueCharacter.create(character: goku, league: hnc)
saitama = Character.create(name: 'Saitama', health: 4000, attack: 1500, defense: 1000, stamina: 1,  ult_move: 3000)
LeagueCharacter.create(character: saitama, league: mwa)
LeagueCharacter.create(character: saitama, league: hnc)
deku = Character.create(name: 'Deku', health: 1500, attack: 700, defense: 800, stamina: 4,  ult_move: 1500)
LeagueCharacter.create(character: deku, league: mwa)
LeagueCharacter.create(character: deku, league: hnc)
gojo = Character.create(name: 'Gojo', health: 2500, attack: 1500, defense: 2500, stamina: 1,  ult_move: 2200)
LeagueCharacter.create(character: gojo, league: mwa)
LeagueCharacter.create(character: gojo, league: hnc)
remaru = Character.create(name: 'Rimuru', health: 3000, attack: 1000, defense: 2000, stamina: 1,  ult_move: 2200)
LeagueCharacter.create(character: remaru, league: mwa)
LeagueCharacter.create(character: remaru, league: hnc)
luffy = Character.create(name: 'Luffy', health: 4000, attack: 1300, defense: 2300, stamina: 2,  ult_move: 2000)
LeagueCharacter.create(character: luffy, league: mwa)
LeagueCharacter.create(character: luffy, league: hnc)
law = Character.create(name: 'Law', health: 2000, attack: 1200, defense: 1500, stamina: 3,  ult_move: 1700)
LeagueCharacter.create(character: law, league: mwa)
LeagueCharacter.create(character: law, league: hnc)
kid = Character.create(name: 'Kid', health: 2000, attack: 900, defense: 1800, stamina: 3,  ult_move: 1500)
LeagueCharacter.create(character: kid, league: mwa)
LeagueCharacter.create(character: kid, league: hnc)
megumi = Character.create(name: 'Vergil', health: 1200, attack: 800, defense: 1000, stamina: 2,  ult_move: 1800)
LeagueCharacter.create(character: megumi, league: mwa)
LeagueCharacter.create(character: megumi, league: hnc)
sakuna = Character.create(name: 'Sakuna', health: 3000, attack: 2000, defense: 1200, stamina: 1,  ult_move: 2500)
LeagueCharacter.create(character: sakuna, league: mwa)
LeagueCharacter.create(character: sakuna, league: hnc)
vegeta = Character.create(name: 'Vegeta', health: 4000, attack: 1800, defense: 1000, stamina: 1,  ult_move: 3000)
LeagueCharacter.create(character: vegeta, league: mwa)
LeagueCharacter.create(character: vegeta, league: hnc)
yusake = Character.create(name: 'Yusake', health: 3000, attack: 1400, defense: 1200, stamina: 2,  ult_move: 1800)
LeagueCharacter.create(character: yusake, league: mwa)
LeagueCharacter.create(character: yusake, league: hnc)
naruto = Character.create(name: 'Naruto', health: 3200, attack: 1300, defense: 1200, stamina: 1,  ult_move: 2500)
LeagueCharacter.create(character: naruto, league: mwa)
LeagueCharacter.create(character: naruto, league: hnc)
sasuke = Character.create(name: 'Sasuke', health: 3000, attack: 1200, defense: 1400, stamina: 1,  ult_move: 2300)
LeagueCharacter.create(character: sasuke, league: mwa)
LeagueCharacter.create(character: sasuke, league: hnc)
kanekie = Character.create(name: 'Kanekie', health: 2500, attack: 1000, defense: 1500, stamina: 3,  ult_move: 1400)
LeagueCharacter.create(character: kanekie, league: mwa)
LeagueCharacter.create(character: kanekie, league: hnc)
ichigo = Character.create(name: 'Ichigo', health: 2000, attack: 1500, defense: 1000, stamina: 1,  ult_move: 2500)
LeagueCharacter.create(character: ichigo, league: mwa)
LeagueCharacter.create(character: ichigo, league: hnc)
asta = Character.create(name: 'Asta', health: 1500, attack: 1200, defense: 1800, stamina: 2,  ult_move: 1800)
LeagueCharacter.create(character: asta, league: mwa)
LeagueCharacter.create(character: asta, league: hnc)
yuno = Character.create(name: 'Gohan', health: 1800, attack: 1500, defense: 1500, stamina: 2,  ult_move: 2000)
LeagueCharacter.create(character: yuno, league: mwa)
LeagueCharacter.create(character: yuno, league: hnc)
mob = Character.create(name: 'Mob', health: 2500, attack: 1500, defense: 1200, stamina: 1,  ult_move: 3500)
LeagueCharacter.create(character: mob, league: mwa)
LeagueCharacter.create(character: mob, league: hnc)
koro_sensie = Character.create(name: 'Koro Sensie', health: 2500, attack: 1800, defense: 2000, stamina: 1,  ult_move: 2000)
LeagueCharacter.create(character: koro_sensie, league: mwa)
LeagueCharacter.create(character: koro_sensie, league: hnc)


puts "----Creating Invitations----"
# Invitation.create(user_id: 1, league_id: 1, member_id: 2, invite_accepted: true)
Invitation.create(user: mike, league: mwa, member: jared, invite_accepted: true)
Invitation.create(user: mike, league: mwa, member: larry, invite_accepted: true)


# puts "Creating News Feed----"
# News.create(title: 'Netflix', date: 'THU, 12 MAY 2022', img: '', text: 'The New York Times newspaper reported on Tuesday that Netflix may introduce its lower cost, ad-supported subscription tier between October to December later this year, citing an internal company memo. In addition, the memo also mentioned that the service is planning to "crack down" on password sharing between subscribers in the same time period. Netflix CEO Reed Hastings first voiced considerations of a new ad-supported subscription tier last month, saying "Those that have followed Netflix know that I\'ve been against the complexity of advertising and a big fan of the simplicity of subscription. But as much as I\'m a fan of that, I\'m a bigger fan of consumer choice. And allowing consumers who would like to have a lower price and are advertising-tolerant, get what they want, makes a lot of sense." Hastings\' statement followed Netflix\'s announcement of a decrease of about 200,000 subscribers from January to March — far below the company\'s earlier projection of a gain of 2.5 million subscribers, and the service\'s first drop in subscriptions in a decade. Netflix also previously announced in March that it is testing a new payment model for users who wish to share accounts between separate households. The streaming service only recently implemented a price increase in subscription plans in the United States and Canada earlier this year. Meanwhile, anime streaming service Crunchyroll recently removed its long-running free ad-supported simulcast viewing option in the beginning of the spring anime season in April, with only a few exceptions. (Some spring season titles are available for free ad-supported viewing for their first three episodes a week after they premiere, and older titles are still available for free with ads.) The service previously allowed free ad-supported streaming for simulcast titles one week after an episode premiered. Disney+, another streaming service that is adding more anime titles, plans to roll out an ad-supported subscription tier in the United States and Canada in late 2022, and then roll it out overseas next year. Sources: The New York Times (John Kobling, Nicole Sperling), IndieWire (Samantha Bergeson)')
# netflix = News.create(title: 'Netflix', date: '12 MAY 2022', img: '', text: 'The New York Times newspaper reported on Tuesday that Netflix may introduce its lower cost, ad-supported subscription tier between October to December later this year, citing an internal company memo. In addition, the memo also mentioned that the service is planning to "crack down" on password sharing between subscribers in the same time period. Netflix CEO Reed Hastings first voiced considerations of a new ad-supported subscription tier last month, saying "Those that have followed Netflix know that I\'ve been against the complexity of advertising and a big fan of the simplicity of subscription. But as much as I\'m a fan of that, I\'m a bigger fan of consumer choice. And allowing consumers who would like to have a lower price and are advertising-tolerant, get what they want, makes a lot of sense." Hastings\' statement followed Netflix\'s announcement of a decrease of about 200,000 subscribers from January to March — far below the company\'s earlier projection of a gain of 2.5 million subscribers, and the service\'s first drop in subscriptions in a decade. Netflix also previously announced in March that it is testing a new payment model for users who wish to share accounts between separate households. The streaming service only recently implemented a price increase in subscription plans in the United States and Canada earlier this year. Meanwhile, anime streaming service Crunchyroll recently removed its long-running free ad-supported simulcast viewing option in the beginning of the spring anime season in April, with only a few exceptions. (Some spring season titles are available for free ad-supported viewing for their first three episodes a week after they premiere, and older titles are still available for free with ads.) The service previously allowed free ad-supported streaming for simulcast titles one week after an episode premiered. Disney+, another streaming service that is adding more anime titles, plans to roll out an ad-supported subscription tier in the United States and Canada in late 2022, and then roll it out overseas next year. Sources: The New York Times (John Kobling, Nicole Sperling), IndieWire (Samantha Bergeson)')
# pokemon = News.create(title: 'Pokémon Anime\'s 25th Season Pokémon Ultimate Journeys Premieres This Year', date: '12 May 2022', img: '', text: 'The Pokémon Company International announced on Wednesday that it will premiere the 25th season of the Pokémon anime, titled Pokémon Ultimate Journeys: The Series, "as early as spring" in some territories, and then this year in the U.S. on Netflix. Pokémon Journeys: The Series premiered on TV Tokyo and its affiliates in Japan under the title Pocket Monster in November 2019, two days after the Pokémon Sword and Pokémon Shield games shipped worldwide. The series continues to air in Japan under that name. The show is reaching its climax with the Pokémon World Championships. The localized title of the anime, Pokémon Journeys: The Series, has 48 episodes. Pokémon Master Journeys: The Series continues with Pocket Monster\'s 49th episode, which premiered in Japan in December 2020. The first 12 episodes of Pokémon Journeys: The Series debuted in the United States on Netflix in June 2020, and the service added new episodes quarterly. The anime also premiered on the Canadian television channel Teletoon in May 2020. Netflix then premiered Pokémon Master Journeys: The Series on September 10, and has been adding new episodes quarterly. Update: Clarified season premiere information.')
# jujutsu_kaisen = News.create(title: 'Jujutsu Kaisen 0 Ends Theatrical Run in Japan on May 29', date: '12 MAY 2022', img: '', text: 'The official website for the Jujutsu Kaisen 0 anime film announced on Tuesday that the film will end its long theatrical run in Japan on May 29. As of Monday, the film has sold 9,712,142 tickets and earned 13,613,215,790 yen (about US$104.5 million) after 137 days in theaters in Japan. Jujutsu Kaisen 0 remains the 15th highest-grossing film in Japan of all time. The film is the highest-earning film at the Japanese box office from the 2021 calendar year, after surpassing Evangelion: 3.0+1.0: Thrice Upon A Time. The film opened in the United States on March 18 and earned a cumulative total of US$29,693,448 in the United States as of April 3. The film is currently the seventh highest-earning anime film of all time worldwide, unadjusted for inflation. The film is based on Gege Akutami\'s Jujutsu Kaisen 0 Tokyo Toritsu Jujutsu Kōtō Senmon Gakkō (Jujutsu Kaisen 0: Tokyo Prefectural Jujutsu High School) manga prequel story, with MAPPA animating again and TOHO distributing. Megumi Ogata voiced the main character Yuta Okkotsu, and Kana Hanazawa voiced the character Rika Orimoto. Sources: Jujutsu Kaisen 0 film\'s website, Animate Times')
# 7DS = News.create(title: 'The Seven Deadly Sins: Four Knights of the Apocalypse Manga Gets TV Anime', date: '12 MAY 2022', img: '', text: 'This year\'s 24th issue of Kodansha\'s Weekly Shōnen Magazine confirmed the television anime adaptation of Nakaba Suzuki\'s The Seven Deadly Sins: Four Knights of the Apocalypse (Mokushiroku no Yon-kishi) sequel manga on Wednesday. Suzuki launched the manga in Weekly Shōnen Magazine in January 2021. Kodansha Comics is publishing the manga simultaneously in English digitally, and as physical copies. The company describes the first volume: Percival has always lived with his grandfather on God\'s Finger, a remote haven that sits high above the clouds. And though he loves the simple life, he secretly longs for adventure. But Percival\'s life is changed forever when an intruder—who shares a shocking connection with him—tears away everything he\'s ever known. With nothing left to do but chase down the one who took everything from him, Percival sets out on his own. During his journey, the sheltered boy discovers that there are a lot of things he doesn\'t know about normal life. Luckily, he meets friends along the way who can help him get by—but how will they react when they find out about Percival\'s destiny... and how it\'s connected to the end of the world? Kodansha published the manga\'s sixth compiled book volume on March 17, and it will publish the seventh volume in Japan on May 17. Kodansha Comics released the second volume on March 15 and will release the third volume on May 24. Suzuki launched the original The Seven Deadly Sins manga in Kodansha\'s Weekly Shōnen Magazine in 2012, and ended it in March 2020. Kodansha published the manga\'s 41st and final volume in May 2020. Kodansha Comics is publishing the manga in English digitally and in print. Crunchyroll posted new chapters as they appeared in Japan. The franchise\'s first 24-episode television anime series aired in 2014 and 2015. Netflix later streamed the series with both English and Japanese audio, and Funimation released the series in two parts on home video. A four-episode television anime special titled The Seven Deadly Sins -Signs of Holy War- then premiered in August 2016. Netflix began streaming the series in February 2017. The Seven Deadly Sins: Revival of The Commandments, the second television anime series, premiered in January 2018, and Netflix began streaming the series in October 2018. The anime film The Seven Deadly Sins the Movie: Prisoners of the Sky opened in Japan in August 2018. The The Seven Deadly Sins: Imperial Wrath of The Gods (Nanatsu no Taizai: Kamigami no Gekirin) anime, the third television anime series, premiered in October 2019, and ended in March 2020. Netflix began streaming the anime in August 2020. The Seven Deadly Sins: Dragon\'s Judgement (Nanatsu no Taizai: Fundo no Shinpan), the franchise\'s latest television anime series, premiered on TV Tokyo in Japan in January 2021. Netflix began streaming the anime in June 2021. The Seven Deadly Sins: Cursed By Light (Nanatsu no Taizai: Hikari ni Norowareshi Mono-tachi), an all-new original anime film, opened in Japan in July 2021. Netflix began streaming the film on October 1. The Seven Deadly Sins: Grudge of Edinburgh (Nanatsu no Taizai: Ensa no Edinburgh), the franchise\'s upcoming two part anime film project, will feature a new original story, and will center on Meliodas\' son Tristan. The film project will premiere this year.
# Update: New visual added.
# Source: Weekly Shōnen Magazine issue 24')
# monster_Hunter = News.create(title: 'Monster Hunter Rise Game Expansion\'s Trailer Reveals Monsters, Switch Skill Swap, Follower Quests', date: '10 MAY 2022', img: '', text: 'CAPCOM\'s Digital Event stream for the Monster Hunter Rise: Sunbreak expansion for the Monster Hunter Rise game on Tuesday revealed new information and a trailer on Tuesday. The event unveiled three additional monsters, the Switch Skill Swap ability, Follower Quests, and more information about the Elder Dragon Malzeno. The new monsters include Magma Almudron, Aurora Somnacanth, and Monster Hunter 4\'s Seregios. The expansion will debut for Switch and PC via Steam on June 30. Players who already own the base Monster Hunter Rise game can purchase the expansion as DLC. There is also a set including both the base game and Sunbreak expansion. There game is also getting three new amiibo that will unlock costume sets in the game. The base game is getting a title update on June 30 in preparation for the new expansion.  Monster Hunter Rise: Sunbreak will have an all-new story, with new locations to visit, as well as new gameplay mechanics. It will feature the new Elder Dragon Malzeno and the new Master Rank. The expansion will also bring back the Shogun Ceanataur from Monster Hunter 2 along with several other monsters from previous games in the series. Monster Hunter Rise has surpassed 8 million copies shipped in both physical and digital sales worldwide. The franchise\'s games have shipped a cumulative 78 million units as of September 30.
# The game launched on PC via Steam on January 12. The PC version of the game features 4K resolution, high-res textures, high framerates, optimized keyboard/mouse controls, voice chat, and ultrawide display. It also includes all content from the Nintendo Switch version up to November 2021. Monster Hunter Rise launched on Switch on March 2021. The game got a collaboration with CAPCOM\'s Ghosts \'n\' Goblins Resurrection game on October 29 and Sega\'s Sonic the Hedgehog franchise on November 26. The "Rise" in the title refers to hunter utilizing the verticality of the game\'s environment, as well as the developers\' desire to build enthusiasm with many players around the world. The new Wirebug allows players to complete new actions and climb a variety of vertical locations. New monsters in the game include Magnamalo, Aknosom, Great Izuchi, and Tetranodon. New locations include the Shrine Ruins. The game\'s base is the village of Kamura, and the story features a rampage.
# Source: Monster Hunter franchise\'s YouTube channel')
# name = News.create(title: 'Nintendo Switch Console Crosses 107.65 Million Units in Sales', date: '10 MAY 2022', img: '', text: 'Nintendo\'s latest earnings release for fiscal year 2021 (April 1, 2021 to March 31, 2022) on Tuesday announced the company\'s Nintendo Switch console has sold 107.65 million units worldwide as of March 31. This number includes sales for the Nintendo Switch, Lite, and OLED consoles. The console sold 23.06 million units between April 2021 to March 2022. The company sold 13.56 million Switch units, 3.70 million Switch Lite units, and 5.80 million Switch OLED units between April 2021 and March 2022. Nintendo sold about 4.11 million Switch units (including all three models) this fiscal quarter, between January 1 and March 31. The company sold 235.07 million units of its first-party Switch games in the 2021 fiscal year. The company revealed updated game sales as of March 31, including:

# Mario Kart 8 Deluxe: 45.33 million
# Animal Crossing: New Horizons: 38.64 million
# Super Smash Bros. Ultimate: 28.17 million
# The Legend of Zelda: Breath of the Wild: 26.55 million
# Pokémon Sword/Pokémon Shield: 24.27 million
# Super Mario Odyssey: 23.50 million
# Super Mario Party: 17.78 million
# Pokémon Brilliant Diamond / Pokémon Shining Pearl: 14.65 million
# Pokémon: Let\'s Go, Pikachu!/Pokémon: Let\'s Go, Eevee!: 14.53 million
# Ring Fit Adventure: 14.09 million
# Super Mario Bros. U Deluxe: 13.31 million
# Splatoon 2: 13.30 million
# Pokémon Legends: Arceus: 12.64 million
# Luigi\'s Mansion 3: 11.43 million
# According to the report, shortages of semiconductor components and other parts resulted in a 20% decrease of console sales this fiscal year from the fiscal year 2021\'s 28.83 million units in sales. The company\'s sales projections for April 2022 to March 2023 expect a 8.9% drop in console sales to 21 million. Nintendo\'s December 31 earnings report had earlier revealed that the Switch surpassed the Nintendo Wii\'s lifetime sales of 101.63 million with 103.54 million units. Nikkei Asia had previously reported that Nintendo will only be able to produce about 24 million units of the Nintendo Switch, about 20% less than its previously planned production estimate of 30 million units, for the fiscal year ending in March 2022. This number included the newer Switch OLED model and Switch Lite consoles. Nintendo released the new OLED model of its Nintendo Switch console on October 8. The Switch hybrid home and handheld console debuted on March 3, 2017. The Switch is the company\'s third best-selling console behind the Nintendo DS and Game Boy.
# Sources: Nintendo (link 2, link 3, link 4) via Gematsu')
# name = News.create(title: 'PlayStation 5 Console Has Shipped 19.3 Million Units Worldwide', date: '10 MAY 2022', img: '', text: 'Sony revealed on Tuesday in its financial results presentation for the fiscal year 2021 (April 1, 2021 to March 31, 2022) that it has shipped a total of 19.3 million units of its PlayStation 5 console worldwide, with 2 million of those units shipping in the final quarter of the fiscal year.

# This represents 1.3 million fewer units shipped over the same period last year, when Sony shipped 3.3 million units in the final quarter of fiscal year 2020. Sony shipped 11.5 million PS5 units in fiscal year 2021 and 7.8 million units in fiscal year 2020.

# In addition, Sony revealed that it has shipped a total of 117.2 million units of its previous generation PlayStation 4 console, with 100,000 of those units shipping in the final quarter of the year. Sony shipped 900,000 fewer units of the console compared to the same period last year, when it shipped 1 million units.

# Sony also said that it had 47.4 million PlayStation Plus subscribers in its fourth quarter, compared to 47.6 million in the same period last year. Sony said it had 106 million monthly active users on PlayStation Network in the fourth quarter, compared to 109 million last year.

# As of July 2021, Sony had sold over 10 million units of the PS5 worldwide since its launch in November 2020, making the PS5 Sony\'s fastest-selling console.

# As of May 2020, Sony had shipped 110.4 million units of the PS4 worldwide.

# The PS5 launched in the United States, Japan, Canada, Mexico, Australia, New Zealand, and South Korea on November 12, 2020. The console launched in most of the rest of the world on November 19, 2020. The PS5 retails for US$499.99, and the PS5 Digital Edition (which does not include an optical disc drive) retails for US$399.99.

# The PS4 console launched in the U.S. and Canada in November 2013 and in Japan in February 2014.

# Source: Sony\'s FY2021 Consolidated Financial Results document and Supplemental Information document via Gematsu')
# name = News.create(title: 'Detective Conan: The Culprit Hanzawa Anime Premieres This Fall', date: '09 MAY 2022', img: '', text: 'The Detective Conan: Zero\'s Tea Time anime ended on Monday with an announcement that the television anime of Mayuko Kanba\'s Detective Conan: Hannin no Hanzawa-san (Detective Conan: The Culprit Hanzawa) manga will premiere this fall.

# Netflix will stream the anime worldwide.

# Detective Conan: Hannin no Hanzawa-san is a gag manga that stars the black-silhouetted "criminal" that appears in Detective Conan chapters to represent the mystery culprits. The manga debuted in Shōnen Sunday S in May 2017. The manga\'s sixth compiled book volume shipped in Japan in October 2021.

# Gosho Aoyama\'s Detective Conan manga also inspired a recent anime adaptation of a spinoff manga, Takahiro Arai\'s Detective Conan: Zero no Tea Time (Detective Conan: Zero\'s Tea Time). The anime premiered on April 5, and ended with its sixth episode on Monday. Netflix will release the anime worldwide outside of Japan in July.

# Source: The Mainichi Shimbun\'s Mantan Web')
# name = News.create(title: 'My Hero Academia Gets Original 2-Episode Anime This Summer', date: '09 MAY 2022', img: '', text: 'This year\'s 23rd issue of Shueisha\'s Weekly Shonen Jump magazine revealed on Monday that the My Hero Academia anime will get a new two-episode special that will first screen in theaters in Japan on June 16-19 before streaming online this summer.
    
# One of the episodes will have an original story centering on baseball-loving pro heroes who form Hero League Baseball (HLB). This season the Gang Orca-led Orcas and the Shishido-led Lionels are vying for the top. Both teams are determined to win, and so they call upon the students at U.A. for support. All players are allowed to use their Quirks in the upcoming game.

# Shueisha will reveal the details of the second episode at a later date.

# The anime\'s sixth season will premiere this fall.

# The anime\'s first 13-episode season premiered in April 2016. The 25-episode second season premiered in April 2017, and the third season premiered in April 2018 and ran for 25 episodes. The fourth season premiered in Japan in October 2019, and aired for 25 episodes. A two-episode original video anime for the franchise streamed in Japan in August 2020, and Funimation and Crunchyroll streamed the episodes.

# The show\'s fifth season premiered in Japan in March 2021, and aired for 25 episodes.
# Sources: Weekly Shonen Jump issue 23, My Hero Academia anime\'s website')
# name = News.create(title: 'Crunchyroll Opens Dragon Ball Super: Super Hero Film Worldwide in Theaters This Summer', date: '10 MAY 2022', img: '', text: 'Crunchyroll and Sony Pictures Entertainment announced on Tuesday that they will screen Dragon Ball Super: Super Hero, the second anime film in the Dragon Ball Super franchise, in theaters worldwide this summer in both the original Japanese audio with subtitles, and with a dub. The film will be Crunchyroll\'s first globally-distributed theatrical release. Crunchyroll is streaming an English-subtitled trailer for the film. Crunchyroll will distribute the film in "all continents, including North America, Latin America, Europe, Australia/New Zealand, Africa, the Middle East, and Asia (excluding Japan)". Crunchyroll describes the film:

# The Red Ribbon Army was once destroyed by Son Goku. Individuals, who carry on its spirit, have created the ultimate Androids, Gamma 1 and Gamma 2. These two Androids call themselves “Super Heroes”. They start attacking Piccolo and Gohan… What is the New Red Ribbon Army\'s objective? In the face of approaching danger, it is time to awaken, Super Hero!

# The film will open in Japan on June 11 after a delay due to the Toei Animation hack in March. The film was originally slated to open in Japan on April 22.

# Tetsuro Kodama is directing the film, and Naoki Satō is composing the music. Nobuhito Sue is the art director, Chikashi Kubota is the animation director, and Jae Hoon Jung is the CG director. Dragon Ball original manga creator Akira Toriyama worked on the film\'s original story, screenplay, and character designs.

# Guest cast members include:

# Hiroshi Kamiya as Gamma #1
# Mamoru Miyano as Gamma #2
# Miyu Irino as Dr. Hedo
# Volcano Ōta as Magenta
# Ryota Takeuchi as Carmine
# The staff has previously revealed new character designs for Dende, Korin, and Bulma. Whis and Beerus will also appear in the film.

# The film will be the 21st anime film in the overall Dragon Ball franchise.
# Source: Press release')
# name = News.create(title: 'The Deer King Film Screens in U.S. Theaters in July', date: '10 MAY 2022', img: '', text: 'GKIDS announced on Tuesday that it will screen The Deer King (Shika no Ō: Yuna to Yakusoku no Tabi), the anime film of Nahoko Uehashi\'s Shika no Ō (The Deer King) medical fantasy novel series, in the U.S. in July. The company will screen the film as a fan preview event in Japanese with English subtitles on July 13 and with an English dub on July 14. The film with then have a limited release in select theaters on July 15.

# Tickets go on sale on June 10. Fan preview events will feature an introduction by director Masashi Ando.

# The anime film opened on February 4. The film was delayed from a September 2020 opening due to the new coronavirus disease (COVID-19), and delayed again from September 2021.

# The novels center on Van, the head of a group of soldiers who expected to die fighting for their lands against a large empire looking to incorporate their home into its kingdom. Instead of dying, however, Van is taken as a slave and thrown into a salt mine. One night, a pack of strange dogs attacks the salt mine, and a mysterious illness breaks out. During the attack, Van takes the opportunity to escape, and he meets a young girl. Elsewhere, rumor is spreading that only immigrants are coming down with this mysterious illness. The medical scientist Hossal risks his life to search for a cure. Doctors also study a father and child who seem to have survived the illness. The novels tell the interconnecting stories and bonds of those who fight against a cruel fate.

# Masashi Ando (Princess Mononoke, Spirited Away, your name. character design; Tokyo Godfathers, Paranoia Agent, When Marnie Was There, your name. animation director) directed the film alongside Masayuki Miyaji (Xam\'d: Lost Memories, Fusé: Memoirs of a Huntress) at Production I.G. Ando also drew the character designs, and was the chief animation director. Taku Kishimoto (Haikyu!!, ERASED, Fruits Basket) penned the script. Harumi Fuuki (Forest of Piano series, Miss Hokusai, Digimon Adventure: Last Evolution Kizuna) composed the music. Singer-songwriter milet created the theme song "\One Reason\" for the film.

# The film screened in June in competition at last year\'s Annecy International Animation Film Festival. The film screened at the Fantasia International Film Festival in August 2021 and won the Bronze Audience Award there. It also screened at the Animation Is Film Festival in Los Angeles in September 2021.

# The novels won the Japan Booksellers\' Award and won the fourth "\Japan Medical Novel Award\" in 2015.

# Taro Sekiguchi launched a manga adaptation on Kadokawa\'s Young Ace Up website in July 2021. The manga ended with its second volume, which shipped in Japan on March 10.

# Source: Press release')
# name = News.create(title: 'BookWalker Global Adds Audiobooks from Yen Press', date: '11 MAY 2022', img: '', text: 'BookWalker Global announced on Wednesday that it has added the following 17 audiobooks from Yen Press to its service:

#     Sword Art Online Volumes 1-5 by Reki Kawahara
#     Overlord Volumes 1-4 by Kugane Maruyama, so-bin
#     The Saga of Tanya the Evil Volumes 1-3 by Carlo Zen, Shinobu Shinotsuki
#     Spice and Wolf Volume 1 by Isuna Hasekura
#     So I\'m a Spider, So What? Volume 1 by Okina Baba
#     Solo Leveling Volumes 1-3 of Korean novel series by Chugong
#     Yen Press announced its new imprint for audiobooks Yen Audio in May 2021. The company is partnering with Hachette Audio to produce, sell, and distribute digital audiobooks for select titles.
    
#     Source: Press release')
# name = News.create(title: 'Summit of the Gods Film\'s Japanese Dub Previewed in Teaser', date: '12 MAY 2022', img: '', text: 'Film distributor Longride unveiled a teaser trailer for the Japanese dub of the France-Luxembourg animated film based on Jiro Taniguchi\'s The Summit of the Gods (Kamigami no Itadaki) manga. The film will open in Tokyo\'s Shinjuku Piccadilly and Human Trust Cinema Yurakucho, as well in other theaters throughout Japan, on July 8.

# The dub cast stars Kenyuu Horiuchi as Makoto Fukamachi, Akio Ohtsuka as Jōji Habu, Ryota Ohsaka as Buntarō Kishi, and Asami Imai as Ryōko Kishi.

# Netflix has the worldwide rights to the film outside of France, Benelux, China, Japan, and Korea. Netflix released the film in select U.S. theaters on November 24 last year, and in select U.K. theaters on November 26. The film then streamed on Netflix on November 30.

# The film screened in July at the Cannes Film Festival as part of the Official Selection, and opened in theaters in France on September 22 last year under the title Le Sommet des dieux. The film also opened the Animation Is Film Festival in Los Angeles on October 22. The movie won in the Best Animation Film category at France\'s Lumières International Press Awards in January. The film won the award for the Best Animated Feature of the 47th César Awards in February.

# Patrick Imbert (Ernest & Celestine) directed the film, and Magali Pouzol and Imbert wrote the script with Jean-Charles Ostorero collaborating. David Coquard-Dassault (Peripheria) was the film\'s art director. Amine Bouhafa composed the music. Diaphana Distribution is distributing the film in France, while Wild Bunch International has the international rights. Didier Brunner (The Triplets of Belleville, Kirikou and the Sorceress) produced the film. Cartoon Brew describes the film as a 2D/3D hybrid.

# The manga is itself an adaptation of Baku Yumemakura\'s novel. The story follows Fukamachi, an avid wilderness photographer who discovers a link to the past in Kathmandu, Nepal. He finds a camera supposedly belonging to George Mallory, a mountaineer who went missing on Mt. Everest. After meeting Joji Habu, a well-known climber with a passionate drive for the mountain, the two set off to uncover a piece of lost history.

# The series ran in Shueisha\'s Business Jump, and European company Fanfare / Ponent Mon publishes the manga in English. Taniguchi passed away on February 11, 2017.

# Source: Comic Natalie')
# name = News.create(title: 'Chainsaw Man Ranks #1 on U.S. Monthly Bookscan April List', date: '', img: '', text: 'Tatsuki Fujimoto\'s Chainsaw Man manga ranked at 1 on NPD BookScan\'s Top 20 adult graphic novels list for April.

#     Manga took all 20 spots again in this month\'s list:
    
#     1 — Tatsuki Fujimoto\'s Chainsaw Man volume 10
#     2 — Gege Akutami\'s Jujutsu Kaisen volume 15
#     3 — Tatsuya Endō\'s SPY x FAMILY volume 7
#     4 — Tatsuya Endō\'s SPY x FAMILY volume 1
#     5 — Gege Akutami\'s Jujutsu Kaisen volume 0
#     6 — Naoya Matsumoto\'s Kaiju No. 8 volume 2
#     7 — Tatsuya Endō\'s SPY x FAMILY volume 2
#     8 — Koyoharu Gotouge and Ryoji Hirano\'s Demon Slayer: Kimetsu no Yaiba - Stories of Water and Flame
#     9 — Kentarou Miura\'s Berserk Hardcover volume 1
#     10 — Koyoharu Gotouge\'s Demon Slayer: Kimetsu no Yaiba volume 1
#     11 — Kōhei Horikoshi\'s My Hero Academia volume 30
#     12 — Tatsuya Endō\'s SPY x FAMILY volume 3
#     13 — Kōhei Horikoshi\'s My Hero Academia volume 1
#     14 — Tatsuki Fujimoto\'s Chainsaw Man volume 2
#     15 — Tatsuki Fujimoto\'s Chainsaw Man volume 1
#     16 — Tatsuya Endō\'s SPY x FAMILY volume 4
#     17 — Tatsuya Endō\'s SPY x FAMILY volume 6
#     18 — Iro Aida\'s Toilet-Bound Hanako-kun volume 13
#     19 — Iro Aida\'s Toilet-Bound Hanako-kun volume 1
#     20 — Koyoharu Gotouge\'s Demon Slayer: Kimetsu no Yaiba volume 4
#     NPD BookScan collects weekly point-of-sale data on print books from over 16,000 locations including e-tailers, chains, mass merchandisers, independent bookstores, and more. NPD BookScan covers approximately 85% of the U.S. trade print book market. The ranks on this chart are based on piece sales. Some publishers classify titles that are primarily text, or art books, as graphic novels; ICv2 removes those titles from the rankings.
    
#     Source: ICv2 (Brigid Alverson)')
# name = News.create(title: 'Blue Lock Anime Reveals Promo Video, October Premiere, 10 More Cast Members', date: '13 MAY 2022', img: '', text: 'The official website for the television anime of Muneyuki Kaneshiro and Yūsuke Nomura\'s Blue Lock soccer manga revealed on Friday that the anime will premiere in October and will air on TV Asahi and its affiliates in the \"NUMAnimation\" programming block. The site also revealed the show\'s promotional video, a new key visual, and 10 more cast members.
    
#     The new cast includes:

#     Masatomo Nakazawa as Wataru Kuon
#     Yoshitsugu Matsuoka as Jingo Raichi
#     Shōya Chiba as Yūdai Imamura
#     Shugo Nakamura as Gin Gagamaru
#     Daishi Kajita as Asahi Naruhaya
#     Ryūnosuke Watanuki as Okuhito Iemon
#     Aoi Ichikawa as Gurimu Igarashi
#     Kenichi Suzumura as Ryōsuke Kira
#     Hiroshi Kamiya as Jinpachi Ego
#     Eri Yukimura as Anri Teieri
#     The anime stars:
    
#     Tasuku Kaito as Meguru Bachira
#     Kazuki Ura as Yoichi Isagi
#     Yūki Ono as Rensuke Kunigami
#     Sōma Saitō as Hyōma Chigiri
#     Tetsuaki Watanabe (Powerful Pro Yakyū Powerful Kōkō-hen) is directing the anime at 8-Bit with Shunsuke Ishikawa as assistant director. Taku Kishimoto (Haikyu!!, Silver Spoon, 2019 Fruits Basket) is supervising and writing the series scripts, and the manga\'s Kaneshiro is supervising the story. Yutaka Uemura (Saga of Tanya the Evil director) is the concept adviser. Masaru Shindō (Fruits Basket, Macross Delta, My Teen Romantic Comedy SNAFU) is the main character designer and chief animation director, and Kenji Tanabe and Kento Toya are also character designers and chief animation directors. Jun Murayama is composing the music.
    
#         After a disastrous defeat at the 2018 World Cup, Japan\'s team struggles to regroup. But what\'s missing? An absolute Ace Striker, who can guide them to the win. The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match...and to do so, they\'ve gathered 300 of Japan\'s best and brightest youth players. Who will emerge to lead the team...and will they be able to out-muscle and out-ego everyone who stands in their way?
        
#     Kaneshiro and Nomura launched the ongoing manga in Weekly Shōnen Magazine in August 2018. The manga won the Best Shōnen Manga award in Kodansha\'s 45th annual Manga Awards last year. A spinoff manga about Seishirō Nagi\'s past will launch in the July issue of Bessatsu Shōnen Magazine on June 9.
        
# Sources: Blue Lock anime\'s website, Comic Natalie')


puts "Seeding Complete----"