class CreateProductCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :product_categories do |t|
      t.string :type
      t.integer :product_id

      t.timestamps
    end
  end
end
