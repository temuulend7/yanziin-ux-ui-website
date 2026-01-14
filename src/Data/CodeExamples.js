export const CodeExamples = {
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

export const floatingCards = {
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