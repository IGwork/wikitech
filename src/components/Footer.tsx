import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* New leftmost column */}
        <div className="footer-column">
          <h3>WikiTech Muj</h3>
          <p className="small-text">
            Dedicated to fostering a community of technology enthusiasts
          </p>
        </div>

        {/* Existing columns */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><button>Home</button></li>
            <li><button>About Us</button></li>
            <li><button>Explore</button></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><button>Resources</button></li>
            <li><button>FAQs</button></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><button>Contact Us</button></li>
            <li><button>Join WikiClub</button></li>
          </ul>
        </div>

      </div>

      {/* Horizontal line */}
      <hr className="footer-separator" />

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 WikiTech Club MUJ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
