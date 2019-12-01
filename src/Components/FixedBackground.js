import React from 'react'

const FixedBackground = (props) => {
    return (
        <div className="fixed-background-container">
            <div className="fixed-background">
                <p className="header">{props.text}</p>
            </div>
        </div>
    )
}

export default FixedBackground;