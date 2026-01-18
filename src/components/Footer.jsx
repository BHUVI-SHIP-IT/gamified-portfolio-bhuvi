const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © 2026 M. BHUVANESWAR. ALL RIGHTS RESERVED.
        </p>

        <p className="text-center text-xs font-light">
          BUILT WITH REACT • VITE • GSAP • TAILWIND CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
