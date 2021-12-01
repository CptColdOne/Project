class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]
  before_action :authenticate_user!

  # GET /posts or /posts.json
  def index
    #@posts = Post.where(:user_id => current_user.id)
    posts = Post.where(:private => false)
    @posts = []
      posts.each do |post|
          temp_post = post.attributes
          temp_post['image'] = url_for(post.image)
          temp_post['post_link'] = url_for(post)
          # temp_post['hashtags']
          @posts.push(temp_post) 
      end 
  end

  def search
    @posts = Post.where(:private => false).where("caption LIKE ?", "%" + params[:q] + "%")
  end

  # GET /posts/1 or /posts/1.json
  def show
    @post.increment!(:total_views)
  end

  def hashtags
    tag = Tag.find_by(name: params[:name])
    @posts = tag.posts
  end
  
  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
    @post = Post.find(params[:id])
    unless current_user?(@post.user)
      #redirect_to root_path
      flash.alert = 'Пост может редактировать только автор!'
    end
  end

  # POST /posts or /posts.json
  def create
    @post = Post.new(post_params)

    @post.user_id = current_user.id

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: "Post was successfully created." }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    @post = Post.find(params[:id])
    if current_user?(@post.user)
      respond_to do |format|
        if @post.update(post_params)
          format.html { redirect_to @post, notice: "Post was successfully updated." }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    else
      #redirect_to root_path
      flash.alert = 'Пост может редактировать только автор!'
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post = Post.find(params[:id])
    if current_user?(@post.user)
      @post.destroy
      respond_to do |format|
        format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
        format.json { head :no_content }
      end
    else
      flash.alert = 'Пост может удалить только автор!'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :caption, :image, :private)
    end
end
