class LeaguesController < ApplicationController
    def index 
        leagues = League.all 
        render json: leagues
    end

    def show
        league = League.find_by(id: params[:id])
        render json: league
    end

    def create
        league = League.create!(lg_params)
    end

    private

    def lg_params
        params.permit(name, end_date, creator_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
