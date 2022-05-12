class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  # skip_before_action :authorize, only: :create
  def index
    @users = User.all

    render json: @users
  end


    def create
        user = User.create(user_params)
        if user.valid?
          render json: user, status: :created

      end
    
      private
    
      def user_params
        params.permit(:username, :password, :first_name, :last_name, :shopping_session_id )
      end
    end
    
end
