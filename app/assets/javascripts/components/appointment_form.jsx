class AppointmentForm extends React.Component {
    render () {
        return (
            <div>
                <h2>Make a new appointment</h2>
                <form>
                    <input name='titl'e placeholder='Appointment title' />
                    <input name='apt_tim'e placeholder='Date and Time' />
                    <input type='submit' value='Make Appointment' />
                </form>
            </div>
        )
    }
}