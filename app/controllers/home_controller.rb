class HomeController < ApplicationController
    before_action :authenticate_user!
    protect_from_forgery with: :null_session
    
    def index
        posts = Post.where(:user_id => current_user.id)
        @posts = []
        posts.each do |post|
            temp_post = post.attributes
            temp_post['image'] = url_for(post.image)
            temp_post['post_link'] = url_for(post)
            temp_post['post_link_edit'] = url_for(edit_post_path(post))
            @posts.push(temp_post) 
        end 
    end
end
