import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../src/assets/slide1.png"; // 이미지 경로를 실제 경로로 수정하세요.
import slide2 from "../../../src/assets/slide2.png"; // 이미지 경로를 실제 경로로 수정하세요.
import slide3 from "../../../src/assets/slide3.png"; // 이미지 경로를 실제 경로로 수정하세요.
//import slide4 from "../../../src/assets/slide4.png"; // 이미지 경로를 실제 경로로 수정하세요.
//import slide5 from "../../../src/assets/slide4.png"; // 이미지 경로를 실제 경로로 수정하세요.
import right_arrow from "../../../src/assets/slider_arrow.svg"; // 이미지 경로를 실제 경로로 수정하세요.

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

{
  /* <div>
  <Image src="/zxb.png" />
</div>; */
}

const SliderBox = styled.div`
  padding: 0px 150px 0px 150px;
  margin: 30px 0px 30px 0px;
`;

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

export const Slide = function MainCarousel(props) {
  const rotationAngle = 180; // 회전 각도

  const imageStyle = {
    transform: `rotate(${rotationAngle}deg)`, // 회전을 위한 스타일
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextTo>
        <img src={right_arrow} />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src={right_arrow} style={imageStyle} />
      </Pre>
    ),
  };

  return (
    <div className="SliderBox">
      <SliderBox>
        <StyledSlider {...settings}>
          <div>
            <Image src={slide1} />
          </div>
          <div>
            <Image src={slide2} />
          </div>
          <div>
            <Image src={slide3} />
          </div>
        </StyledSlider>
      </SliderBox>
    </div>
  );
};
export default Slide;
