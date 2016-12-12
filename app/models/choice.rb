class Choice < ApplicationRecord
  has_many :picks
  has_many :choices, through: :picks
end
