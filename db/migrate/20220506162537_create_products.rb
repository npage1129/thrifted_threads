class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :decription
      t.string :img
      t.decimal :price
      t.string :product_category_type
      t.string :product_color
      t.boolean :on_sale
      t.integertype_of_clothing :original_price

      t.timestamps
    end
  end
end
