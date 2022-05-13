class UsersController < ApplicationController
    before_action :action
    def show
        user = User.find(id: session[:id])
        render json: user
    end

    def create
        user = User.create(username: params[:username], email: params[:email],)
    end

    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unathorized unless sessions.include? :user_id
    end
end
