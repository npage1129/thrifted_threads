class ShoppingSessionsController < ApplicationController
 
    def create
        shopping_session = Shopping_Session.create!(shopping_session_params)
        render json: shopping_session, status: created
    end

    def update
        shopping_session = Shopping_Session.find(params[:id])
        shopping_session.update(plant_params)
        render json: shopping_session
    end 

    def destroy
        shopping_session = Shopping_Session.find(params[:id])
        shopping.destroy
        head :no_content
    end
    
    private
    def shopping_session_params
        params.permit(:user_id, :product_id)
    end
end
