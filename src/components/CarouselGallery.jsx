import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselGallery.css";

import pic1 from "../assets/images/gallery/pic1.jpg";
import pic2 from "../assets/images/gallery/pic2.jpg";
import pic3 from "../assets/images/gallery/pic3.jpg";
import pic4 from "../assets/images/gallery/pic4.jpg";
import pic5 from "../assets/images/gallery/pic5.jpg";
import pic6 from "../assets/images/gallery/pic6.jpg";
import pic7 from "../assets/images/gallery/pic7.jpg";
import pic8 from "../assets/images/gallery/pic8.jpg";
import pic9 from "../assets/images/gallery/pic9.jpg";
import pic10 from "../assets/images/gallery/pic10.jpg";

const images = [
    pic1, 
    pic2, 
    pic3, 
    pic4, 
    pic5, 
    pic6, 
    pic7, 
    pic8,
    pic9,
    pic10
];

const CarouselGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className="gallery">
            <Slider {...settings}>
                {images.map((src, i) => (
                    <div key={i} className="custom-slide">
                        <img
                            src={src}
                            alt={`img-${i}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselGallery;