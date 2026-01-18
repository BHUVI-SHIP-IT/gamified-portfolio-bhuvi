import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ company, role, duration, location, achievements, isFreelance }) => {
    return (
        <div className="experience-card relative pl-8 pb-12 border-l-2 border-blue-50/30 last:pb-0">
            {/* Timeline dot */}
            <div className="timeline-dot absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-4 border-black"></div>

            <div className="bg-violet-300/10 border border-violet-300/20 rounded-lg p-6 hover:border-violet-300/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-general font-semibold text-blue-50 mb-1">
                            {role}
                        </h3>
                        <p className="text-violet-300 font-circular-web flex items-center gap-2">
                            <FaBriefcase className="text-sm" />
                            {company}
                            {isFreelance && <span className="text-xs bg-yellow-300/20 text-yellow-300 px-2 py-1 rounded-full ml-2">Freelance</span>}
                        </p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <FaCalendar className="text-xs" />
                            <span>{duration}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>

                <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start gap-2 font-circular-web">
                            <span className="text-violet-300 mt-1">→</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            company: "Marcilo Tech",
            role: "Software Developer Intern",
            duration: "May 2025 – Jun 2025",
            location: "Bangalore, India",
            isFreelance: false,
            achievements: [
                "Developed a cloud-based Resume Builder app using React, Node.js, and Firebase.",
                "Optimized UI components improving usability and performance by 30%.",
                "Automated PDF generation workflows and improved data handling.",
                "Collaborated with backend teams to ensure seamless API integration."
            ]
        },
        {
            company: "Kurinji Resorts Hotel Management System",
            role: "Freelance Web Developer",
            duration: "Dec 2024 – Feb 2025",
            location: "Chennai, India",
            isFreelance: true,
            achievements: [
                "Developed a full-stack hotel management platform with Django and PostgreSQL.",
                "Integrated booking, billing automation, and live analytics dashboards.",
                "Deployed the system on Vercel, improving booking efficiency by 40%.",
                "Implemented real-time notification system for booking confirmations."
            ]
        }
    ];

    useGSAP(() => {
        // Video background parallax
        gsap.to("#experience-video", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: "#experience",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Animate decorative images
        gsap.from(".experience-float-img", {
            opacity: 0,
            scale: 0.8,
            x: (index) => (index === 0 ? 100 : -100),
            duration: 1.2,
            stagger: 0.4,
            scrollTrigger: {
                trigger: "#experience",
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate timeline dots
        gsap.from(".timeline-dot", {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".experience-timeline",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate experience cards
        gsap.from(".experience-card", {
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".experience-timeline",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return (
        <section id="experience" className="min-h-screen w-screen bg-black py-20 relative overflow-hidden">
            {/* Background Image */}
            <div id="experience-video" className="absolute inset-0 opacity-15">
                <img
                    src="/img/abstract-tech-bg.png"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Decorative Images */}
            <div className="experience-float-img absolute top-10 right-20 w-56 h-56 opacity-10 hidden lg:block">
                <img
                    src="/img/gallery-4.webp"
                    alt="decoration"
                    className="w-full h-full object-contain rounded-lg transform rotate-6 hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="experience-float-img absolute bottom-32 left-20 w-40 h-40 opacity-10 hidden lg:block">
                <img
                    src="/img/gallery-5.webp"
                    alt="decoration"
                    className="w-full h-full object-contain rounded-lg transform -rotate-6 hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                <div className="mb-16">
                    <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
                        Professional Journey
                    </p>
                    <AnimatedTitle
                        title="Work <b>E</b>xperience <br /> & Impact"
                        containerClass="mt-5 !text-blue-50"
                    />
                    <p className="mt-6 max-w-2xl text-gray-400 font-circular-web">
                        Hands-on experience in building production-ready applications, optimizing performance,
                        and delivering measurable business impact through software solutions.
                    </p>
                </div>

                <div className="experience-timeline max-w-4xl">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 p-8 bg-gradient-to-r from-violet-300/10 to-blue-50/10 border border-violet-300/20 rounded-lg text-center">
                    <h3 className="text-2xl font-general font-semibold text-blue-50 mb-3">
                        Open to Opportunities
                    </h3>
                    <p className="text-gray-400 font-circular-web mb-6 max-w-2xl mx-auto">
                        Currently seeking full-time software engineering roles and exciting freelance projects.
                        Let's build something amazing together!
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-general text-sm uppercase rounded-full transition-all duration-300 hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
