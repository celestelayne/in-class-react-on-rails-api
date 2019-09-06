class AddColumnsToMovie < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :runtime, :string
    add_column :movies, :genre, :string
    add_column :movies, :actors, :string
    add_column :movies, :poster, :string
    add_column :movies, :website, :string
  end
end
