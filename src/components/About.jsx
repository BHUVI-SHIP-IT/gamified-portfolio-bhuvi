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
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />

          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

          {/* Text content inside the image */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-full max-w-4xl px-10 text-center">
              <p className="text-white text-lg font-circular-web font-bold mb-4" style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1)' }}>
                Computer science engineer with over 3 years of experience, delivering high-impact, production-ready systems across AI, full-stack development, and distributed architecture.
              </p>
              <p className="text-blue-50 font-circular-web font-semibold mb-10" style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1)' }}>
                Currently pursuing B.Tech in Computer Science & Engineering at Chennai Institute of Technology (2024-2028), while building scalable solutions that bridge engineering excellence with real-world impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-black/80 backdrop-blur-xl p-6 rounded-lg border-2 border-yellow-300/40 shadow-2xl">
                  <h3 className="font-general text-lg font-bold mb-3 text-yellow-300" style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>Focus Areas</h3>
                  <ul className="text-sm text-white space-y-2 text-left font-semibold">
                    <li style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>→ AI & Machine Learning Systems</li>
                    <li style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>→ Full-Stack Web Development</li>
                    <li style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>→ Cloud Architecture & DevOps</li>
                    <li style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>→ Data Structures & Algorithms</li>
                  </ul>
                </div>
                <div className="bg-black/80 backdrop-blur-xl p-6 rounded-lg border-2 border-blue-300/40 shadow-2xl">
                  <h3 className="font-general text-lg font-bold mb-3 text-yellow-300" style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>Education</h3>
                  <p className="text-sm text-white text-left font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    <b className="text-blue-200 text-base">B.Tech Computer Science</b><br />
                    Chennai Institute of Technology<br />
                    2024 - 2028
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
