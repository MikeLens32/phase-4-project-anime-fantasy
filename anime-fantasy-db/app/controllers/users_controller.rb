class UsersController < ApplicationController
    wrap_parameters format:[]

    def show
        current_user = User.find_by(session[:user_id])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: session[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        find_user
        @user&.destroy
        render json: @user
    end

    private

    def find_user #DRY the code with a simple method name
        @user = User.find(id: session[:id])
    end

    def user_params
        params.permit(:username, :email, :password)
    end

end
