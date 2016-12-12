class User < ApplicationRecord
  has_many :subscriptions
  has_many :groups,  through: :subscriptions
  has_many :picks
  has_many :choices, through: :picks

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
