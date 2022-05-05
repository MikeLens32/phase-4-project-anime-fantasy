class LeaguesController < ApplicationController
    def index 
        leagues = League.all 
        render json: leagues
    end

    def show
        league = League.find_by(id: params[:id])
        render json: leagues
    end

    def create
        league = League.create()
    end

    private

    def lg_params
        
    end
end
