import React from "react";
import "./home.css";
import Logo from "../LOFOAOFaf.png";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <nav>
          <ul className="navbar">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#director">Directors</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </nav>
        <img src={Logo} alt="Company Logo" className="logo" />
        <div id="about">
          <p className="details">
            <strong>REMINE INDIA PRIVATE LIMITED</strong> is a
            <strong> UTTARAKHAND</strong> based PRIVATE ltd. Company Registered
            at dated 06-DEC-2022 on Ministry of Corporate Affairs(MCA), The
            Corporate Identification Number (CIN) of REMINE INDIA PRIVATE
            LIMITED is <strong>U37100UR2022PTC014948</strong> and registration
            number is{" "}
            <strong>
              U37100UR2022PTC014948 It has been classified as COMPANY LIMITED BY
              SHARES and is registered under Registrar of Companies UTTARAKHAND
              India.
            </strong>{" "}
            Authorized share capital of REMINE INDIA PRIVATE LIMITED is Rs.
            1000000 and its paid up capital is Rs. 1000000. It aspire to serve
            in RECYCLING activities across the India.
          </p>
          <p className="details">
            Its Annual General Meeting (AGM) was lastly conducted on and as per
            the records of Ministry of Corporate Affairs (MCA), its balance
            sheet was last filed on . The registered Email address of REMINE
            INDIA PRIVATE LIMITED is
            <strong> director@remine.in</strong> and its registered address is
            WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ UDHAM SINGH NAGAR UR
            262405 IN UTTARAKHAND UTTARAKHAND india 262405. The current status
            of REMINE INDIA PRIVATE LIMITED shows as an ACTIVE.
          </p>

          <h2>What we do</h2>
          <p className="details">
            Recycling of metal waste and scrap [ from rejected aluminum,
            utensil, containers and other used metallic items etc. Collection of
            metal waste and scrap for and other used metallic items etc.
            Collection of metal waste and scrap for recycling is included in
            51498.]
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
