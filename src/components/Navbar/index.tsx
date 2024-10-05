import "./Navbar.css";

export default function Navbar() {
  const redirectToWaitlist = () => {
    window.open("https://cipherzero.xyz/", "_blank");
  };

  return (
    <nav className="h-32 flex justify-between items-center">
      <img src="/images/logo.png" alt="logo" width={56} height={56} />
      <div id="navbar-actions">
        <div className="social-media-links hidden lg:block">
          <a href="https://twitter.com/" className="social-media-link">
            Discord
          </a>
          <a href="https://twitter.com/" className="social-media-link">
            Twitter
          </a>
          <a href="https://twitter.com/" className="social-media-link">
            Linkedin
          </a>
        </div>
        <button className="btn-small" onClick={redirectToWaitlist}>
          Join the Waitlist
        </button>
      </div>
    </nav>
  );
}
