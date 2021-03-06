class ChangeRecipes < ActiveRecord::Migration[5.1]
  def up
    drop_table :recipes
  end

  def down
    create_table :recipes do |t|
      t.string :image_url
      t.string :title, null: false
      t.text :ingredients, null: false
      t.text :prep, null: false
      t.string :type_of_food, null: false
      t.text :directions, null: false
      t.timestamps
    end
  end
end
