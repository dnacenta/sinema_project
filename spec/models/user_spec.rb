require "rails_helper"

RSpec.describe User, type: :model do
 let(:user) { build(:user) }

   it "has a valid factory" do
     # Por defecto, la factoria que hemos creado debería ser válida
     expect(user).to be_valid
   end

   it "is invalid without an email" do
     # Si seteamos el email a nil, el usuario ya no debería ser válido
     user.email = nil
     expect(user).not_to be_valid
   end

   it "is invalid without a password" do
    user.password = nil
    expect(user).not_to be_valid
  end
end
