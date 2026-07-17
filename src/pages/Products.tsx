import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>

      <nav className="navbar">

        <div className="logo">
          <img src="/logo.png" alt="Luminaard" />
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>

      </nav>

      <section className="hero-small">

        <h1>Our Products</h1>

        <p>
          High-performance transformer solutions engineered for
          renewable energy and industrial applications.
        </p>

      </section>

      <section className="product-section">

        <div className="product-card">

          <img
            src="/inverter.jpeg"
            alt="Inverter Duty Transformer"
          />

          <div>

            <h2>Inverter Duty Transformers</h2>

            <p>
              Luminaard Inverter Duty Transformers are specially designed
              for solar power plants and renewable energy applications.
              They provide excellent efficiency, voltage stability and
              long operational life under demanding conditions.
            </p>

            <h3>Applications</h3>

            <ul>

              <li>Solar Power Plants</li>

              <li>Renewable Energy Projects</li>

              <li>Industrial Inverters</li>

              <li>Utility Scale Installations</li>

            </ul>

          </div>

        </div>

      </section>

      <section className="product-section">

        <div className="product-card reverse">

          <div>

            <h2>Power Transformers</h2>

            <p>
              Our Power Transformers are manufactured using high-quality
              materials to deliver dependable power transmission with
              maximum efficiency and minimal losses.
            </p>

            <h3>Applications</h3>

            <ul>

              <li>Power Distribution</li>

              <li>Manufacturing Industries</li>

              <li>Commercial Infrastructure</li>

              <li>Utility Networks</li>

            </ul>

          </div>

          <img
            src="/transformer.jpeg"
            alt="Power Transformer"
          />

        </div>

      </section>

      <section className="cta">

        <h2>Need a Custom Transformer Solution?</h2>

        <p>
          Contact our engineering team for technical consultation and quotations.
        </p>

        <Link to="/#contact">
          Request a Quote
        </Link>

      </section>

      <footer>

        <h3>LUMINAARD</h3>

        <p>
          Plot No. A14, Industrial Focal Point,
          Chanalon, Kurali,
          SAS Nagar (Mohali), Punjab - 140103
        </p>

        <p>info@luminaard.com</p>

        <p>© 2026 Luminaard</p>

      </footer>

    </>
  );
}