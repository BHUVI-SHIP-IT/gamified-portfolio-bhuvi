import { useState } from "react";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AchievementCard = ({ icon, title, description, category }) => {
    const [isHovered, setIsHovered] = useState(false);

    const categoryColors = {
        hackathon: "from-yellow-400 to-orange-500",
        competitive: "from-blue-400 to-purple-500",
        certification: "from-green-400 to-teal-500",
        community: "from-pink-400 to-rose-500",
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
            <div className="relative bg-black border border-violet-300/20 rounded-lg p-6 h-full hover:border-violet-300/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start gap-4">
                    <div className={`text-4xl bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                        {icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-general text-lg font-semibold text-blue-50 mb-2">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy />,
            title: "LeetCode Rating 1705",
            description: "Solved 500+ competitive programming problems across various difficulty levels, demonstrating strong algorithmic and problem-solving skills.",
            category: "competitive"
        },
        {
            icon: <FaMedal />,
            title: "Winner – Hackfinity Hackathon 2025",
            description: "Best Innovative Solution award for developing a cutting-edge AI-powered application that solved real-world problems.",
            category: "hackathon"
        },
        {
            icon: <FaCertificate />,
            title: "AWS Cloud Practitioner",
            description: "Certified in AWS Cloud fundamentals, demonstrating proficiency in cloud architecture, security, and deployment strategies.",
            category: "certification"
        },
        {
            icon: <FaCertificate />,
            title: "Amazon Bedrock Engineering",
            description: "Completed advanced training in Amazon Bedrock for building generative AI applications and foundation model integration.",
            category: "certification"
        },
        {
            icon: <FaAward />,
            title: "National Hackathon Participant",
            description: "Actively participated in multiple national-level hackathons and tech challenges, collaborating with diverse teams.",
            category: "hackathon"
        },
        {
            icon: <FaAward />,
            title: "Tech Community Leader",
            description: "Conducted hands-on sessions on AI, Python, and Web Development. Organized and mentored inter-department hackathons.",
            category: "community"
        }
    ];

    useGSAP(() => {
        // Parallax effect for background
        gsap.to("#achievements-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: "#achievements",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        // Animate floating decorative images
        gsap.from(".achievement-float-img", {
            opacity: 0,
            scale: 0.5,
            rotation: 45,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#achievements",
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate achievement cards
        gsap.from(".achievement-card", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".achievement-grid",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return (
        <section id="achievements" className="min-h-screen w-screen bg-black py-20 relative overflow-hidden">
            {/* Background Image */}
            <div id="achievements-bg" className="absolute inset-0 opacity-[0.15]">
                <img
                    src="/img/dramatic-tech-bg.png"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating Decorative Images */}
            <div className="achievement-float-img absolute top-20 right-10 w-64 h-64 opacity-20 hidden lg:block">
                <img
                    src="/img/gallery-1.webp"
                    alt="decoration"
                    className="w-full h-full object-contain rounded-lg transform rotate-12 hover:rotate-0 transition-transform duration-500"
                />
            </div>

            <div className="achievement-float-img absolute bottom-20 left-10 w-48 h-48 opacity-20 hidden lg:block">
                <img
                    src="/img/gallery-3.webp"
                    alt="decoration"
                    className="w-full h-full object-contain rounded-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                />
            </div>

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                <div className="mb-16 text-center">
                    <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
                        Achievements & Recognition
                    </p>
                    <AnimatedTitle
                        title="Milestones <b>&</b> <br /> Accomplishments"
                        containerClass="mt-5 !text-blue-50"
                    />
                    <p className="mt-6 max-w-2xl mx-auto text-gray-400 font-circular-web">
                        Recognized for excellence in competitive programming, hackathons, certifications, and community contributions.
                    </p>
                </div>

                <div className="achievement-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <AchievementCard {...achievement} />
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-5xl font-black text-yellow-300 mb-2" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)' }}>500+</div>
                        <div className="text-sm text-white font-circular-web font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>LeetCode Problems</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-black text-yellow-300 mb-2" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)' }}>1705</div>
                        <div className="text-sm text-white font-circular-web font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Max Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-black text-yellow-300 mb-2" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)' }}>2+</div>
                        <div className="text-sm text-white font-circular-web font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>AWS Certifications</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-black text-yellow-300 mb-2" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)' }}>10+</div>
                        <div className="text-sm text-white font-circular-web font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Hackathons</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
