json.extract! post, :id, :title, :image, :caption, :private, :created_at, :updated_at
json.url post_url(post, format: :json)
