import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          M. Bhuvaneswar
        </p>

        <AnimatedTitle
          title="Computer Science <b>E</b>ngineer <br /> Building Production-<b>R</b>eady Systems"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Computer science engineer with over 3 years of experience, delivering high-impact, production-ready systems across AI, full-stack development, and distributed architecture.</p>
          <p className="text-gray-500">
            Currently pursuing B.Tech in Computer Science & Engineering at Chennai Institute of Technology (2024-2028), while building scalable solutions that bridge engineering excellence with real-world impact.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="font-general text-sm font-semibold mb-2">Focus Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ AI & Machine Learning Systems</li>
                <li>→ Full-Stack Web Development</li>
                <li>→ Cloud Architecture & DevOps</li>
                <li>→ Data Structures & Algorithms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-general text-sm font-semibold mb-2">Education</h3>
              <p className="text-sm text-gray-600">
                <b>B.Tech Computer Science</b><br />
                Chennai Institute of Technology<br />
                2024 - 2028
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
