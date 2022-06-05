class InvitationsController < ApplicationController

    def create
         # binding.pry
        invite = Invitation.create!(invite_params)
        render json: invite
    end

    private

    def invite_params
        params.permit(:member_id, :user_id, :invite_accepted, :league_id)
    end
end
