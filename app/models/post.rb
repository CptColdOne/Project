class Post < ApplicationRecord
    belongs_to :user
    has_one_attached :image
    has_and_belongs_to_many :tags

    after_create do
        post = Post.find_by(id: self.id)
        hashtags = self.caption.scan(/#\w+/)
        hashtags.uniq.map do |hashtag|
            tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
            post.tags << tag
        end
    end

    before_update do
        post = Post.find_by(id: self.id)
        post.tags.clear
        hashtags = self.caption.scan(/#\w+/)
        hashtags.uniq.map do |hashtag|
            tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
            post.tags << tag
        end
    end

end
