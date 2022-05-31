class LeaguesController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        if params[:league_id]
            user = User.find_by(id: session[:id])
            render json: user.leagues
        else 
            leagues = League.all
            render json: leagues
        end
    end
    
    def show
        league = League.find_by(id: params[:id])
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
        params.require(:league).permit(:id, :creator_id, :member_id)
    end

    def lg_params
        params.permit(:name, :creator_id, :member_id)
    end

end
