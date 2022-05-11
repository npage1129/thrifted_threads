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
        Review.update(review_params)
        render json: review_params
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
    
end
