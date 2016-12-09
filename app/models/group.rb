class Group < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions

  def self.auto_delete
    if self.users.empty?
      self.delete
    end
  end
end
