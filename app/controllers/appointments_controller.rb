class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('apt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.create(appointment_params)
    redirect_to root_path
  end

  private
    def appointment_params
      params.require(:appointment).permit(:title, :apt_time)
    end
    
end
