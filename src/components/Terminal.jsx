import React, { useState, useEffect, useRef } from 'react';
import Banner from './Banner';
import CommandHistory from './CommandHistory';
import TerminalFooter from './TerminalFooter';
import '../index.css'; 

const Terminal = () => {
  const [currentPath, setCurrentPath] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [bootSequence, setBootSequence] = useState(true);
  const [bootText, setBootText] = useState('');
  const [historyIndex, setHistoryIndex] = useState(null);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const gdgBanner = `
 ██████╗  ██████╗   ██████╗     ██╗   ██╗ ██╗ ████████╗
██╔════╝  ██╔══██╗ ██╔════╝     ██║   ██║ ██║ ╚══██╔══╝
██║  ███╗ ██║  ██║ ██║  ███╗    ██║   ██║ ██║    ██║   
██║   ██║ ██║  ██║ ██║   ██║    ╚██╗ ██╔╝ ██║    ██║   
╚██████╔╝ ██████╔╝ ╚██████╔╝     ╚████╔╝  ██║    ██║   
 ╚═════╝  ╚═════╝   ╚═════╝       ╚═══╝   ╚═╝    ╚═╝   
`;

  const bootMessages = [
    'Initializing GDG VIT Terminal...',
    'Loading kernel modules...',
    'Starting system services...',
    'Mounting filesystems...',
    'Network interfaces up...',
    'Welcome to GDG VIT Terminal v1.0.1',
    '',
    gdgBanner,
    '',
    'Google Developer Group - VIT Mumbai',
    'Building the future, one line of code at a time.',
    '',
    'Type "gdg help" to see available commands.',
    ''
  ];

  const availableCommands = {
    'gdg help': 'Show available commands',
    'whoarewe': 'About GDG VIT',
    'gdg hackbuild': 'Our hackathon',
    'gdg spectrum': 'Our spectrum of annual events',
    'gdg socials': 'Connect with us !',
    'clear': 'Clear terminal',
    'whoami': 'Current user info',
    'date': 'Show current date',
    'cat resources': 'Some resources by our developers which will help you',
    'gdg contact': 'contact us for collaboration',
  };

  // Resource commands with descriptions and links
 const resourceCommands = {
    'gitsheet': {
      description: 'Git cheat sheet - Essential Git commands',
      url: 'https://education.github.com/git-cheat-sheet-education.pdf',
      info: 'Quick reference for Git version control commands'
    },
    'jsguide': {
      description: 'JavaScript resources to study',
      url: 'https://www.w3schools.com/js/',
      info: 'Comprehensive JavaScript tutorial by W3Schools'
    },
    'reactdocs': {
      description: 'React resource to study',
      url: 'https://www.w3schools.com/react/default.asp',
      info: 'Easy for beginners to learn React with examples'
    },
    'pythonref': {
      description: 'Python reference guide',
      url: 'https://docs.python.org/3/tutorial/',
      info: 'Official Python tutorial and documentation'
    },
    'cssguide': {
      description: 'CSS complete guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      info: 'Complete CSS documentation and tutorials'
    },
    'htmlref': {
      description: 'HTML reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      info: 'HTML elements and attributes reference'
    },
    'algorithms': {
      description: 'Data structures and algorithms',
      url: 'https://www.programiz.com/dsa',
      info: 'Comprehensive guide to DSA concepts'
    },
    'apidesign': {
      description: 'REST API design guide',
      url: 'https://restfulapi.net/',
      info: 'Best practices for designing REST APIs'
    },
    'dockerguide': {
      description: 'Docker containerization guide',
      url: 'https://docs.docker.com/get-started/',
      info: 'Learn containerization with Docker from basics'
    },
    'flutterdev': {
      description: 'Flutter app development',
      url: 'https://docs.flutter.dev/get-started/install',
      info: 'Cross-platform mobile app development with Flutter'
    },
    'cppref': {
      description: 'C++ programming reference',
      url: 'https://www.geeksforgeeks.org/cpp/cpp-tutorial/',
      info: 'Complete C++ programming tutorial and reference'
    },
     'cpalgos': {
      description: 'Competitive programming algorithms',
      url: 'https://cp-algorithms.com/navigation.html',
      info: 'These are some competitive programming algorithms that will help you in your journey',
    },
    'computernetworks': {
      description: 'Computer Networks fundamentals',
      url: 'https://www.geeksforgeeks.org/computer-network-tutorials/',
      info: 'Complete guide to networking concepts and protocols'
    },
    'dbms': {
      description: 'Database Management Systems',
      url: 'https://drive.google.com/file/d/1LOnuwOCraDs69DVJOt7Bq0LxcWxGFXL_/view?usp=sharing',
      info: 'Quick resource to learn DBMS concepts'
    },
    'oops': {
      description: 'Object Oriented Programming',
      url: 'https://drive.google.com/file/d/1UaADlGwNFm4si3OmL0Jym7Si4ch8cCbR/view?usp=sharing',
      info: 'OOP concepts with practical examples'
    },
    'operatingsystems': {
      description: 'Operating Systems concepts',
      url: 'https://www.geeksforgeeks.org/operating-systems/',
      info: 'OS fundamentals including processes, memory, and scheduling'
    },
     'pgbooks': {
      description: 'Some programming books',
      url: 'https://books.goalkicker.com/',
      info: 'For book nerds, this is a resource to some programming books'
    },
  };

  const socialsList = [
     {
      name: 'Website',
      className: 'website',
      url: 'https://gdg-vit-mumbai.vercel.app/',
      label: 'Twitter: @gdgvit'
    },
    {
      name: 'X',
      className: 'twitter',
      url: 'https://twitter.com/gdgvit',
      label: 'Twitter: @gdgvit'
    },
    {
      name: 'Instagram',
      className: 'instagram',
      url: 'https://instagram.com/gdg_vit',
      label: 'Instagram: @gdg_vit'
    },
    {
      name: 'LinkedIn',
      className: 'linkedin',
      url: 'https://www.linkedin.com/company/google-developer-groups-vit-mumbai/',
      label: 'LinkedIn: /company/gdg-vit'
    },
    {
      name: 'GitHub',
      className: 'github',
      url: 'https://github.com/GDGVITM',
      label: 'GitHub: /gdgvit'
    },
     {
      name: 'Community page',
      className: 'community',
      url: 'https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india/',
      label: 'community'
    },
  ];

  const commandResponses = {
    'whoarewe': [
      'GDG VIT - Google Developer Groups on Campus at VIT Mumbai',
      '',
      'Converting ideas into reality 🚀',
      '',
      'We are a community of passionate developers, designers, and tech enthusiasts',
      'dedicated to learning, sharing knowledge, and building amazing projects.',
      '',
      'Our mission: Empowering students through technology and innovation.',
      ''
    ],
    'gdg hackbuild': [
      'We will reveal about it soon ;)',
      'Something really excitingg !'
    ],
    'gdg spectrum': [
      'Our very own annual fest for cool tech Nerds',
      'To know more about it, check out here:',
      <a href="https://spectrum-2025.vercel.app/" className="underline hover:text-pink-300 transition-colors">spectrum.tech</a>
    ],
    'gdg socials': [
      <div key="gdg-socials-list" className="output w-full max-w-[80ch] text-[#c6d0f5] animate-fadein">
        <span className="font-bold text-pink-300">Follow us on social media:</span>
        <ul className="links list-none pl-0 mt-2 mb-2">
          {socialsList.map((social, idx) => (
            <li key={social.name} className="mb-1 text-[#f2d5cf] font-medium">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-300 transition-colors"
                style={{ color: '#f2d5cf', fontWeight: 500 }}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ],
    'whoami': ['You should know who you are !'],
    'cat resources': [
      <div key="resources-list" className="output w-full max-w-[80ch] text-[#c6d0f5] animate-fadein">
        <span className="font-bold text-green-300">📚 Study Resources Commands:</span>
        <div className="mt-3 mb-3">
          <div className="text-[#f2d5cf] mb-3">💡 Type any of these commands to access study resources:</div>
          <ul className="list-none pl-0 mt-2 space-y-1">
            {Object.entries(resourceCommands).map(([command, resource]) => (
              <li key={command} className="text-[#c6d0f5]">
                <span className="text-blue-300 font-mono font-bold">{command.padEnd(16)}</span>
                <span className="text-[#babbf1]"> - {resource.description}</span>
              </li>
            ))}
          </ul>
          <div className="text-[#f2d5cf] mt-4 text-sm">
            ✨ Each command opens the resource in a new tab for easy access!
          </div>
        </div>
      </div>
    ],
    'date': ['' + new Date().toString(), '(Maybe you should go to one too)'],
    'gdg contact': ['For collaboration or queries, please reach out to us at:', <a href="mailto:gdgoncampus.vit@gmail.com" className="underline hover:text-pink-300 transition-colors">gdgoncampus.vit@gmail.com</a>],
  };

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Boot sequence animation
  useEffect(() => {
    if (bootSequence) {
      // Show banner immediately
      const fullBootText = bootMessages.join('\n');
      setBootText(fullBootText);
      
      setTimeout(() => {
        setBootSequence(false);
        inputRef.current?.focus();
      }, 6000); // Increased from 2000 to 4000 ms
    }
  }, [bootSequence]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory, bootText]);

  // Focus input when clicking anywhere
  useEffect(() => {
    const handleClick = () => {
      if (!bootSequence && inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [bootSequence]);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    const args = command.split(' ');
    const baseCommand = args.slice(0, 2).join(' '); 

    let response = [];

    if (command === '') {
      response = [''];
    } else if (baseCommand === 'clear') {
      setCommandHistory([]);
      return;
    } else if (baseCommand === 'gdg help') {
      response = [
        'Available commands:',
        '',
        ...Object.entries(availableCommands).map(([cmd, desc]) => `${cmd.padEnd(16)} - ${desc}`),
        ''
      ];
    } else if (baseCommand === 'gdg cat') {
      if (args[2] === 'README.txt') {
        response = [
          'Welcome to GDG VIT!',
          '',
          'This is a Linux terminal-style interface for our community.',
          'Explore our projects, events, and team using the available commands.',
          '',
          'Happy coding! 🚀'
        ];
      } else if (args[2] === 'contact.info') {
        response = commandResponses['gdg contact'];
      } else {
        response = [`cat: ${args[2] || 'file'}: No such file or directory`];
      }
    } else if (resourceCommands[command]) {
      // Handle resource commands
      const resource = resourceCommands[command];
      window.open(resource.url, '_blank');
      response = [
        `Opening ${resource.description}...`,
        `📖 ${resource.info}`,
        `🔗 ${resource.url}`,
        '',
        '✨ Resource opened in a new tab!'
      ];
    } else if (commandResponses[baseCommand]) {
      response = commandResponses[baseCommand];
    } else {
      response = [`Command not found: ${baseCommand}. Type 'gdg help' for available commands.`];
    }

    const newEntry = {
      command: cmd,
      response: response,
      timestamp: Date.now()
    };

    setCommandHistory(prev => [...prev, newEntry]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      let newIndex = historyIndex === null ? commandHistory.length - 1 : historyIndex - 1;
      if (newIndex < 0) newIndex = 0;
      setHistoryIndex(newIndex);
      setCurrentCommand(commandHistory[newIndex]?.command || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      let newIndex = historyIndex === null ? commandHistory.length : historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setCurrentCommand('');
      } else {
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]?.command || '');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentCommand);
      setCurrentCommand('');
      setHistoryIndex(null);
    }
  };

  const handleInputChange = (e) => {
    setCurrentCommand(e.target.value);
    setHistoryIndex(null);
  };

   if (bootSequence) {
    return (
      <div className={`min-h-screen bg-[#121313] text-[#708fff] font-['IBM_Plex_Mono',monospace] p-8 flex flex-col${!bootSequence ? ' animate-fadeout' : ''}`}>
        <div className="flex-1 flex flex-col justify-start items-start w-full">
          <pre className={`w-full text-left text-base leading-relaxed bg-none m-0 font-['IBM_Plex_Mono',monospace]${!bootSequence ? ' animate-fadeout' : ''}`}>
            {bootMessages.map((line, idx) => (
              <span
                key={idx}
                className={
                  idx === 0
                    ? "text-blue-300"
                    : idx === 5
                    ? "text-pink-300"
                    : idx === 7
                    ? "mb-2 w-full text-left font-bold text-[0.70rem] sm:text-xs md:text-base lg:text-lg gradient-banner select-none drop-shadow leading-[1.05] whitespace-pre-wrap"
                    : idx === 9
                    ? "text-[#B5BFE2]"
                    : idx === 11
                    ? "text-[#f2d5cf]"
                    : "text-[#c6d0f5]"
                }
                style={{
                  display: "block",
                  fontWeight: idx === 7 ? 700 : 500,
                  animation: `fade 2s ${idx * 0.13 + 0.2}s both`
                }}
              >
                {line}
              </span>
            ))}
          </pre>
        </div>
        <style>{`
          @keyframes fade {
            0% { opacity: 0}
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeout {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          .animate-fadeout {
            animation: fadeout 0.8s ease-in 0.1s forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#121313] text-[#c6d0f5] font-['IBM_Plex_Mono',monospace] p-8 flex flex-col items-start animate-fadein-terminal">
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto w-full max-w-[80ch] bg-none"
      >
        {/* Terminal header */}
        <div className=" mb-4 pb-2 bg-none flex items-center">
          <span className="text-green-300 font-bold text-base md:text-lg ml-2 tracking-wide">Welcome to our terminal, get some real Developer experience ~/</span>
        </div>
        {/* Banner with gradient effect */}
        <div className="banner-container mb-6">
          <pre className="banner-text gradient-banner font-bold text-[0.70rem] sm:text-xs md:text-base lg:text-lg select-none drop-shadow leading-[1.05] whitespace-pre-wrap">
            {gdgBanner}
          </pre>
        </div>

        {/* Command history */}
        <CommandHistory commandHistory={commandHistory} currentPath={currentPath} />

        {/* Current command line */}
        <div className="flex items-center w-full mt-2">
          <span className="text-red-400 font-bold">developer@gdgvitm</span>
          <span className="text-[#c6d0f5] ml-1">:</span>
          <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
          <span className="text-[#c6d0f5] ml-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-[#B5BFE2] font-['IBM_Plex_Mono',monospace] font-medium flex-1 text-base ml-2 focus:outline-[#babbf1] caret-[#f2d5cf] caret-[10px]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Footer */}
      <TerminalFooter />
    </div>
  );
};

export default Terminal;