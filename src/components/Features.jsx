import { Code, Zap, Shield } from "lucide-react";
import { useState } from "react";

const features = [
    {
       title: "AI Code Completion",
       description: "Intelligent code suggestions powered by AI that learns from your coding style and provides contextual completions in real-time.",
       codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
  return data.json()
}`,
       icon: Code,
       filename: "app.jsx"
    },
    {
       title: "Smart Debugging",
       description: "Advanced debugging tools that help you identify and fix issues faster with AI-powered error detection and suggestions.",
       codeSnippet: `try {
  const result = await processData()
  console.log("Success:", result)
} catch (error) {
  // AI suggests fix
  handleError(error)
}`,
       icon: Zap,
       filename: "debug.js"
    },
    {
       title: "Security Analysis",
       description: "Real-time security scanning that detects vulnerabilities and suggests best practices to keep your code secure.",
       codeSnippet: `// AI detects security issue
const password = req.body.password
// AI suggests:
const hash = await bcrypt.hash(password, 10)
await saveUser({ hash })`,
       icon: Shield,
       filename: "auth.js"
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    const highlightSyntax = (code) => {
        return code
            .replace(/\b(function|return|const|let|var|if|else|for|while|export|default|import|from|async|await|try|catch)\b/g, '<span class="text-pink-400 font-semibold">$1</span>')
            .replace(/\b(console|req|body|bcrypt|hash|saveUser|processData|handleError|fetch|json)\b/g, '<span class="text-cyan-400">$1</span>')
            .replace(/(['"`])(.*?)\1/g, '<span class="text-amber-300">$1$2$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>')
            .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
            .replace(/\b(\w+)(?=\()/g, '<span class="text-blue-300">$1</span>');
    };

    const getLineNumbers = (code) => {
        const lines = code.split('\n');
        return lines.map((_, i) => i + 1).join('\n');
    };

    return (
        <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Your Complete Development</span>
                        <br />
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Workflow</span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const isEven = index % 2 === 0;
                        
                        return (
                            <div 
                                key={index} 
                                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Code Section */}
                                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="relative">
                                        {/* Glowing effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 animate-pulse"/>
                                        
                                        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                                            {/* IDE Header */}
                                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg shadow-red-500/50"/>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg shadow-yellow-500/50"/>
                                                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg shadow-green-500/50"/>
                                                    </div>
                                                    <span className="text-gray-400 text-xs sm:text-sm font-medium">{feature.filename}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Code Display */}
                                            <div className="bg-black">
                                                <div className="flex">
                                                    {/* Line numbers */}
                                                    <div className="bg-gray-950 px-3 sm:px-4 py-4 text-right border-r border-gray-800 select-none">
                                                        <pre className="text-xs sm:text-sm text-gray-500 font-mono leading-relaxed">
                                                            {getLineNumbers(feature.codeSnippet)}
                                                        </pre>
                                                    </div>
                                                    
                                                    {/* Code area */}
                                                    <div className="flex-1 px-3 sm:px-4 py-4 overflow-x-auto">
                                                        <pre className="text-xs sm:text-sm font-mono leading-relaxed text-gray-200">
                                                            <code 
                                                                dangerouslySetInnerHTML={{
                                                                    __html: highlightSyntax(feature.codeSnippet)
                                                                }}
                                                            />
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Section */}
                                <div className={`flex-1 w-full ${!isEven ? 'lg:order-1' : ''}`}>
                                    <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                                            <IconComponent className="w-8 h-8 text-blue-400"/>
                                        </div>
                                        
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                            {feature.title}
                                        </h3>
                                        
                                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}