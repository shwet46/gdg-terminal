import React, { useState, useEffect, useRef } from 'react';
import BootScreen from './BootScreen';
import TerminalMain from './TerminalMain';
import Commands from './Commands';
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

  const hackbuildBannerText = `
██╗  ██╗  █████╗   ██████╗ ██╗  ██╗ ██████╗  ██╗   ██╗ ██╗ ██╗      ██████╗ 
██║  ██║ ██╔══██╗ ██╔════╝ ██║ ██╔╝ ██╔══██╗ ██║   ██║ ██║ ██║      ██╔══██╗
███████║ ███████║ ██║      █████╔╝  ██████╔╝ ██║   ██║ ██║ ██║      ██║  ██║
██╔══██║ ██╔══██║ ██║      ██╔═██╗  ██╔══██╗ ██║   ██║ ██║ ██║      ██║  ██║
██║  ██║ ██║  ██║ ╚██████╗ ██║  ██╗ ██████╔╝ ╚██████╔╝ ██║ ███████╗ ██████╔╝
╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═════╝  ╚═╝ ╚══════╝ ╚═════╝ 
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

  const {
    availableCommands,
    resourceCommands,
    socialsList,
    commandResponses,
    hackbuildBanner,
    hackbuildSubcommands,
  } = Commands();

  const [clearCommand, setClearCommand] = useState('');

  // Hackbuild subcommand responses
  const hackbuildResponses = {
    '--info': [
      <div key="info" className="output w-full text-[#c6d0f5] animate-fadein">
        <span key="hackbuild-title" className="font-bold text-pink-300">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
        <span key="hackbuild-desc" className="text-[#babbf1] block mt-2">Unleash your creativity, solve real-world problems, and win exciting prizes. Join us for a 24-hour coding marathon packed with innovation, learning, and fun!</span>
        <span key="hackbuild-features" className="text-[#c6d0f5] mt-3 block">
          <div>🔥 <span className="text-[#a6e3a1]">Features:</span> Exciting challenges, Mentorship, Networking, Prizes</div>
          <div>🏆 <span className="text-[#a6e3a1]">Prize Pool:</span> ₹50,000+ in cash and goodies</div>
          <div>📅 <span className="text-[#a6e3a1]">Date:</span> Coming Soon</div>
          <div>📍 <span className="text-[#a6e3a1]">Venue:</span> VIT Mumbai Campus</div>
        </span>
      </div>
    ],
    '--domains': [
      <div key="domains" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">🎯 Hackbuild 2025 - Competition Domains</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">🌐 Web Development</div>
          <div className="text-[#c6d0f5] ml-4">Build innovative web applications, platforms, and tools</div>
          
          <div className="text-[#a6e3a1]">📱 Mobile Development</div>
          <div className="text-[#c6d0f5] ml-4">Create cross-platform mobile solutions</div>
          
          <div className="text-[#a6e3a1]">🤖 AI/ML</div>
          <div className="text-[#c6d0f5] ml-4">Develop intelligent systems and machine learning solutions</div>
          
          <div className="text-[#a6e3a1]">🔗 Blockchain</div>
          <div className="text-[#c6d0f5] ml-4">Build decentralized applications and smart contracts</div>
        </div>
      </div>
    ],
    '--registration': [
      <div key="registration" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">📝 Registration Information</div>
        <div className="space-y-2">
          <div className="text-[#f9e2af]">🚀 Registration will open soon!</div>
          <div className="text-[#c6d0f5]">• Team Size: 2-4 members</div>
          <div className="text-[#c6d0f5]">• Registration Link: Coming soon...</div>
          <div className="text-[#a6e3a1] mt-3">Stay tuned to our socials for updates!</div>
        </div>
      </div>
    ],
    '--rulebook': [
      <div key="rulebook" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">📋 Hackbuild 2025 - Rules & Guidelines</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">🎯 General Rules:</div>
          
          <div className="text-[#f9e2af] mt-3">📄 Full rulebook will be available soon!</div>
        </div>
      </div>
    ],
    '--dates': [
      <div key="dates" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">📅 Hackbuild 2025 - Important Dates</div>
        <div className="space-y-2">
          <div className="text-[#a6e3a1]">📢 Registration Opens: Coming Soon</div>
          <div className="text-[#a6e3a1]">📝 Registration Closes: TBA</div>
          <div className="text-[#a6e3a1]">🎯 Problem Statements Release: TBA</div>
          <div className="text-[#a6e3a1]">🚀 Hackathon Begins: TBA</div>
          <div className="text-[#a6e3a1]">⏰ Submission Deadline: TBA</div>
          <div className="text-[#a6e3a1]">🏆 Results & Closing: TBA</div>
          <div className="text-[#f9e2af] mt-3">📧 Follow our socials for exact dates!</div>
        </div>
      </div>
    ],
    '--prizes': [
      <div key="prizes" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">🏆 Hackbuild 2025 - Prize Pool</div>
        <div className="space-y-3">
          <div className="text-[#f9e2af]">💰 Total Prize Pool: ₹25,000+</div>
          
        </div>
      </div>
    ],
    '--timeline': [
      <div key="timeline" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">⏰ Hackbuild 2025 - Event Timeline</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">We will let you know soon ;)</div>
        </div>
      </div>
    ],
    '--sponsors': [
      <div key="sponsors" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">🤝 Hackbuild 2025 - Sponsors & Partners</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">🏢 Title Sponsor:</div>
          <div className="text-[#c6d0f5] ml-4">• Coming Soon...</div>
          
          <div className="text-[#a6e3a1]">💼 Gold Sponsors:</div>
          <div className="text-[#c6d0f5] ml-4">• To be announced</div>
          
          <div className="text-[#a6e3a1]">🥈 Silver Sponsors:</div>
          <div className="text-[#c6d0f5] ml-4">• To be announced</div>
          
          <div className="text-[#a6e3a1]">🤝 Community Partners:</div>
          <div className="text-[#c6d0f5] ml-4">• Google Developer Groups</div>
          <div className="text-[#c6d0f5] ml-4">• VIT Mumbai</div>
          
          <div className="text-[#f9e2af] mt-3">📞 Want to sponsor? Contact us at:</div>
          <div className="text-[#c6d0f5] ml-4">
            <a href="mailto:gdgoncampus.vit@gmail.com" className="underline hover:text-pink-300 transition-colors">
              gdgoncampus.vit@gmail.com
            </a>
          </div>
        </div>
      </div>
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bootSequence) {
      const fullBootText = bootMessages.join('\n');
      setBootText(fullBootText);
      
      setTimeout(() => {
        setBootSequence(false);
        inputRef.current?.focus();
      }, 6000); 
    }
  }, [bootSequence]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory, bootText]);

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
    } else if (baseCommand === 'gdg hackbuild') {
      if (args.length === 2) {
        // Main hackbuild command without showing the banner
        response = [
          <div key="hackbuild-main" className="output w-full text-[#c6d0f5] animate-fadein">
            <span key="hackbuild-title" className="font-bold text-pink-300">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
            <span key="hackbuild-desc" className="text-[#babbf1] block mt-2">Type 'gdg hackbuild info' to see complete information about our upcoming hackathon.</span>
            <span key="hackbuild-subcmds" className="block mt-3 text-green-300 font-semibold">Available subcommands:</span>
            <ul key="hackbuild-list" className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#c6d0f5] flex flex-col sm:flex-row">
                <span className="text-blue-300 font-mono font-bold sm:w-56 flex-shrink-0">info</span>
                <span className="text-[#babbf1] sm:ml-2 mt-1 sm:mt-0"> - View complete hackathon information</span>
              </li>
              {hackbuildSubcommands.map(({ cmd, desc }) => (
                <li key={cmd} className="text-[#c6d0f5] flex flex-col sm:flex-row">
                  <span className="text-blue-300 font-mono font-bold sm:w-56 flex-shrink-0">{cmd}</span>
                  <span className="text-[#babbf1] sm:ml-2 mt-1 sm:mt-0"> - {desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ];
      } else if (args[2] === '--info') {
        response = hackbuildResponses['info'];
      } else if (args[2] === '--domains') {
        response = hackbuildResponses['--domains'];
      } else if (args[2] === '--registration') {
        response = hackbuildResponses['--registration'];
      } else if (args[2] === '--rulebook') {
        response = hackbuildResponses['--rulebook'];
      } else if (args[2] === '--dates') {
        response = hackbuildResponses['--dates'];
      } else if (args[2] === '--prizes') {
        response = hackbuildResponses['--prizes'];
      } else if (args[2] === '--timeline') {
        response = hackbuildResponses['--timeline'];
      } else if (args[2] === '--sponsors') {
        response = hackbuildResponses['--sponsors'];
      } else if (args[2] === '--info') {
        // For backward compatibility
        response = hackbuildResponses['info'];
        response.push(<span key="deprecated-notice" className="text-yellow-300 mt-2">Note: The '--info' flag is deprecated. Please use 'gdg hackbuild info' instead.</span>);
      } else {
        response = [
          <div key="unknown-cmd" className="output text-red-300 animate-fadein">
            Unknown subcommand for 'gdg hackbuild'.
            <span className="block">Type 'gdg hackbuild' to see available subcommands.</span>
          </div>
        ];
      }
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
      <BootScreen bootMessages={bootMessages} gdgBanner={gdgBanner} />
    );
  }

  return (
    <TerminalMain
      terminalRef={terminalRef}
      inputRef={inputRef}
      gdgBanner={gdgBanner}
      hackbuildBanner={hackbuildBannerText}
      commandHistory={commandHistory}
      currentPath={currentPath}
      currentCommand={currentCommand}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default Terminal;