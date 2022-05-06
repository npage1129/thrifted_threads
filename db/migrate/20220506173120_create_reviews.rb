class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :email
      t.text :review
      t.belongs_to :user
      t.timestamps
    end
  end
end
