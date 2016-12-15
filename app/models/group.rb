class Group < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions


  def auto_delete
    if self.users.empty?
      self.destroy
    end
  end
end
