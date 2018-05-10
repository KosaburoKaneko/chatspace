class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validate :text, presence: true, unless: :image?
end
