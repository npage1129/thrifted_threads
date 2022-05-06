class CreateColors < ActiveRecord::Migration[6.1]
  def change
    create_table :colors do |t|
      t.string :color_name
      t.integer :product_id

      t.timestamps
    end
  end
end
