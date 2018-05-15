100.times do
  password = Faker::Internet.password(8)

  User.create(
    name: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    password: password,
    password_confirmation: password,
   )
end
