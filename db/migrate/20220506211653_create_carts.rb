class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :sesiond_id
      t.integer :product_id
      t.string :product_name
      t.decimal :product_price
      t.string :product_img

      t.timestamps
    end
  end
end
