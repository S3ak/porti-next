import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ReactCarousel = () => {
  const gallery = [
    {
      src: "/images/slide1.jpg",
      title: "slide1",
    },
    {
      src: "/images/slide2.jpg",
      title: "slide2",
    },
    {
      src: "/images/slide3.jpg",
      title: "slide3",
    },
    {
      src: "/images/slide4.jpg",
      title: "slide4",
    },
    {
      src: "/images/slide5.jpg",
      title: "slide5",
    },
  ];

  return (
    <Carousel infiniteLoop={true}>
      {gallery.map((img) => (
        <div key={img.title}>
          <img src={img.src} alt={img.title} />
          <p className="Legend">{img.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReactCarousel;
