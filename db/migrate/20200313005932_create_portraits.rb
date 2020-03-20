class CreatePortraits < ActiveRecord::Migration[6.0]
  def change
    create_table :portraits do |t|
      t.string :author
      t.string :pic_id
      t.string :url

      t.timestamps
    end
  end
end
