import React from "react";
import styled from "styled-components";
import cafeExteriorImg from "../images/cafe-exterior.jpg";
import { StaticImage } from "gatsby-plugin-image";

const Info = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../images/cafe-exterior.jpg"
        layout="fullWidth"
        placeholder="tracedSVG"
        className="bg"
        alt="dog-moal"
      />
      <div className="partsGrid">
        <div className="section-title">
          <h2>INFO</h2>
          <div className="underline"></div>
        </div>
        <div className="grid12">
          <div className="hours">
            <h4>営業時間</h4>
            <dl>
              <dt>月～金</dt>
              <dd>7:00 am - 9:00 pm</dd>
              <dt>土～日</dt>
              <dd>9:00 am - 8:00 pm</dd>
            </dl>
          </div>
          <div className="info-address">
            <h4>店舗情報</h4>
            <p>
              〒100-1701
              <br />
              東京都青ヶ島村
              <br />
              0997-1234-5678
              <br />
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4457899.205377941!2d140.047902!3d31.133560000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x606ab9f47fa9b07d%3A0xd7cc98551e98903f!2z5pel5pys44CB44CSMTAwLTE3MDEg5p2x5Lqs6YO96Z2S44O25bO25p2R!5e1!3m2!1sja!2sus!4v1638258355239!5m2!1sja!2sus"
            allowfullscreen=""
            loading="lazy"
            className="map"
          ></iframe>

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 70px;
  position: relative;
  height: 750px;
  .bg {
    height: 100%;
  }
  .partsGrid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 90px;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    color: var(--clr-white);
    display: grid;
    place-content: center;
    place-items: center;
    .section-title {
      text-align: center;
      .underline {
        margin: auto;
        color: var(--clr-white);
      }
    }
    .grid12 {
      row-gap: 30px;
      h4 {
        font-family: var(--subtitle-font);
        font-size: 18px;
      }
      dl {
        font-size: 13px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 20px;
        margin-left: 30px;
      }
      p {
        font-size: 13px;
        margin-left: 30px;
      }
      .hours {
        h4 {
          margin-bottom: 17px;
        }
      }
      .info-address {
        h4 {
          margin-bottom: 26px;
        }
      }
      .map {
        width: 300px;
        height: 270px;
        border: 0;
      }
      @media (min-width: 768px) {
        .hours,
        .info-address {
          grid-column: 2/5;
        }
        .map {
          width: 446px;
          height: 370px;
          grid-row: 1/3;
          grid-column: span 5 / -2;
        }
      }
    }
  }
`;

export default Info;
