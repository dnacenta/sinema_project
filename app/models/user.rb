class User < ApplicationRecord
  has_many :subscriptions
  has_many :groups,  through: :subscriptions
  has_many :choices

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
