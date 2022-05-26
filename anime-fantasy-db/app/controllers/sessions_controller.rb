class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user = User.find_by_username(params[:username])
        # byebug
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unathorized
        end
    end

    def destroy
        session.delete(:user.id)
        head :no_content
    end
end
