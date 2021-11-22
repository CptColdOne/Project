class AddViewsCounterToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :total_views, :integer, default: 0
  end
end
