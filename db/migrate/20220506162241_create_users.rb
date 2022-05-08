class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :first_name, null: false
      t.string :last_name
      t.integer :shopping_session_id
      t.string :password_digest, null:false

      t.timestamps
    end
  end
end
