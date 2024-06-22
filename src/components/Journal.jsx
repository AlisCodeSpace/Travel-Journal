export default function Journal(props) {
    return (
        <div className="journal--container">
            <div className="journal--image">
                <img src={`../src/assets/${props.data.viewImage}`} alt={props.data.title} />
            </div>
            <div className="journal--information">
                <div className="journal--location">
                    <img src="../src/assets/location.png" alt="" />
                    <p>{props.data.location}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <div className="journal--title">
                    <h1>{props.data.title}</h1>
                </div>
                <div className="journal--date">
                    <p>{props.data.date}</p>
                </div>
                <div className="journal--description">
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    )
}