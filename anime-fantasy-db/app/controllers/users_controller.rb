class UsersController < ApplicationController
    skip_before_action :authorized, only: [:show, :create]

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_message.to_sentence }, status: :unprocessable_entity
        end
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
        params.permit(:username, :password, :password_confirmation)
    end

end
