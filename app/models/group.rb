class Group < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :picks
  has_many :choices, through: :picks

  def auto_delete
    if self.users.empty?
      self.destroy
    end
  end
end
