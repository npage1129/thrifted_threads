class UsersController < ApplicationController
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
