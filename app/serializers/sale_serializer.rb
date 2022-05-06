class SaleSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :product_id, :original_price, :sale_price
end
