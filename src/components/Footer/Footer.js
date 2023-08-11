import React from "react";

function Footer() {
  return (
    <div>
      <section id="contact" className="contact ">
        <div className="text_tit">
          <h3>
            <span>c</span>ontact us{" "}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>

        <div className="contactform ">
          <h3>Send Message</h3>
          <div className="inputbox">
            <input type="text" placeholder="enter your name" />
          </div>
          <div className="inputbox">
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputbox">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="inputbox">
            <input type="submit" value="send" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
