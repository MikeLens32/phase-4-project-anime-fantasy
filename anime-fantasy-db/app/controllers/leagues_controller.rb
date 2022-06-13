class LeaguesController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        if params[:user_id]
            user = User.find_by!(id: params[:user_id])
            render json: user.all_leagues
            #
            # user.created_leagues
        else 
            render json: League.all
        end
    end
    
    def show
        league = League.find_by!(id: params[:id])
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
        # binding.pry
        league&.destroy!
        head :no_content
    end

    private

    def lg_ch_params
        params.require(:league).permit(:id, :creator_id, :invitations, :league_characters)
    end

    def lg_params
        params.permit(:name, :creator_id, :invitations, :league_characters)
    end

end
