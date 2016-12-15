class Pick < ApplicationRecord
  belongs_to :user
  belongs_to :group
  belongs_to :choice
end
