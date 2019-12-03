import React from 'react'

const Image = (props) => {
    return (
        <div onClick={props.openModal} className="image">
            <img src={props.url} alt="dancing" />
        </div>
    )
}

const Images = (props) => {
    let imageUrls = [
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43610007_10156820308819082_3055927655544127488_n.jpg?_nc_cat=103&_nc_ohc=AXcXWorJIW4AQkYFiz3vywTYLYK1He0OxMY76lXGjvjB-O-srtv9zXQJA&_nc_ht=scontent-iad3-1.xx&oh=f84b9dd3c69f9d7af32c70b4b57f0b86&oe=5E82138A",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
    ]

    let images = [];
    imageUrls.forEach((url) => {
        images.push(<Image openModal={props.openModal} url={url} />)
    })

    return (
        <div className="images">
            { images }
        </div>
    )
}

export default Images;