class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img, :price, :product_category, :product_color, :on_sale, :original_price
end
