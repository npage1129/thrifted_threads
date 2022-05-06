class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img
      t.decimal :price
      t.string :product_color
      t.string :size
      t.text :description
      t.string :product_category
      t.boolean :on_sale
      t.decimal :original_price

      t.timestamps
    end
  end
end
