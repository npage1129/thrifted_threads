class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :session_id, :product_id, :quantity
end
