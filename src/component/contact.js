import React from "react";
import "./contact.css";

const Contact = () => {
  const url = `https://www.openstreetmap.org/export/embed.html?bbox=${
    79.675738 - 0.01
  },${29.051065 - 0.01},${79.675738 + 0.01},${
    29.051065 + 0.01
  }&layer=mapnik&marker=${encodeURIComponent("29.051065, 79.675738")}`;

  return (
    <div id="contact" className="container">
      <div class="form-input">
        <h3>
          <strong>Get in touch</strong>
        </h3>
        <form>
          <p class="full">
            <input type="text " name="first_name" placeholder="Name" required />
          </p>

          <p class="full">
            <input type="email" name="email" placeholder="Email" required />
          </p>
          <p class="full">
            <input
              type="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </p>
          <p class="full">
            <textarea
              name="message"
              placeholder="Type your message here"
              required
            ></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
      <div className="parent">
        <div className="c1">
          <div className="contacts">
            <label>Email : </label>
            <a href="mailto:director@remine.in" target="_blank">
              director@remine.in
            </a>
          </div>
          <div className="c2">
            <label>Phone no : </label>
            <a href="tel:+91 1234567890" target="_blank">
              +91 1234567890
            </a>
          </div>
        </div>
        <div>
          <label>Address:</label>
          <p>
            WARD NO. 3, SUPRIYA COLONY,
            <br />
            SITARGANJ SITARGANJ UDHAM SINGH NAGAR UR 262405 IN UTTARAKHAND
            <br />
            UTTARAKHAND india 262405.
          </p>
        </div>
        <div className="c3">
          <iframe
            title={`Map showing the location of the company`}
            allowTransparency="true"
            width="100%"
            height="300"
            loading="lazy"
            src={url}
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
