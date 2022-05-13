class CharactersController < ApplicationController
    wrap_parameters format:[]

    def index 
        characters = Character.all
        render json: characters
    end

    def show
        character = Character.find_by(id: params[:id])
        render json: character
    end
    
end
