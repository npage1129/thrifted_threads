require 'bcrypt'
class User < ApplicationRecord
    # include BCrypt
    has_one :shopping_session, dependent: :destroy
    has_many :reviews

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    before_save { self.username = username.downcase }

    has_secure_password

    validates :username, presence: true

end
