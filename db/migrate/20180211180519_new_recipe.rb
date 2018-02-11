class NewRecipe < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :image_url
      t.string :title, null: false
      t.text :ingredients, null: false
      t.text :prep, null: false
      t.string :type_of_food, null: false
      t.text :directions, null: false
      t.timestamps
    end

    add_index :recipes, :title
    add_index :recipes, :type_of_food
  end
end
