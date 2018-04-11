class Appointment extends React.Component {
    render () {
        return (
            <div>
                <h3>{this.props.appointments.title}</h3>
                <p>{this.props.appointments.apt_time}</p>
            </div>
        )
    }
}