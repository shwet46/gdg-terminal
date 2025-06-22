import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [currentPath, setCurrentPath] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [bootSequence, setBootSequence] = useState(true);
  const [bootText, setBootText] = useState('');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const gdgBanner = `
 ██████╗ ██████╗  ██████╗     ██╗   ██╗██╗████████╗
██╔════╝ ██╔══██╗██╔════╝     ██║   ██║██║╚══██╔══╝
██║  ███╗██║  ██║██║  ███╗    ██║   ██║██║   ██║   
██║   ██║██║  ██║██║   ██║    ╚██╗ ██╔╝██║   ██║   
╚██████╔╝██████╔╝╚██████╔╝     ╚████╔╝ ██║   ██║   
 ╚═════╝ ╚═════╝  ╚═════╝       ╚═══╝  ╚═╝   ╚═╝   
`;

  const bootMessages = [
    'Initializing GDG VIT Terminal...',
    'Loading kernel modules...',
    'Starting system services...',
    'Mounting filesystems...',
    'Network interfaces up...',
    'Welcome to GDG VIT Terminal v2.0.1',
    '',
    gdgBanner,
    '',
    'Google Developer Group - VIT Mumbai',
    'Building the future, one line of code at a time.',
    '',
    'Type "help" to see available commands.',
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
    'resources': 'Some useful resources by us',
    'gdg contact': 'contact us for collaboration',
  };

  const socialsList = [
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
  ];

  const commandResponses = {
    'whoarewe': [
      'GDG VIT - Google Developer Group at VIT University',
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
     'resources': ['Some useful reources by our developers, we will update it soon ;)'],
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
      }, 4000); // Increased from 2000 to 4000 ms
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
    const baseCommand = args.slice(0, 2).join(' '); // support 'gdg command'

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
    } else if (baseCommand === 'gdg date') {
      response = [new Date().toString()];
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentCommand(e.target.value);
  };

  // Always show the banner at the top after boot
  const Banner = () => (
    <pre className="mb-2 w-full text-left font-bold text-base md:text-lg text-blue-300 select-none drop-shadow" style={{ background: 'none', border: 'none', boxShadow: 'none', margin: 0, padding: 0 }}>
      {gdgBanner}
      <span className="block mt-2 mb-2 text-pink-300 font-bold text-left">Google Developer Group - VIT</span>
    </pre>
  );

  if (bootSequence) {
    return (
      <div className={`min-h-screen bg-[#121313] text-[#c6d0f5] font-['IBM_Plex_Mono',monospace] p-8 flex flex-col${!bootSequence ? ' animate-fadeout' : ''}`}>
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
                    ? "text-blue-300 font-bold"
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
    <div className="min-h-screen w-full bg-[#121313] text-[#c6d0f5] font-['IBM_Plex_Mono',monospace] p-8 flex flex-col items-start">
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto w-full max-w-[80ch] bg-none"
      >
        {/* Terminal header */}
        <div className=" mb-4 pb-2 bg-none flex items-center">
          <span className="text-green-300 font-bold text-base md:text-lg ml-2 tracking-wide">Welcome to our terminal, experience some bash :)</span>
        </div>
        {/* Banner always visible */}
        <Banner />

        {/* Command history */}
        {commandHistory.map((entry, index) => (
          <div key={index} className="mb-2 w-full">
            <div className="flex items-center w-full">
              <span className="text-red-400 font-bold">developer@gdgvit</span>
              <span className="text-[#c6d0f5] ml-1">:</span>
              <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
              <span className="text-[#c6d0f5] ml-2">$</span>
              <span className="text-[#B5BFE2] font-medium ml-2">{entry.command}</span>
            </div>
            <div className="ml-0 mt-1 w-full">
              {entry.response.map((line, lineIndex) =>
                React.isValidElement(line) ? (
                  <React.Fragment key={lineIndex}>{line}</React.Fragment>
                ) : (
                  <div
                    key={lineIndex}
                    className="output w-full max-w-[80ch] text-[#c6d0f5] animate-fadein"
                  >
                    {line}
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        {/* Current command line */}
        <div className="flex items-center w-full mt-2">
          <span className="text-red-400 font-bold">developer@gdgvit</span>
          <span className="text-[#c6d0f5] ml-1">:</span>
          <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
          <span className="text-[#c6d0f5] ml-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none text-[#B5BFE2] font-['IBM_Plex_Mono',monospace] font-medium flex-1 text-base ml-2 focus:outline-[#babbf1] caret-[#f2d5cf] caret-[10px]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-[#B5BFE2] text-[0.95rem] bg-none mt-10 border-t border-[#626880] pt-4 w-full text-left">
        <p>GDG VIT Terminal v1.0.1 | Built with Caffinee and JavaScript</p>
        <p className="text-[#f2d5cf] animate-fade">Click anywhere to focus • Type 'gdg help' for commands</p>
      </footer>
      <style>{`
        @keyframes fade {
          0% { opacity: 0}
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 2s;
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein {
          animation: fadein 0.8s;
        }
      `}</style>
    </div>
  );
};

export default Terminal;