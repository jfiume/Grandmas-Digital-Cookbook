class RecreateRecipies < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :image_url
      t.string :title, null: false
      t.string :type_of_food, null: false
      t.text :ingredients, :array => true
      t.text :prep, :array => true
      t.text :directions, :array => true
      t.timestamps
    end

    add_index :recipes, :title
    add_index :recipes, :type_of_food
  end
end
