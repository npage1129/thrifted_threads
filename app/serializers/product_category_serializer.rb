class ProductCategorySerializer < ActiveModel::Serializer
  attributes :id, :type, :product_id
end
