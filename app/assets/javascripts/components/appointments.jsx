class Appointments extends React.Component {
    render() {
        return (
            <div>
                <AppointmentForm />
                {this.props.appointments.map(function(appointments) {
                    return (
                    <Appointment appointments = {appointments} />
                    )
                })}
            </div>
        )
    }
}