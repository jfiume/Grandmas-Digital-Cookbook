class Recipe < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :image_url
      t.string :title, null: false
      t.text :description, null: false
      t.string :genre, null: false
      t.text :directions, null: false
      t.timestamps
    end
  end
end
