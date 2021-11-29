class HomeController < ApplicationController
    before_action :authenticate_user!
    
    def index
        posts = Post.where(:user_id => current_user.id)
        @posts = []
        posts.each do |post|
            temp_post = post.attributes
            temp_post['image'] = url_for(post.image)
            @posts.push(temp_post) 
        end 
    end
end
