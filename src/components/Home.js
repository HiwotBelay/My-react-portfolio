"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Github, Send, Linkedin, Download, X, Menu } from "lucide-react"
import { ReactTyped } from "react-typed"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
import { Float, Environment, OrbitControls, ContactShadows, Html } from "@react-three/drei"
import { TextureLoader } from "three"
import { useSpring, animated } from "@react-spring/three" // For smooth book animation

// 3D Floating Framework Icons Component
function FloatingFrameworkIcons() {
  const groupRef = useRef(null)
  const { mouse, viewport } = useThree()

  // Load textures for each framework logo from online URLs
  const reactTexture = useLoader(TextureLoader, "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg")
  const nextjsTexture = useLoader(TextureLoader, "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg")
  const nodejsTexture = useLoader(TextureLoader, "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg")
  const phpTexture = useLoader(TextureLoader, "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg")
  const viteTexture = useLoader(TextureLoader, "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg")

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation for the entire group
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.03
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02

      // Mouse-based movement for the entire group, scaled down for subtlety
      groupRef.current.position.x = (mouse.x * viewport.width) / 25
      groupRef.current.position.y = (mouse.y * viewport.height) / 25
    }
  })

  return (
    <group ref={groupRef}>
      {/* React Icon */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-4, 2, -2]}>
          <planeGeometry args={[1.5, 1.5]} /> {/* Adjust size as needed */}
          <meshStandardMaterial map={reactTexture} transparent />
        </mesh>
      </Float>
      {/* Next.js Icon */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.8}>
        <mesh position={[4, -1, -1]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial map={nextjsTexture} transparent />
        </mesh>
      </Float>
      {/* Node.js Icon */}
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={2}>
        <mesh position={[2, 3, -3]}>
          <planeGeometry args={[1.6, 1.6]} />
          <meshStandardMaterial map={nodejsTexture} transparent />
        </mesh>
      </Float>
      {/* PHP Icon */}
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.7}>
        <mesh position={[-2, -3, -1]}>
          <planeGeometry args={[1.4, 1.4]} />
          <meshStandardMaterial map={phpTexture} transparent />
        </mesh>
      </Float>
      {/* Vite Icon */}
      <Float speed={2.1} rotationIntensity={0.9} floatIntensity={2.1}>
        <mesh position={[0, -0.5, 3]}>
          <planeGeometry args={[1.3, 1.3]} />
          <meshStandardMaterial map={viteTexture} transparent />
        </mesh>
      </Float>
    </group>
  )
}

// Interactive Particle System representing fullstack developer frameworks
function InteractiveParticles() {
  const pointsRef = useRef(null)
  const { mouse, viewport } = useThree()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3) // Increased particle count for more density
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50 // Increased spread to cover more screen
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02 // Slower rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01

      const positions = pointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        // More dynamic random movement
        positions[i] += Math.sin(state.clock.elapsedTime * 0.8 + i) * 0.002
        positions[i + 1] += Math.cos(state.clock.elapsedTime * 0.8 + i) * 0.002
        positions[i + 2] += Math.sin(state.clock.elapsedTime * 0.8 + i + 1) * 0.002
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1000} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      {/* Darker particles for visibility on white background */}
      <pointsMaterial color="#4A4A4A" size={0.05} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// Interactive 3D Book Component
function InteractiveBook() {
  const bookRef = useRef(null)
  const { mouse, viewport } = useThree()
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Spring animation for opening/closing the book
  const { rotationY } = useSpring({
    rotationY: isOpen ? Math.PI / 2 : 0, // Rotate 90 degrees on Y-axis to open
    config: { mass: 1, tension: 200, friction: 20 },
  })

  useFrame((state) => {
    if (bookRef.current) {
      // Mouse-based movement for the book
      bookRef.current.position.x = 7 + (mouse.x * viewport.width) / 40 // Position on right, subtle mouse follow
      bookRef.current.position.y = (mouse.y * viewport.height) / 40
      bookRef.current.rotation.z = mouse.x * 0.05 // Slight tilt
    }
  })

  return (
    <animated.group
      ref={bookRef}
      position={[7, 0, 0]} // Initial position on the right
      rotation-y={rotationY}
      onClick={() => setIsOpen(!isOpen)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={isHovered ? 1.05 : 1} // Hover effect
    >
      {/* Book Cover */}
      <mesh>
        <boxGeometry args={[2, 3, 0.2]} /> {/* Width, Height, Depth */}
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
        <Html
          position={[0, 0, 0.11]} // Position slightly above the cover
          center
          transform
          occlude
          style={{
            width: "1.8rem", // Adjust to fit book size
            height: "2.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "none", // Allow click to pass through
            color: "#333",
            fontSize: "0.25rem", // Smaller font for 3D text
            fontWeight: "bold",
            textShadow: "0 0 2px rgba(0,0,0,0.1)",
          }}
        >
          <div className="p-1">
            <p className="text-xs font-bold">Welcome to my</p>
            <p className="text-lg font-extrabold text-blue-600">Portfolio</p>
          </div>
        </Html>
      </mesh>

      {/* Inner Page (revealed when open) */}
      {isOpen && (
        <mesh position={[0, 0, -0.1]}>
          {" "}
          {/* Position slightly behind cover */}
          <boxGeometry args={[2, 3, 0.05]} />
          <meshStandardMaterial color="#F8F8F8" roughness={0.8} metalness={0.05} />
          <Html
            position={[0, 0, 0.03]} // Position slightly above the inner page
            center
            transform
            occlude
            style={{
              width: "1.8rem",
              height: "2.8rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              pointerEvents: "none",
              color: "#555",
              fontSize: "0.2rem",
              lineHeight: "1.2",
            }}
          >
            <div className="p-1">
              <p className="text-xs font-semibold text-gray-700">
                Explore my work, skills, and journey as a Full-Stack Developer.
              </p>
              <p className="text-xs mt-2 text-gray-600">Click to close.</p>
            </div>
          </Html>
        </mesh>
      )}
    </animated.group>
  )
}

// Enhanced Social Icon with 3D Effect
function Enhanced3DSocialIcon({ children, href }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        filter: isHovered ? "drop-shadow(0 10px 20px rgba(135, 206, 250, 0.5))" : "none", // Lighter shadow color
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-100 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
      <div className="relative z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 group-hover:border-blue-300 transition-all duration-300 text-gray-700 group-hover:text-blue-700">
        {children}
      </div>
    </a>
  )
}

