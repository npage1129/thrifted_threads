require 'bcrypt'
class User < ApplicationRecord
    include BCrypt
    has_one :shopping_session, dependent: :destroy
    has_many :reviews

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    before_save { self.username = username.downcase }

    has_secure_password

    validates :username, presence: true
    validates :username, presence: true, length: { maximum: 255 },format: { with: VALID_EMAIL_REGEX },uniqueness: { case_sensitive: false }
    validates :password, presence: true, length: { minimum: 6 }
    validates_confirmation_of :password
    validates_presence_of :password_confirmation
    validates :first_name, presence: true
    
end
