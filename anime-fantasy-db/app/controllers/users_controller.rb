class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: UserSerializer.new(@current_user)
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: UserSerializer.new(user), status: :created
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
