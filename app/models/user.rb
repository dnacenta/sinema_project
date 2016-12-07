class User < ApplicationRecord
  has_many :subscriptions
  has_many :groups, through: :subscriptions
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
