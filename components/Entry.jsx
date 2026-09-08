export default function Entry(props){
  return(
    <article className="journal-entry">
        <div className="main-image-container">
            <img className="main-image"
            src={props.img.src}
            alt={props.img.alt}
            />
 </div>
 <div className="info-container">
    <img className="marker"
     src="images/marker.png"
     alt="marker icon"
     />
 </div>

 <span className="country">{props.country}</span>
 <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
 <h2 className="title">{props.title}</h2>
 <p className="dates">{props.dates}</p>
 <p className="text">{props.text}</p>











    </article>




  )

}

