200.times do 
  title = Faker::Book.title
  name = Faker::Games::ElderScrolls.name
  description = Faker::Movies::HitchhikersGuideToTheGalaxy.specie
  avatar = Faker::Avatar.image(title, "100x400", 'png', 'set4')
  Facepage.create(title: title, name: name, description: description, avatar: avatar, )
end

puts "All the facepages created!"