<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Md Jibran - Portfolio</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Three.js CDN for 3D background -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d1117; /* Dark background for a tech/vfx feel */
            color: #e6edf3; /* Light text color */
            overflow-x: hidden; /* Prevent horizontal scroll */
        }
        /* Custom animation for fade-in effect */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        /* Custom animation for subtle background glow */
        @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
            50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
            100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
        }
        .glow-animation {
            animation: glow 3s infinite alternate;
        }
        /* Custom animation for text typing effect */
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #00ffff; }
        }
        .typewriter h1 {
            overflow: hidden; /* Ensures the content is not revealed until the animation */
            border-right: .15em solid #00ffff; /* The typwriter cursor */
            white-space: nowrap; /* Keeps the content on a single line */
            margin: 0 auto; /* Gives that scrolling effect as the typing happens */
            letter-spacing: .05em; /* Adjust as needed */
            animation:
                typing 3.5s steps(40, end),
                blink-caret .75s step-end infinite;
        }
        /* Gradient text for headings */
        .gradient-text {
            background: linear-gradient(90deg, #00ffff, #8a2be2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Three.js Canvas Styling */
        #bg-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1; /* Ensures it stays behind content */
            opacity: 0.3; /* Subtle background */
        }

        /* For 3D hover effects on cards */
        .card-3d-hover {
            perspective: 1000px; /* Establishes a 3D context */
        }
        .card-3d-inner {
            transform-style: preserve-3d; /* Ensures children are positioned in 3D space */
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .card-3d-hover:hover .card-3d-inner {
            transform: scale(1.05) rotateX(5deg) rotateY(5deg); /* Subtle 3D tilt on hover */
            box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3); /* Enhanced shadow on hover */
        }
    </style>
</head>
<body class="flex flex-col min-h-screen">

    <!-- Three.js Background Canvas -->
    <canvas id="bg-canvas"></canvas>

    <!-- Header Section -->
    <header class="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-700 shadow-lg relative z-10">
        <nav class="flex items-center justify-between max-w-7xl mx-auto">
            <a href="#" class="text-3xl font-bold gradient-text rounded-md p-2">Jibran.dev</a>
            <div class="hidden md:flex space-x-8">
                <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300 rounded-md p-2 hover:bg-gray-800">About</a>
                <a href="#skills" class="text-gray-300 hover:text-white transition-colors duration-300 rounded-md p-2 hover:bg-gray-800">Skills</a>
                <a href="#projects" class="text-gray-300 hover:text-white transition-colors duration-300 rounded-md p-2 hover:bg-gray-800">Projects</a>
                <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300 rounded-md p-2 hover:bg-gray-800">Contact</a>
            </div>
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-300 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
            <button id="close-mobile-menu" class="absolute top-6 right-6 text-gray-300 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <a href="#about" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" onclick="document.getElementById('mobile-menu').classList.add('hidden')">About</a>
            <a href="#skills" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Skills</a>
            <a href="#projects" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Projects</a>
            <a href="#contact" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Contact</a>
        </div>
    </header>

    <!-- Main Content Section - Hero/About -->
    <main class="flex-grow flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 space-y-16 relative z-0">
        <section id="about" class="max-w-4xl w-full text-center bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-700 fade-in glow-animation">
            <div class="typewriter mb-6">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight gradient-text inline-block">
                    Hi, I’m Md Jibran
                </h1>
            </div>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
                A passionate Computer Science Engineering student at Lords Institute of Technology, Hyderabad.
                I’m currently exploring programming, web development, and creative projects.
                Apart from coding, I also love anime editing, drawing anime characters, and experimenting with video editing tools like CapCut, Filmora, and Alight Motion.
            </p>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
                I’m a beginner in C programming and Python, always eager to learn new technologies and improve my skills.
                My goal is to combine creativity and technology to build unique projects that stand out.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#projects" class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                    View My Projects
                </a>
                <a href="#contact" class="bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Get in Touch
                </a>
            </div>
        </section>

        <!-- Skills Section (Placeholder) -->
        <section id="skills" class="max-w-4xl w-full text-center bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-700 fade-in">
            <h2 class="text-3xl sm:text-4xl font-bold gradient-text mb-8">My Skills</h2>
            <p class="text-lg text-gray-300">
                Here you will find details about my programming languages, tools, and other technical skills.
                (Content coming soon!)
            </p>
            <!-- Example skill items (can be expanded later) -->
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-700 p-6 rounded-lg shadow-md card-3d-hover">
                    <div class="card-3d-inner">
                        <h3 class="text-xl font-semibold text-white mb-2">Programming Languages</h3>
                        <p class="text-gray-300">C, Python (Beginner)</p>
                    </div>
                </div>
                <div class="bg-gray-700 p-6 rounded-lg shadow-md card-3d-hover">
                    <div class="card-3d-inner">
                        <h3 class="text-xl font-semibold text-white mb-2">Web Development</h3>
                        <p class="text-gray-300">HTML, CSS, Tailwind CSS</p>
                    </div>
                </div>
                <div class="bg-gray-700 p-6 rounded-lg shadow-md card-3d-hover">
                    <div class="card-3d-inner">
                        <h3 class="text-xl font-semibold text-white mb-2">Video Editing</h3>
                        <p class="text-gray-300">CapCut, Filmora, Alight Motion</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section (Placeholder) -->
        <section id="projects" class="max-w-4xl w-full text-center bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-700 fade-in">
            <h2 class="text-3xl sm:text-4xl font-bold gradient-text mb-8">My Projects</h2>
            <p class="text-lg text-gray-300">
                This section will showcase my creative and technical projects.
                (Projects coming soon!)
            </p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-700 p-6 rounded-lg shadow-md card-3d-hover">
                    <div class="card-3d-inner">
                        <h3 class="text-xl font-semibold text-white mb-2">Project Title 1</h3>
                        <p class="text-gray-300">A brief description of my first project.</p>
                        <a href="#" class="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">Learn More &rarr;</a>
                    </div>
                </div>
                <div class="bg-gray-700 p-6 rounded-lg shadow-md card-3d-hover">
                    <div class="card-3d-inner">
                        <h3 class="text-xl font-semibold text-white mb-2">Project Title 2</h3>
                        <p class="text-gray-300">A brief description of my second project.</p>
                        <a href="#" class="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="max-w-4xl w-full text-center bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-700 fade-in glow-animation">
            <h2 class="text-3xl sm:text-4xl font-bold gradient-text mb-8">Get in Touch</h2>
            <div class="space-y-4 text-lg text-gray-300">
                <p>
                    <span class="font-semibold text-white">Instagram:</span>
                    <a href="https://www.instagram.com/legezt" target="_blank" class="text-cyan-400 hover:text-cyan-300 ml-2">@legezt</a>
                </p>
                <p>
                    <span class="font-semibold text-white">Mobile:</span>
                    <a href="tel:+919182481181" class="text-cyan-400 hover:text-cyan-300 ml-2">+91 9182481181</a>
                </p>
                <p class="mt-8 text-xl sm:text-2xl font-bold text-yellow-300 animate-pulse">
                    जल्दी ही एक बेहतरीन वेबसाइट डेवलप होने वाली है, बस इंतजार करें छात्रों के लिए!
                    <br> (A best website is going to be developed soon, just wait for students!)
                </p>
            </div>
            <div class="mt-8">
                <p class="text-gray-400">Feel free to connect with me!</p>
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer class="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-700 text-center text-gray-500 text-sm relative z-10">
        <p>&copy; 2025 Md Jibran. All rights reserved.</p>
    </footer>

    <script>
        // JavaScript for mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Optional: Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Three.js Background Animation
        window.onload = function() {
            const canvas = document.getElementById('bg-canvas');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); // alpha: true for transparent background

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio); // For sharper rendering on high-DPI screens

            // Create particles
            const particleCount = 5000;
            const particles = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];
            const color = new THREE.Color();

            for (let i = 0; i < particleCount; i++) {
                // Random position within a cube
                positions.push(
                    (Math.random() * 2 - 1) * 500, // x
                    (Math.random() * 2 - 1) * 500, // y
                    (Math.random() * 2 - 1) * 500  // z
                );

                // Random color (shades of blue/cyan/purple)
                color.setHSL(Math.random() * 0.3 + 0.5, 1, 0.5); // Hue between blue and purple
                colors.push(color.r, color.g, color.b);
            }

            particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const particleMaterial = new THREE.PointsMaterial({
                size: 1.5,
                vertexColors: true, // Use colors attribute
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending // For glowing effect
            });

            const particleSystem = new THREE.Points(particles, particleMaterial);
            scene.add(particleSystem);

            camera.position.z = 5;

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate the particle system
                particleSystem.rotation.x += 0.0005;
                particleSystem.rotation.y += 0.0008;

                renderer.render(scene, camera);
            };

            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            animate(); // Start the animation loop
        };
    </script>
</body>
</html>
