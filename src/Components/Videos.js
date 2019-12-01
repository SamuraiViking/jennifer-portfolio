import React from 'react'

const Video = (props) => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={props.title} allowfullscreen></iframe>
            <span>{props.description}</span>
        </div>
    )
}

const Videos = () => {
    return (
        <div className="videos">
            <Video
                title="delta"
                url="https://www.youtube.com/embed/L8josds8TSw"
                description="Delta Commerical"
            />
            <Video
                title="dancereal"
                url="https://www.youtube.com/embed/EiwaGV4p8uo"
                description="Jennifer Nelson Dance Real 2018"
            />
        </div>
    )
}

export default Videos