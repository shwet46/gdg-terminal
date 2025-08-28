import React, { useState, useEffect, useRef } from 'react';
import BootScreen from './BootScreen';
import TerminalMain from './TerminalMain';
import Commands from './Commands';
import HackbuildCommands from './HackbuildCommands';
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

  const hackbuildBannerTextLocal = `
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
    '',
    'Made with high dose of caffeine by Shweta <3',
    'still terminal is processing....',
  ];

  const {
    availableCommands,
    resourceCommands,
    socialsList,
    commandResponses,
  } = Commands();

  const {
    handleHackbuildCommand
  } = HackbuildCommands();

  const [clearCommand, setClearCommand] = useState('');

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
        response = [
          'We will reveal about it soon ;)',
          'Something really excitingg !'
        ];
      } else {
        response = handleHackbuildCommand(args.slice(2));
      }
    } else if (baseCommand === 'gdg help') {
      response = [
        <div key="help-main" className="output w-full animate-fadein text-[#c6d0f5]">
          <div className="text-[#f38ba8] font-bold mb-4 text-xl">GDG VIT Terminal - Available Commands</div>
          
          <div className="space-y-4">
            <div className="text-[#fab387] font-semibold text-lg">General Commands:</div>
            <div className="grid gap-2 ml-4">
              {Object.entries(availableCommands).map(([cmd, desc]) => (
                <div key={cmd} className="flex flex-col sm:flex-row">
                  <span className="text-[#a6e3a1] font-mono font-bold sm:w-48 flex-shrink-0">{cmd}</span>
                  <span className="text-[#6c7086] sm:ml-4 mt-1 sm:mt-0">- {desc}</span>
                </div>
              ))}
            </div>

            <div className="text-[#fab387] font-semibold text-lg mt-6">Special Commands:</div>
            <div className="grid gap-2 ml-4">
              <div className="flex flex-col sm:flex-row">
                <span className="text-[#a6e3a1] font-mono font-bold sm:w-48 flex-shrink-0">clear</span>
                <span className="text-[#6c7086] sm:ml-4 mt-1 sm:mt-0">- Clear the terminal screen</span>
              </div>
            </div>

          <div className="text-[#f38ba8] mt-4 mb-2">NOTES:</div>
          <div className="ml-2 space-y-1 text-[#6c7086]">
            <div>Use arrow keys (↑/↓) to navigate command history</div>
            <div>Commands are case-insensitive</div>
            <div>External links open in new tabs</div>
          </div>
          </div>
        </div>
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
      hackbuildBanner={hackbuildBannerTextLocal}
      commandHistory={commandHistory}
      currentPath={currentPath}
      currentCommand={currentCommand}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default Terminal;