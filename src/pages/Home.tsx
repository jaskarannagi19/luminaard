import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.jpeg" alt="Luminaard" />
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="overlay">
          <h1>Powering the Future with Reliable Transformer Solutions</h1>

          <p>
            Manufacturer of Inverter Duty Transformers and Power Transformers
            for Industrial and Renewable Energy Applications.
          </p>

          <div className="buttons">
            <Link to="#contact" className="btn-primary">Get Quote</Link>
            <Link to="/products" className="btn-secondary">Explore Products</Link>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="container">

          <div className="text">
            <h2>About Luminaard</h2>

            <p>
              Luminaard manufactures high-quality transformer solutions for
              industrial, renewable energy, and utility applications.
              We are committed to engineering excellence, reliability,
              and customer satisfaction.
            </p>
          </div>

          <div className="image">
            <img src="/logo.jpeg" alt="Luminaard Logo" />
          </div>

        </div>
      </section>

      <section className="products">

        <h2>Our Products</h2>

        <div className="cards">

          <div className="card">
            <img src="/inverter.jpeg" alt="" />

            <h3>Inverter Duty Transformers</h3>

            <p>
              Designed for Solar Power Plants and Renewable Energy Projects.
            </p>

            <Link to="/products">Learn More</Link>
          </div>

          <div className="card">
            <img src="/transformer.jpeg" alt="" />

            <h3>Power Transformers</h3>

            <p>
              Reliable transformers for industrial and utility power
              distribution.
            </p>

            <Link to="/products">Learn More</Link>
          </div>

        </div>

      </section>

<section className="why">

<h2>Why Choose Luminaard?</h2>

<div className="why-grid">

<div className="why-item">
✓ High Quality Manufacturing
</div>

<div className="why-item">
✓ Advanced Technology
</div>

<div className="why-item">
✓ Custom Engineering
</div>

<div className="why-item">
✓ Reliable Performance
</div>

<div className="why-item">
✓ Timely Delivery
</div>

<div className="why-item">
✓ After Sales Support
</div>

</div>

</section>

      <section id="contact" className="contact">

        <h2>Request a Quote</h2>

        <form>

          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="text"
            placeholder="Phone"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <textarea
            placeholder="Message"
          ></textarea>

          <button>Send Enquiry</button>

        </form>

      </section>

      <footer>

        <h3>LUMINAARD</h3>

        <p>
          Plot No. A14, Industrial Focal Point,
          Chanalon, Kurali,
          Distt SAS Nagar (Mohali),
          Punjab - 140103
        </p>

        <p>Email : info@luminaard.com</p>

        <p>© 2026 Luminaard</p>

      </footer>

    </>
  );
}