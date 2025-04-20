export default function ContactSection() {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <div className="rightcontact">
            <form action="https://formspree.io/f/mqaprrvd" method="POST">
              <input name="username" type="text" placeholder="Name" />
              <input name="Email" type="email" placeholder="Email" />
              <textarea name="message" id="textarea" placeholder="Message me"></textarea>
              <input type="submit" id="btn" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    );
  }