import React from 'react';

const HackbuildCommands = () => {
  const hackbuildBannerText = `
██╗  ██╗  █████╗   ██████╗ ██╗  ██╗ ██████╗  ██╗   ██╗ ██╗ ██╗      ██████╗ 
██║  ██║ ██╔══██╗ ██╔════╝ ██║ ██╔╝ ██╔══██╗ ██║   ██║ ██║ ██║      ██╔══██╗
███████║ ███████║ ██║      █████╔╝  ██████╔╝ ██║   ██║ ██║ ██║      ██║  ██║
██╔══██║ ██╔══██║ ██║      ██╔═██╗  ██╔══██╗ ██║   ██║ ██║ ██║      ██║  ██║
██║  ██║ ██║  ██║ ╚██████╗ ██║  ██╗ ██████╔╝ ╚██████╔╝ ██║ ███████╗ ██████╔╝
╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═════╝  ╚═╝ ╚══════╝ ╚═════╝ 
`;

  // Hackbuild subcommands list
  const hackbuildSubcommands = [
    { cmd: "--domains", desc: "View competition domains and themes" },
    { cmd: "--registration", desc: "Get registration details" },
    { cmd: "--rulebook", desc: "View hackathon rules and guidelines" },
    { cmd: "--dates", desc: "See important event dates" },
    { cmd: "--prizes", desc: "Check prize pool information" },
    { cmd: "--timeline", desc: "View detailed event timeline" },
    { cmd: "--sponsors", desc: "See our sponsors and partners" }
  ];

  // Hackbuild subcommand responses
  const hackbuildResponses = {
    'info': [
      <div key="info" className="output w-full text-[#c6d0f5] animate-fadein">
        <span key="hackbuild-title" className="font-bold text-[#f38ba8]">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
        <span key="hackbuild-desc" className="text-[#fab387] block mt-2">Unleash your creativity, solve real-world problems, and win exciting prizes. Join us for a 24-hour coding marathon packed with innovation, learning, and fun!</span>
        <span key="hackbuild-features" className="text-[#c6d0f5] mt-3 block">
          <div>🏆 <span className="text-[#a6e3a1]">Prize Pool:</span> Will be revealed soon...</div>
          <div>📅 <span className="text-[#a6e3a1]">Date:</span> Coming Soon</div>
          <div>📍 <span className="text-[#a6e3a1]">Venue:</span> VIT Mumbai Campus</div>
        </span>
      </div>
    ],
    '--info': [
      <div key="info-flag" className="output w-full text-[#c6d0f5] animate-fadein">
        <span key="hackbuild-title" className="font-bold text-[#f38ba8]">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
        <span key="hackbuild-desc" className="text-[#fab387] block mt-2">Unleash your creativity, solve real-world problems, and win exciting prizes. Join us for a 24-hour coding marathon packed with innovation, learning, and fun!</span>
        <span key="hackbuild-features" className="text-[#c6d0f5] mt-3 block">
          <div>🏆 <span className="text-[#a6e3a1]">Prize Pool:</span> Will be revealed soon...</div>
          <div>📅 <span className="text-[#a6e3a1]">Date:</span> Coming Soon</div>
          <div>📍 <span className="text-[#a6e3a1]">Venue:</span> VIT Mumbai Campus</div>
        </span>
        <span key="deprecated-notice" className="text-[#f9e2af] block mt-2">Note: The '--info' flag is deprecated. Please use 'gdg hackbuild info' instead.</span>
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
          <div className="text-[#f9e2af]">We have exciting prizes for everyone.</div>
        </div>
      </div>
    ],
    '--timeline': [
      <div key="timeline" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">⏰ Hackbuild 2025 - Event Timeline</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">We will Update on it soon..</div>
        </div>
      </div>
    ],
    '--sponsors': [
      <div key="sponsors" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">🤝 Hackbuild 2025 - Sponsors & Partners</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">Loading....</div>
        </div>
      </div>
    ]
  };

  // Function to handle hackbuild commands
  const handleHackbuildCommand = (args) => {
    if (args.length === 0) {
      // Main hackbuild command without showing the banner
      return [
        <div key="hackbuild-main" className="output w-full text-[#c6d0f5] animate-fadein">
          <span key="hackbuild-title" className="font-bold text-[#f38ba8]">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
          <span key="hackbuild-desc" className="text-[#fab387] block mt-2">Type 'gdg hackbuild info' to see complete information about our upcoming hackathon.</span>
          <span key="hackbuild-subcmds" className="block mt-3 text-[#a6e3a1] font-semibold">Available subcommands:</span>
          <ul key="hackbuild-list" className="list-none pl-0 mt-2 space-y-1">
            <li className="text-[#c6d0f5] flex flex-col sm:flex-row">
              <span className="text-[#fab387] font-mono font-bold sm:w-56 flex-shrink-0">info</span>
              <span className="text-[#6c7086] sm:ml-2 mt-1 sm:mt-0"> - View complete hackathon information</span>
            </li>
            {hackbuildSubcommands.map(({ cmd, desc }) => (
              <li key={cmd} className="text-[#c6d0f5] flex flex-col sm:flex-row">
                <span className="text-[#fab387] font-mono font-bold sm:w-56 flex-shrink-0">{cmd}</span>
                <span className="text-[#6c7086] sm:ml-2 mt-1 sm:mt-0"> - {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ];
    } else if (args[0] === 'info') {
      return hackbuildResponses['info'];
    } else if (args[0] === '--info') {
      return hackbuildResponses['--info'];
    } else if (hackbuildResponses[args[0]]) {
      return hackbuildResponses[args[0]];
    } else {
      return [
        <div key="unknown-cmd" className="output text-[#f38ba8] animate-fadein">
          Unknown subcommand for 'gdg hackbuild'.
          <span className="block">Type 'gdg hackbuild' to see available subcommands.</span>
        </div>
      ];
    }
  };

  return {
    hackbuildBannerText,
    hackbuildSubcommands,
    handleHackbuildCommand
  };
};

export default HackbuildCommands;
