import Work1 from "../../assets/native-jobs.png";
import Work2 from "../../assets/cryptoverse.png";
import Work3 from "../../assets/travel.png";
import Work4 from "../../assets/blog-1.svg";

const Menu = [
	{
		id: 1,
		image: Work1,
		title: "YC-Interior",
		category: ["Frontend", "Backend", "Full Stack"],
		description: "Premium full-stack platform for interior design & architecture. Features cinematic animations, dynamic landing pages, smooth scrolling, and staggered text animations. Demonstrates expertise in crafting luxury digital experiences with scalable API-driven architecture.",
		date: "Ongoing",
		technologies: "Angular, Spring Boot, MySQL, REST API, Lenis, Animation",
		repositoryUrl: "https://github.com/salman-nstu/YC-Interior"
	},
	{
		id: 2,
		image: Work2,
		title: "MonProva - Mental Healthcare Platform",
		category: ["Frontend", "Backend", "Full Stack"],
		description: "End-to-end healthcare ecosystem connecting patients, doctors & admins. Implemented clinically-validated assessments (PHQ-9, GAD-7, PSS-10), appointment booking, digital prescriptions, and real-time notifications. Demonstrates secure full-stack development with JWT auth & cloud integration.",
		date: "Nov 2025 – Jan 2026",
		technologies: "React 18, Node.js, Express.js, MongoDB Atlas, Firebase, JWT, Tailwind, Cloudinary",
		repositoryUrl: "https://github.com/salman-nstu/monprova"
	},
	{
		id: 3,
		image: Work3,
		title: "SmartHeap - Custom Memory Allocator",
		category: ["Backend", "Systems"],
		description: "Production-grade memory management system implementing malloc/free/calloc/realloc. Features advanced techniques: block splitting, coalescing, arena-based allocation, fragmentation analysis, corruption detection. Demonstrates deep systems programming knowledge with thread-safe concurrent access.",
		date: "May 2025 – Aug 2025",
		technologies: "C, Windows API, VirtualAlloc, Memory Management, CRITICAL_SECTION, Concurrency",
		repositoryUrl: "https://github.com/salman-nstu/SmartHeap"
	},
	{
		id: 4,
		image: Work4,
		title: "LectureLens - AI Lecture Summarizer",
		category: ["Backend", "Full Stack", "AI"],
		description: "AI-powered platform transcribing lectures from microphone, files & YouTube. Integrates OpenAI Whisper for speech-to-text and Facebook BART for abstractive summarization. Multi-format export (PDF/DOCX/JSON). Showcases modern AI/ML integration with responsive architecture.",
		date: "Jan 2025 – Mar 2025",
		technologies: "Python, Flask, OpenAI Whisper, Hugging Face BART, PyTorch, JavaScript",
		repositoryUrl: "https://github.com/salman-nstu/LectureLens"
	},
	{
		id: 5,
		image: Work1,
		title: "ProCoordinator - Project Scheduling Tool",
		category: ["Java", "Backend", "Desktop"],
		description: "Desktop application implementing Critical Path Method algorithms for complex project management. Calculates ES/EF/LS/LF, slack time, and critical paths. Features color-coded visualization, automated exporting, and dependency management. Demonstrates algorithmic thinking & OOP design.",
		date: "Mar 2024 – Jun 2024",
		technologies: "Java, Swing GUI, OOP, Algorithms, Data Structures, Project Scheduling",
		repositoryUrl: "https://github.com/salman-nstu/ProCoordinator"
	},
	{
		id: 6,
		image: Work2,
		title: "SecurePass - Password Manager",
		category: ["Java", "Backend", "Security"],
		description: "Cryptographically secure password management application with multi-layered encryption. Implements AES encryption for data protection and SHA-based hashing for credentials. Demonstrates security best practices and real-world cryptographic implementation.",
		date: "2024",
		technologies: "Java, AES Encryption, SHA Hashing, MySQL, Cryptography",
		repositoryUrl: "https://github.com/salman-nstu"
	},
	{
		id: 7,
		image: Work3,
		title: "SmartFarm - IoT Agriculture Platform",
		category: ["IoT", "Backend", "Embedded"],
		description: "IoT ecosystem for precision agriculture monitoring environmental conditions, crop health, and soil metrics. Features sensor integration, real-time data processing, and automated alerts. Demonstrates IoT system design, embedded programming, and edge computing concepts.",
		date: "2024",
		technologies: "IoT, Embedded Systems, Sensors, MQTT, Web Dashboard, Real-time Processing",
		repositoryUrl: "https://github.com/salman-nstu"
	},
	{
		id: 8,
		image: Work4,
		title: "FinanceHub - Banking Management System",
		category: ["Java", "Backend"],
		description: "Comprehensive banking application with secure authentication, multi-account management, and transaction processing. Implements login/signup, transaction handling, and file-based verification. Demonstrates backend system design with robust financial data management.",
		date: "2024",
		technologies: "Java, File Handling, OOP, MySQL, Authentication, Transaction Processing",
		repositoryUrl: "https://github.com/salman-nstu"
	}
];

export default Menu;
