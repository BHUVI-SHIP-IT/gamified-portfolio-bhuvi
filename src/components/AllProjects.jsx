import { BentoTilt } from "./Features";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";

const ProjectCard = ({ title, description, tech, github, live, category }) => {
    const categoryColors = {
        ai: "from-purple-400 to-pink-500",
        web: "from-blue-400 to-cyan-500",
        fullstack: "from-green-400 to-teal-500",
    };

    return (
        <BentoTilt className="relative border border-violet-300/20 rounded-lg overflow-hidden group hover:border-violet-300/50 transition-all duration-300">
            <div className="bg-black/90 p-6 h-full flex flex-col">
                <div className={`w-16 h-1 mb-4 bg-gradient-to-r ${categoryColors[category]} rounded`}></div>

                <h3 className="text-xl font-general font-semibold text-blue-50 mb-3">
                    {title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-grow font-circular-web">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 bg-violet-300/10 text-violet-300 rounded-full font-circular-web"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-violet-300/10">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-50 hover:text-violet-300 transition-colors"
                        >
                            <FaGithub /> Code
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-50 hover:text-violet-300 transition-colors"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                </div>
            </div>
        </BentoTilt>
    );
};

const AllProjects = () => {
    const projects = [
        {
            title: "Poll Management System",
            description: "Built a secure online voting system with OTP authentication and real-time dashboards for transparent poll management.",
            tech: ["Django", "PostgreSQL", "Bootstrap", "OTP Auth"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "fullstack"
        },
        {
            title: "Smart Sport Strategy System",
            description: "Created an AI tool predicting player performance and optimizing team strategy using machine learning algorithms.",
            tech: ["Python", "TensorFlow", "Flask", "Streamlit"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        },
        {
            title: "Resume Creator Web App",
            description: "Built a resume generator with live preview, PDF export, and customizable templates for professional document creation.",
            tech: ["React.js", "Node.js", "Firebase", "PDF Generation"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "web"
        },
        {
            title: "Portfolio Website",
            description: "Designed and deployed a responsive personal portfolio showcasing projects with modern design and smooth animations.",
            tech: ["Next.js", "TailwindCSS", "Vercel", "Framer Motion"],
            github: "https://github.com/BHUVI-SHIP-IT",
            live: "https://bhuvi-portfolio-2026.vercel.app/",
            category: "web"
        },
        {
            title: "AI Emotion Detection System",
            description: "Built a CNN-based emotion recognition model with 90% real-time accuracy using computer vision and deep learning.",
            tech: ["Python", "OpenCV", "TensorFlow", "CNN"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        },
        {
            title: "Image Classification System",
            description: "Fine-tuned ResNet50 achieving 95% accuracy and improved inference time by 20% using transfer learning techniques.",
            tech: ["Python", "Keras", "ResNet", "Transfer Learning"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        },
        {
            title: "Grow Smart AI",
            description: "AI-Powered Crop Intelligence Platform with computer vision for crop disease detection, serving 500+ farmers across 12 regions.",
            tech: ["Python", "TensorFlow", "Computer Vision", "Flask"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        },
        {
            title: "A.R.J.U.N.A Learning Platform",
            description: "NLP-powered adaptive learning platform with real-time feedback improving student outcomes by 40%.",
            tech: ["Python", "NLP", "Django", "PostgreSQL"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        },
        {
            title: "PrepWise Interview Platform",
            description: "Comprehensive coding practice and mock interview platform with progress analytics, achieving 78% success rate.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "fullstack"
        },
        {
            title: "Continuous Chaos Prevention",
            description: "AI-Driven Production Debugging Tool using distributed tracing and ML, reducing debugging time by 80%.",
            tech: ["Python", "ML", "Distributed Tracing", "Flask"],
            github: "https://github.com/BHUVI-SHIP-IT",
            category: "ai"
        }
    ];

    return (
        <section id="all-projects" className="min-h-screen w-screen bg-black py-20">
            <div className="container mx-auto px-4 md:px-10">
                <div className="mb-16">
                    <p className="font-general text-sm uppercase text-blue-50/60 mb-4">
                        Complete Portfolio
                    </p>
                    <AnimatedTitle
                        title="All <b>P</b>rojects <br /> & Solutions"
                        containerClass="mt-5 !text-blue-50"
                    />
                    <p className="mt-6 max-w-2xl text-gray-400 font-circular-web">
                        A comprehensive showcase of 10+ production-ready projects spanning AI/ML,
                        full-stack development, and distributed systems—each solving real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* Project Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-violet-300/5 rounded-lg border border-violet-300/10">
                    <div className="text-center">
                        <div className="text-4xl font-black text-blue-50 mb-2">10+</div>
                        <div className="text-sm text-gray-400 font-circular-web">Projects Built</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-blue-50 mb-2">50K+</div>
                        <div className="text-sm text-gray-400 font-circular-web">Users Impacted</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-blue-50 mb-2">15+</div>
                        <div className="text-sm text-gray-400 font-circular-web">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-blue-50 mb-2">95%</div>
                        <div className="text-sm text-gray-400 font-circular-web">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
