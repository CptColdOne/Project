class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :authentication_keys => [:login]

  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
  attr_writer :login

  def login
    @login || self.username || self.telephone || self.email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value OR lower(telephone) = :value", { :value => login.downcase}]).first
    elsif conditions.has_key?(:username) || conditions.has_key?(:email) || conditions.has_key?(:telephone)
      where(conditions.to_h).first
    end
  end
  
  validate :validate_username

  def validate_username
    if User.where(email: username).exists?
      errors.add(:username, :invalid)
    end
  end
end
