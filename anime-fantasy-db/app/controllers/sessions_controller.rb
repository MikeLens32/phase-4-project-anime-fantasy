class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            render json: user, status: :accepted
        else
            render json: { errors: "Not authorized"}, status: :unathorized
        end
    end

    def destroy
        session.delete(:user.id)
        head :no_content
    end
end
