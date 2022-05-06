class CreateShoppingSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_sessions do |t|
      t.integer :user_id
      t.decimal :total

      t.timestamps
    end
  end
end
