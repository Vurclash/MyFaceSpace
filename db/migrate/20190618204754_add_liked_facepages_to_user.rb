class AddLikedFacepagesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_facepages, :text
  end
end
