import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
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

class DemoCarousel extends Component {
    render() {
        const images = []
        imageUrls.forEach((url) => {
            images.push(<img src={url} alt="lol" />)
        })
        return (
            <Carousel>
                { images }
            </Carousel>
        );
    }
};

export default DemoCarousel;