export default function HeroSection() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-14 justify-center items-center lg:items-start">
        <div className="flex gap-6">
          <div className="border border-primary p-4 rounded-2xl cursor-pointer">
            <img src="/images/solana.png" alt="solana" />
          </div>
          <div className="border border-[#252525] p-4 rounded-2xl cursor-pointer">
            <img src="/images/file.png" alt="solana" />
          </div>
          <div className="border border-[#252525] p-4 rounded-2xl cursor-pointer">
            <img src="/images/clock.png" alt="solana" />
          </div>
          <div className="border border-[#252525] p-4 rounded-2xl cursor-pointer">
            <img src="/images/send.png" alt="solana" />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center lg:items-start">
          <div className="flex flex-col gap-6 text-center lg:text-start">
            <h1 className="text-primary-foreground font-semibold text-5xl">
              P2P Data Transfer
            </h1>
            <p className="font-normal text-2xl text-disabled">
              Secure and direct peer-to-peer data transfers with no
              intermediaries, ensuring total control over your information.
            </p>
          </div>
          <button className="btn-large mt-8">Start now</button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:hidden">
          <a
            href="https://discord.gg/8mqFyuky"
            className="social-media-link border border-slate-800 w-24 flex justify-center items-center py-2 rounded-lg"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://t.me/+l6MZkw8VwiQ2NmZk"
            className="social-media-link border border-slate-800 w-24 flex justify-center items-center py-2 rounded-lg"
            target="_blank"
          >
            Telegram
          </a>
          <a
            href="https://x.com/cipherzerop"
            className="social-media-link border border-slate-800 w-24 flex justify-center items-center py-2 rounded-lg"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/company/cipher-zero-protocol/about/"
            className="social-media-link border border-slate-800 w-24 flex justify-center items-center py-2 rounded-lg"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
      <img
        alt="hero-img"
        src="/images/hero.png"
        className="hidden w-1/2 lg:block"
      />
    </section>
  );
}
