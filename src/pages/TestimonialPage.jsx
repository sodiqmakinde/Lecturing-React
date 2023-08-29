import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    imageEndpoint: "/images/testimonial1.jpg",
    content:
      "I had an amazing experience with this company. Their products are top-notch and the team is incredibly talented.",
    jobPosition: "Marketing Manager",
  },
  {
    id: 2,
    imageEndpoint: "/images/testimonial2.jpg",
    content:
      "Working here has been a game-changer for me. The supportive environment and challenging projects have helped me grow as a developer.",
    jobPosition: "Software Engineer",
  },
  {
    id: 3,
    imageEndpoint: "/images/testimonial3.jpg",
    content:
      "I'm impressed by the level of professionalism this team maintains. It's a great place to collaborate and innovate.",
    jobPosition: "Design Lead",
  },
  {
    id: 4,
    imageEndpoint: "/images/testimonial4.jpg",
    content:
      "I've learned more in my time here than I ever thought possible. It's an exciting place to push your boundaries.",
    jobPosition: "Research Scientist",
  },
];




const TestimonialPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Danke>
      <Slider {...settings}>
        {TestimonialData.map((item, index) => (
          <div key={index} className="each_testimonial">
            <p>{item.content}</p>

            <div>
            
              <img
                src="https://media.istockphoto.com/id/1417635888/photo/cheerful-mid-adult-woman-face-mature-model-looking-at-camera-and-smiling.webp?b=1&s=170667a&w=0&k=20&c=QNYoqHoInSF9q_1N8zJV_syM-KeglG8de06A1IFD6bw="
                alt=""
              />
              <h4>{item.jobPosition}</h4>
            </div>
          </div>
        ))}

        {/* <div className="each_testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            alias maxime magni repellendus ullam cum soluta voluptatem, sequi
            nobis velit vel quasi optio fuga sint sed molestiae ipsam, quaerat
            itaque.
          </p>

          <div>
            <img
              src="https://media.istockphoto.com/id/1417635888/photo/cheerful-mid-adult-woman-face-mature-model-looking-at-camera-and-smiling.webp?b=1&s=170667a&w=0&k=20&c=QNYoqHoInSF9q_1N8zJV_syM-KeglG8de06A1IFD6bw="
              alt=""
            />
            <h4>Product Designer</h4>
          </div>
        </div>
        <div className="each_testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            alias maxime magni repellendus ullam cum soluta voluptatem, sequi
            nobis velit vel quasi optio fuga sint sed molestiae ipsam, quaerat
            itaque.
          </p>

          <div>
            <img
              src="https://media.istockphoto.com/id/1417635888/photo/cheerful-mid-adult-woman-face-mature-model-looking-at-camera-and-smiling.webp?b=1&s=170667a&w=0&k=20&c=QNYoqHoInSF9q_1N8zJV_syM-KeglG8de06A1IFD6bw="
              alt=""
            />
            <h4>Product Designer</h4>
          </div>
        </div> */}
      </Slider>
    </Danke>
  );
};

export default TestimonialPage;

let Danke = styled.section`
//   max-width: 1200px;
  margin: 0 auto;
  .each_testimonial {
    background: red;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    margin: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;
