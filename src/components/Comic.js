


const Comic = props =>{

    return(
        <div className="comic-div">
            <h1>Title: {props.data.title}</h1>
            <img className="image" src={props.data.img} alt={props.data.alt} />
            <div className="date-div">
                <h2>Year: {props.data.year}</h2>
                <h2>Month: {props.data.month}</h2>
                <h2>Day: {props.data.day}</h2>
            </div>
            <h2>Number: {props.data.num ? props.data.num:'N/A'}</h2>
            <h2>News: {props.data.news ? props.data.news:'N/A'}</h2>
            <h2>Link: {props.data.link ? <a href={props.data.link} target="_blank">{props.data.link}</a>:'N/A'}</h2>
            <h2>Transcript</h2>
            {props.data.transcript ? (props.data.transcript.split('\n').map(str => <p>{str}</p>)):(<p>N/A</p>)}

        </div>
    )
};

export default Comic;
