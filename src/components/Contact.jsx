import AnimatedTitle from "./AnimatedTitle";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="decoration" />
  </div>
);

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:bhuvaneswar981@gmail.com",
      icon: <MdEmail className="text-2xl" />,
      label: "bhuvaneswar981@gmail.com"
    },
    {
      name: "Phone",
      href: "tel:+919361419835",
      icon: <FaPhone className="text-2xl" />,
      label: "+91 9361419835"
    },
    {
      name: "GitHub",
      href: "https://github.com/BHUVI-SHIP-IT",
      icon: <FaGithub className="text-2xl" />,
      label: "@BHUVI-SHIP-IT"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bhuvaneswar123/",
      icon: <FaLinkedin className="text-2xl" />,
      label: "@bhuvaneswar123"
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/bhuvaneswar_123/",
      icon: <SiLeetcode className="text-2xl" />,
      label: "@bhuvaneswar_123"
    }
  ];

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Let's Connect
          </p>

          <AnimatedTitle
            title="Let's build <br /> something <b>e</b>xceptional"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full px-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-violet-300/10 hover:bg-violet-300/20 transition-all duration-300 p-4 rounded-lg border border-violet-300/20 group"
              >
                <span className="text-violet-50 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <div className="text-left">
                  <p className="font-general text-xs text-gray-400">{link.name}</p>
                  <p className="font-circular-web text-sm text-blue-50">{link.label}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1yge7B-Y6TYBRdxdfIftpN48EBZSD0LPM/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-general text-sm uppercase rounded-full transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
