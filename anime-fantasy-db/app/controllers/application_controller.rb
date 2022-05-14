class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordInvalid, with: :no_route
    before_action :authorized

    

    private

    def current_user
        @current_user ||= User.find(session[:user_id])
    end

    def authorized #attaching this to the before_action macro will have this guard clause run before all user actions
        return render json: {error: "Not authorized"}, status: :unathorized unless current_user
    end

    def invalid_record(invalid)
        render json: { error: invalid.record.errors.full_message.to_sentence }, status: :unprocessable_entity
    end

    def no_route
        render json: { error: "Couldn't find a resource with id #{params[:id]}."}
    end
end
