FactoryGirl.define do
  factory :message do
    text Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/message/image/2/ChatSpace__1_.png")
    user
    group
  end
end