const Home = () => {
  const [menu, toggleMenu] = useState(false)
  const headerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        toggleMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function handleNavLinkClick() {
    toggleMenu(false)
  }

  return (
    <>
      {isMobile && (
        <div
          className="absolute top-4 right-4 z-50 text-gray-800 text-3xl cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </div>
      )}
      <section
        className="hero relative overflow-hidden flex items-center justify-start min-h-screen" // Changed to justify-start for left alignment
        id="home"
      >
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: "#FFFFFF" }}>
            {" "}
            {/* White background */}
            {/* Environment for bright, professional lighting */}
            <Environment preset="studio" background blur={0.5} />
            {/* Additional bright lights */}
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#E0BBE4" /> {/* Soft purple light */}
            <directionalLight position={[5, 5, 5]} intensity={0.5} color="#FFFAF0" /> {/* Creamy white light */}
            <FloatingFrameworkIcons /> {/* Now using online logos */}
            <InteractiveParticles />
            <InteractiveBook /> {/* The new interactive book */}
            {/* Subtle floor plane */}
            <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#F0F0F0" roughness={0.8} metalness={0.1} />
            </mesh>
            {/* Contact shadows for realism */}
            <ContactShadows position={[0, -4.9, 0]} scale={100} far={10} blur={2} opacity={0.7} color="#000000" />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        </div>

        {/* Animated Background Overlay - adjusted for brighter colors */}
        <div
          className="absolute inset-0 z-10 opacity-30"
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(-mousePosition.y + 1) * 50}%, rgba(173, 216, 230, 0.4) 0%, transparent 50%)`, // Light blue gradient
            transition: "background 0.3s ease-out",
          }}
        ></div>

        <div className="container relative z-20 text-left p-4 md:p-8 pl-8 md:pl-16">
          {" "}
          {/* Left alignment and increased padding */}
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-gray-800" // Darker text color
            style={{
              textShadow: "0 0 15px rgba(0, 0, 0, 0.1), 0 0 30px rgba(173, 216, 230, 0.3)", // Subtle text shadow
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            Hiwot Belay
          </h1>
          <p
            className="text-xl md:text-3xl font-medium mb-8 text-gray-700" // Darker text color
            style={{
              transform: `translateX(${mousePosition.x * 5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            I'm{" "}
            <span className="relative inline-block">
              <ReactTyped
                strings={["Software Engineer", "Full-Stack Developer", "Accountant"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded blur opacity-70 animate-pulse"></div>{" "}
              {/* Brighter glow */}
            </span>
          </p>
          <div
            className="social relative z-30 flex justify-start gap-4 mb-12" // Changed to justify-start
            style={{
              transform: `translateY(${mousePosition.y * 3}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <Enhanced3DSocialIcon href="https://github.com/HiwotBelay">
              <Github className="h-6 w-6" />
            </Enhanced3DSocialIcon>
            <Enhanced3DSocialIcon href="https://x.com/belay_hiwo38480">
              <X className="h-6 w-6" />
            </Enhanced3DSocialIcon>
            <Enhanced3DSocialIcon href="https://t.me/Hiwi_ina">
              <Send className="h-6 w-6" />
            </Enhanced3DSocialIcon>
            <Enhanced3DSocialIcon href="https://www.linkedin.com/in/hiwot-belaym/">
              <Linkedin className="h-6 w-6" />
            </Enhanced3DSocialIcon>
          </div>
        </div>
        {/* Enhanced Download CV button - positioned absolutely */}
        <div
          className="cv-download absolute top-4 right-4 z-30" // Absolute positioning
        >
          <a
            href="/Hiwot_Belay CV.pdf"
            download
            className="download-btn group relative inline-flex items-center justify-between overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-300 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-out hover:from-blue-500 hover:to-purple-400 hover:shadow-xl hover:-translate-y-1"
            style={{
              boxShadow: "0 0 20px rgba(135, 206, 250, 0.3), 0 8px 15px rgba(0, 0, 0, 0.1)", // Lighter shadow
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(135, 206, 250, 0.6), 0 12px 25px rgba(0, 0, 0, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(135, 206, 250, 0.3), 0 8px 15px rgba(0, 0, 0, 0.1)"
            }}
          >
            <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/20 via-white/40 to-white/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
            <span className="relative flex items-center space-x-2">
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              <span>Get My CV</span>
            </span>
            <span className="absolute right-6 translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
