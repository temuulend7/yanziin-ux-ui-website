import { ChevronDown, Zap, Sparkles, Menu, Server, Code, ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [activeTab, setActiveTab] = useState("App.jsx");
    const [displayedCode, setDisplayedCode] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const CodeExamples = {
        "App.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}

export default App;`,

        "Hero.jsx": `import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-section">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to CodeFlow AI
      </motion.h1>
      <p>Build amazing things with AI</p>
    </section>
  );
}

export default Hero;`,

        "Navbar.jsx": `import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">CodeFlow AI</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <ul className={isOpen ? "active" : ""}>
        <li>Home</li>
        <li>Features</li>
        <li>Docs</li>
      </ul>
    </nav>
  );
}

export default Navbar;`,

        "server.js": `const express = require('express');
const { CodeFlow } = require('@codeflow/ai');

const app = express();
app.use(express.json());

app.post('/api/complete', async (req, res) => {
  const { code } = req.body;
  const suggestion = await CodeFlow.complete(code);
  res.json({ suggestion });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,

        "utils.js": `export const formatCode = (code) => {
  return code.trim().replace(/\\s+/g, ' ');
};

export const validateCode = (code) => {
  return code && code.length > 0;
};

export const highlightSyntax = (code, language) => {
  // Syntax highlighting logic
  return processCode(code, language);
};`
    };

    const floatingCards = {
        "App.jsx": {
            bgColor: "bg-blue-500/20",
            iconColor: "text-blue-400",
            textColor: "text-blue-200",
            contentColor: "text-blue-300",
            icon: "Zap",
            title: "Smart Completion",
            content: "AI-powered code suggestion in real-time"
        },
        "Hero.jsx": {
            bgColor: "bg-purple-500/20",
            iconColor: "text-purple-400",
            textColor: "text-purple-200",
            contentColor: "text-purple-300",
            icon: "Sparkles",
            title: "Beautiful UI",
            content: "Create stunning hero sections with ease"
        },
        "Navbar.jsx": {
            bgColor: "bg-green-500/20",
            iconColor: "text-green-400",
            textColor: "text-green-200",
            contentColor: "text-green-300",
            icon: "Menu",
            title: "Responsive Nav",
            content: "Mobile-friendly navigation components"
        },
        "server.js": {
            bgColor: "bg-orange-500/20",
            iconColor: "text-orange-400",
            textColor: "text-orange-200",
            contentColor: "text-orange-300",
            icon: "Server",
            title: "Backend API",
            content: "Express server with AI integration"
        },
        "utils.js": {
            bgColor: "bg-cyan-500/20",
            iconColor: "text-cyan-400",
            textColor: "text-cyan-200",
            contentColor: "text-cyan-300",
            icon: "Code",
            title: "Utility Functions",
            content: "Helper functions for code manipulation"
        }
    };

    const iconMap = {
        Zap: Zap,
        Sparkles: Sparkles,
        Menu: Menu,
        Server: Server,
        Code: Code
    };

    // Typing animation effect
    useEffect(() => {
        setIsTyping(true);
        setDisplayedCode("");
        const code = CodeExamples[activeTab];
        let index = 0;
        
        const timer = setInterval(() => {
            if (index < code.length) {
                setDisplayedCode(code.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, 8);

        return () => clearInterval(timer);
    }, [activeTab]);

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Enhanced Syntax highlighting function
    const highlightSyntax = (code) => {
        return code
            .replace(/\b(function|return|const|let|var|if|else|for|while|export|default|import|from|async|await|require|class)\b/g, '<span class="text-pink-400 font-semibold">$1</span>')
            .replace(/\b(div|nav|section|h1|p|ul|li|button|className|onClick|useState|useEffect|CodeEditor|Menu|motion|initial|animate|opacity)\b/g, '<span class="text-cyan-400">$1</span>')
            .replace(/(['"`])(.*?)\1/g, '<span class="text-amber-300">$1$2$1</span>')
            .replace(/(&lt;|<)(\/?[\w]+)/g, '<span class="text-emerald-400">$1$2</span>')
            .replace(/(\/>|>)/g, '<span class="text-emerald-400">$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>')
            .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
            .replace(/\b(\w+)(?=\()/g, '<span class="text-blue-300">$1</span>');
    };

    const getLineNumbers = (code) => {
        const lines = code.split('\n');
        return lines.map((_, i) => i + 1).join('\n');
    };

    const tabs = ["App.jsx", "Hero.jsx", "Navbar.jsx", "server.js", "utils.js"];

    const cardData = floatingCards[activeTab];
    const IconComponent = cardData ? iconMap[cardData.icon] : null;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Animated gradient following mouse */}
            <div 
                className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 50%)`
                }}
            />
            
            {/* Animated blobs */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"/>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}/>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}/>
            
            <div className="relative w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10 lg:text-left text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-blue-400"/>
                            <span className="text-sm text-blue-300">CodeFlow хиймэл оюун ухааныг танилцуулж байна</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-2">Код хурдан</span>
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-2">Илүү сайн бүтээл</span>
                            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block">Хиймэл оюун ухаанаар</span>
                        </h1>
                        
                        <p className="text-base lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                           "Vibe coding" гэдэг ойлголт 2025 оны эхээр л гарч ирсэн боловч энэ нь том хэлний загваруудын хамгийн их яригддаг хэрэглээний нэг болжээ.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                            <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30">
                                <span>Үнэгүй код бичиж эхлээрэй</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                            </button>
                            
                            <button className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-200 transition-colors">
                                    <Play className="w-4 h-4 fill-white"/>
                                </div>
                                <span>Демо үзэх</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Code Editor */}
                    <div className="relative">
                        {/* Floating Card */}
                        {cardData && (
                            <div className="absolute -bottom-16 -right-4 lg:-right-8 z-50 w-64">
                                <div className={`${cardData.bgColor} backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float`}>
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        {IconComponent && (
                                            <div className={`${cardData.iconColor} p-4 bg-white/10 rounded-xl`}>
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className={`${cardData.textColor} text-xl font-bold mb-2`}>
                                                {cardData.title}
                                            </h3>
                                            <p className={`${cardData.contentColor} text-sm`}>
                                                {cardData.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Glowing border effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 animate-pulse"/>
                        
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden h-[400px] lg:h-[500px] border border-white/10 shadow-inner">
                                {/* HEADER */}
                                <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg shadow-red-500/50"/>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg shadow-yellow-500/50"/>
                                            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg shadow-green-500/50"/>
                                        </div>
                                        <span className="text-sm text-gray-300 font-medium">КодФлоу хиймэл оюун ухаан</span>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"/>
                                </div>
                                
                                <div className="p-4 relative flex flex-col h-[calc(100%-50px)]">
                                    {/* File tabs */}
                                    <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
                                        {tabs.map((tab) => (
                                            <button 
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`px-4 py-2 backdrop-blur-sm text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                                                    activeTab === tab
                                                        ? "bg-blue-500/40 text-white border-blue-400/30 shadow-lg shadow-blue-500/20" 
                                                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20"
                                                }`}
                                            > 
                                                <span className="flex items-center gap-1.5">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${activeTab === tab ? 'bg-blue-300 animate-pulse' : 'bg-gray-500'}`}/>
                                                    {tab}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    
                                    {/* Code content */}
                                    <div className="bg-black rounded-lg flex-grow overflow-hidden border border-gray-800 shadow-inner relative">
                                        <div className="flex h-full">
                                            {/* Line numbers */}
                                            <div className="bg-gray-950 px-4 py-4 text-right border-r border-gray-800 select-none">
                                                <pre className="text-sm text-gray-500 font-mono leading-relaxed">
                                                    {getLineNumbers(displayedCode || CodeExamples[activeTab])}
                                                </pre>
                                            </div>
                                            
                                            {/* Code area */}
                                            <div className="flex-1 px-4 py-4 overflow-auto">
                                                <pre className="text-sm font-mono leading-relaxed text-gray-200">
                                                    <code 
                                                        dangerouslySetInnerHTML={{
                                                            __html: highlightSyntax(displayedCode || CodeExamples[activeTab])
                                                        }}
                                                    />
                                                </pre>
                                                
                                                {/* Typing cursor */}
                                                {isTyping && (
                                                    <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5"/>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Glow effect overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}