// Frameworks & Packages
import styled from "styled-components";

// Files
import womenImage from "../images/illustration-woman-online-desktop.svg";
import boxImage from "../images/illustration-box-desktop.svg";

// Styles
const Parent = styled.article`
  .image {
    position: relative;

    .women-image {
      max-width: 100%;

      @media screen and (min-width: 1024px) {
        transform: scale(1.05);
      }
    }

    .box-image {
      position: absolute;
      top: 130px;
      left: -40px;
      transform: scale(1);
    }

    @media screen and (max-width: 1024px) {
      .box-image {
        top: 40px;
        left: -50px;
        transform: scale(0.6);
      }
    }

    @media screen and (max-width: 768px) {
      top: -215px;

      .box-image {
        top: 130px;
        left: -25px;
      }
    }

    @media screen and (max-width: 425px) {
      top: -130px;
      width: 75%;
      left: 50%;
      transform: translateX(-50%);

      .box-image {
        top: 45px;
        left: -55px;
        transform: scale(0.6);
      }
    }

    @media screen and (max-width: 375px) {
      top: -110px;
      width: 75%;
      left: 50%;
      transform: translateX(-50%);

      .box-image {
        top: 25px;
        left: -65px;
        transform: scale(0.55);
      }
    }

    @media screen and (max-width: 320px) {
      top: -95px;
      width: 75%;
      left: 50%;
      transform: translateX(-50%);

      .box-image {
        top: 5px;
        left: -70px;
        transform: scale(0.5);
      }
    }
  }
`;

// JSX
const Photo = () => {
  return (
    <Parent>
      <div className="container">
        <div className="image">
          <img
            src={womenImage}
            className="women-image"
            alt="Icon Women Scrolling on Computer Screen"
          />
          <img src={boxImage} className="box-image" alt="Box Icon" />
        </div>
      </div>
    </Parent>
  );
};

export default Photo;
