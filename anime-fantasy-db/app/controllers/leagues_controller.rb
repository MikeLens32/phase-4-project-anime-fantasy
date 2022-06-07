class LeaguesController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            render json: League.joins(:invitations).distinct.where(leagues: { creator_id: user.created_leagues }).or(League.joins(:invitations).distinct.where(invitations: { member_id: user.id }))
            # user.created_leagues
        else 
            render json: League.all
        end
    end
    
    def show
        league = League.find_by(id: params[:id])
        render json: league
    end
    
    def create
        league = League.create!(lg_params)
        Character.all.each do |anime_character| 
            LeagueCharacter.create(league: league, character: anime_character)
        end
        render json: league, status: :created
    end

    def update 
        league = League.find_by(id: params[:id])
        league.update(lg_params)
        render json: league, status: :ok
    end

    def destroy
        league = League.find_by(id: params[:id])
        league&.destroy
        render json: league
    end

    private

    def lg_ch_params
        params.require(:league).permit(:id, :creator_id, :invitations, :league_characters)
    end

    def lg_params
        params.permit(:name, :creator_id, :invitations, :league_characters)
    end

end
