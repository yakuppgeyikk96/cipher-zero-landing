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
          <a
            href="https://discord.gg/8mqFyuky"
            className="social-media-link"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://x.com/cipherzerop"
            className="social-media-link"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://t.me/+l6MZkw8VwiQ2NmZk"
            className="social-media-link"
            target="_blank"
          >
            Telegram
          </a>
        </div>
        <button className="btn-small" onClick={redirectToWaitlist}>
          Join the Waitlist
        </button>
      </div>
    </nav>
  );
}
