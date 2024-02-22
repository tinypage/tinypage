class CreateEntries < ActiveRecord::Migration[7.1]
  def change
    create_table :entries do |t|
      t.references :user, null: false, foreign_key: true
      t.jsonb :content, default: {}

      t.timestamps
    end
  end
end
