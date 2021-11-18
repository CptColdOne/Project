class AddUserToPost < ActiveRecord::Migration[6.1]
  def change
    change_table :posts do |t|
      t.belongs_to :user 
    end
  end
end
