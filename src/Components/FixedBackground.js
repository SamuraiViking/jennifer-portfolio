import React from 'react'

const FixedBackground = (props) => {
    const divStyle = {
        backgroundImage: `url(${props.url})`,
        color: props.color
    }
    return (
        <div className="fixed-background-container">
            <div className="fixed-background" style={ divStyle }>
                <p className="header">{props.text}</p>
            </div>
        </div>
    )
}

export default FixedBackground;