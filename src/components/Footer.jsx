import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

const Footer = () => {
  return (
    <div className="footer bg-light">
      <div className="container bg-light mt-3 py-5" style={{ width: "100vw" }}>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <p className="text-muted">
              P2E Pro NFT is a shared liquidity NFT market smart contract.
            </p>
            <div>
              <p>Language</p>
              <div className="dropdown" style={{ width: "200px" }}>
                <select className="form-select">
                  <option value="" disabled selected>
                    Select language
                  </option>
                  {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {" "}
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h2>Marketplace</h2>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Profile
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Marketplace
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Creators
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Activity
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Collections
            </a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h2>Company</h2>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Upload
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Connect wallet
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Our blog
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Item details
            </a>
            <a
              className="d-block text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              Contact us
            </a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h2>Join Newsletter</h2>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <div className="social-icons d-flex gap-4">
              <FaTwitter size={32} style={{ cursor: "pointer" }} />
              <FaInstagram size={32} style={{ cursor: "pointer" }} />
              <FaYoutube size={32} style={{ cursor: "pointer" }} />
              <FaGithub size={32} style={{ cursor: "pointer" }} />
              <FaDiscord size={32} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="container">
        <p className="text-center text-muted">
          © {new Date().getFullYear()}. Created with love for{" "}
          <a
            href="https://p2epl.io/"
            target="_blank"
            className="text-decoration-none"
          >
            P2E Pro NFT
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
