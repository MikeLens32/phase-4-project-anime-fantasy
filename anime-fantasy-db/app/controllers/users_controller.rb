class UsersController < ApplicationController
    def show
        league = League.find_by(id: params[:id])
        
    end
end
