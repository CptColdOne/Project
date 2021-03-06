class Tag < ApplicationRecord
    has_and_belongs_to_many :posts

    def self.search(search)
        where("lower(posts.caption) LIKE :search OR lower(tags.name) LIKE :search", 
        search: "%#{search.downcase}%").uniq
    end
end
