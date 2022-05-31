class LeagueCharactersController < ApplicationController
    skip_before_action :authorized, only: [:index]
    # before_action :find_league_character, only: [:show]

    def index
        league_characters = LeagueCharacter.all
        render json: league_characters
    end

    def show
        find_league_character
        render json: serializer_lc
    end

    private 

    def find_league_character
        @league_character = LeagueCharacter.find(params[:id])
    end

    def serialized_lc
        @league_character.to_json(inlcude: :characters)
    end

end
