class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.string :title
      t.date :date
      t.float :ammount

      t.timestamps
    end
  end
end
