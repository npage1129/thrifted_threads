class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.string :name
      t.string :description
      t.integer :product_id
      t.integer :original_price
      t.integer :sale_price

      t.timestamps
    end
  end
end
