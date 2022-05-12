class ReviewsController < ApplicationController
    
    def index
        render json: Review.all
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update(review_update_params)
        render json: review_update_params
    end 

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:name, :email, :review)
    end
    def review_update_params
        params.permit(:name, :email, :review)
    end
    
end
