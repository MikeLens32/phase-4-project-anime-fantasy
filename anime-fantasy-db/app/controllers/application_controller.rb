class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordInvalid, with: :no_route

    private

    def invalid_record(invalid)
        render json: { errors: invalid.record.errors.full_message.to_sentence }, status: :unprocessable_entity
    end

    def no_route
        render json: { errors: "Couldn't find a resource with id #{params[:id]}."}
    end
end
