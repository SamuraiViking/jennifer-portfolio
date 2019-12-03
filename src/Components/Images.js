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
        "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72733857_10157763436659082_2310371880428634112_n.jpg?_nc_cat=100&_nc_ohc=xQBFs_gKLEAAQkKgR33zxTGL5KTMbvSxwOZB8BPjVl0pAsP-B2SNZoa-A&_nc_ht=scontent-iad3-1.xx&oh=801a74bec0d755491dc30ee845a68885&oe=5E8AC39B",
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