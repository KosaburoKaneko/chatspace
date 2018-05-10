class Group < ApplicationRecord
  has_many :users, through: :group_user
  has_many :group_users
end
