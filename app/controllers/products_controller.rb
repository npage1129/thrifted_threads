class ProductsController < ApplicationController
has_many :cart_items
has_one :product_category
has_one :sale


end
