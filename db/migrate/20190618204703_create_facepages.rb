class CreateFacepages < ActiveRecord::Migration[5.2]
  def change
    create_table :facepages do |t|
      t.string :title
      t.string :name
      t.text :description
      t.string :avatar

      t.timestamps
    end
  end
end
