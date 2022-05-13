class LeaguesController < ApplicationController

    def show
        league = League.find_by(id: params[:id])
        render json: league
    end
    
    def create
        league = League.create!(lg_params)
    end

    def update 
        league = League.find_by(id: params(:id))
        league.update{lg_params}
        render json: league
    end

    def destroy
        league = League.find_by(id: params[:id])
        league&.destroy
        render json: league
    end

    private

    def lg_params
        params.permit(name, end_date, creator_id)
    end

end
