class CreateShoppingSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_sessions do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :quantity, :default => 1
      t.timestamps
    end
  end
end
