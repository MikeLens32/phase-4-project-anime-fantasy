class CharactersController < ApplicationController

    def index 
        characters = Character.all
        render json: characters
    end

    def show
        character = Character.find_by!(id: params[:id])
        render json: character
    end

    def highest_health
        character = Character.highest_health
        render json: character
    end

end
