class ChangeRecipes < ActiveRecord::Migration[5.1]
  def up
    add_column :recipes, :ingredients, :text, null: false
    add_column :recipes, :prep, :text, null: false
  end

  def down
    remove_column :recipes, :description
  end
end
