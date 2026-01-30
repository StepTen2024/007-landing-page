export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold">
              <span className="gold-text">007</span>
              <span className="text-white/60 ml-1 text-xs font-normal tracking-widest uppercase">
                Real Estate Agent
              </span>
            </span>
            <p className="text-white/30 text-xs">
              Built by{" "}
              <a
                href="https://stepten.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#c5a55a] transition-colors"
              >
                StepTen.io
              </a>{" "}
              — AI Solutions for Business
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href="#features"
              className="hover:text-[#c5a55a] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-[#c5a55a] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-[#c5a55a] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-[#c5a55a] transition-colors"
            >
              Contact
            </a>
            <a href="#" className="hover:text-[#c5a55a] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#c5a55a] transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} 007 Real Estate Agent. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
