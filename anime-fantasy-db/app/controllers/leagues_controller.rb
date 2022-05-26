class LeaguesController < ApplicationController

    def show
        league = League.find_by(id: params[:id])
        byebug
        render json: league
    end
    
    def create
        league = League.create!(lg_params)
        Character.all.each{|anime_character| LeagueCharacter.create(lg_ch_params)}
        render json: league, status: :created
    end

    def update 
        league = League.find_by(id: params(:id))
        league.update{lg_params}
        render json: league, status: :updated
    end

    def destroy
        league = League.find_by(id: params[:id])
        league&.destroy
        render json: league
    end

    private

    def lg_ch_params
        params.permit(:league_id, :character_id)
    end

    def lg_params
        params.permit(:name, :end_date, :creator_id)
    end

end
