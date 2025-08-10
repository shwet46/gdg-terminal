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
    { cmd: "--brochure", desc: "Know more about hackathon and its details" },
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
        <span key="hackbuild-desc" className="text-[#fab387] block mt-2">The Annual Flagship Hackathon of GDG On Campus VIT in collaboration with CSI VIT & CESA VIT, bringing together tech innovators, creators, and problem-solvers to build impactful solutions for real-world challenges with industry mentors, experienced judges, and an exciting prize pool.</span>
        <span key="hackbuild-features" className="text-[#c6d0f5] mt-3 block">
          <div>🏆 <span className="text-[#a6e3a1]">Prize Pool:</span> 40k+</div>
          <div>📅 <span className="text-[#a6e3a1]">Dates:</span> 12th August - 23rd August</div>
          <div>📍 <span className="text-[#a6e3a1]">Venue:</span> Vidyalankar Institute of Technology, Mumbai</div>
        </span>
      </div>
    ],
    '--info': [
      <div key="info-flag" className="output w-full text-[#c6d0f5] animate-fadein">
        <span key="hackbuild-title" className="font-bold text-[#f38ba8]">GDG Hackbuild - The Ultimate Hackathon Experience!</span>
        <span key="hackbuild-desc" className="text-[#fab387] block mt-2">We’re bringing together tech innovators, creators, and problem-solvers to build impactful solutions for real-world challenges. With industry mentors, experienced judges, and an exciting prize pool 🏆, this is your chance to shine.</span>
        <span key="hackbuild-features" className="text-[#c6d0f5] mt-3 block">
          <div>📅 <span className="text-[#a6e3a1]">Dates:</span> 12th August - 23rd August</div>
          <div className="text-[#a6e3a1]">📍 <span className="text-[#a6e3a1]">Venue:</span> Vidyalankar Institute of Technology, Mumbai</div>
        </span>
        <span key="deprecated-notice" className="text-[#f9e2af] block mt-2">Note: The '--info' flag is deprecated. Please use 'gdg hackbuild info' instead.</span>
      </div>
    ],
    '--domains': [
      <div key="domains" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">Hackbuild 2025 - Competition Domains</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">🌐 Web & App Development</div>
          <div className="text-[#c6d0f5] ml-4">
            Build innovative web/app applications, platforms, and tools.<br />
          </div>
          <div className="text-[#a6e3a1]">🤖 AI/ML</div>
          <div className="text-[#c6d0f5] ml-4">
            Develop intelligent systems and machine learning solutions.<br />
          </div>
          <div className="text-[#a6e3a1]">🔗 Blockchain</div>
          <div className="text-[#c6d0f5] ml-4">
            Build decentralized applications and smart contracts.<br />
          </div>
        </div>
      </div>
    ],
    '--registration': [
      <div key="registration" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">Registration Information</div>
        <div className="space-y-2">
          <div className="text-[#f9e2af]">🚀 Registration is open!</div>
          <div className="text-[#c6d0f5]">• Team Size: 2-4 members</div>
          <div className="text-[#c6d0f5]">
            • Registration Link:{" "}
            <a
              href="https://hackbuild.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#f38ba8] transition-colors break-all"
              style={{ color: '#f38ba8', fontWeight: 500 }}
            >
              Devfolio Registration
            </a>
          </div>
          <div className="text-[#a6e3a1] mt-3">Stay tuned to our socials for updates!</div>
        </div>
      </div>
    ],
    '--brochure': [
      <div key="brochure" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">Hackbuild 2025 - Brochure</div>
        <div className="space-y-3">
          <div className="text-[#f9e2af] mt-3">📄 Checkout our brochure for detailed info about hackathon:</div>
          <div>
            <a
              href="https://spectrum.gdgvitm.tech/Hackbuild-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#f38ba8] transition-colors break-all"
              style={{ color: '#f38ba8', fontWeight: 500 }}
            >
              Hackbuild 2025 Brochure (PDF)
            </a>
          </div>
        </div>
      </div>
    ],
    '--dates': [
      <div key="dates" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">📅 Hackbuild 2025 - Important Dates</div>
        <div className="space-y-2">
          <div className="text-[#a6e3a1]">August 8: Registration Opens</div>
          <div className="text-[#a6e3a1]">August 12: Round 1 Launch & Problem Statement Release</div>
          <div className="text-[#a6e3a1]">August 16: Abstract Submission Deadline</div>
          <div className="text-[#a6e3a1]">August 19: Results Announcement (Round 1)</div>
          <div className="text-[#a6e3a1]">August 20: Round 2 Kickoff & Problem Statement Allocation</div>
          <div className="text-[#a6e3a1]">August 20–22: Development Period</div>
          <div className="text-[#a6e3a1]">August 22: Midway Showcase (Offline)</div>
          <div className="text-[#a6e3a1]">August 23: Finals, Pitching & Awards</div>
          <div className="text-[#f9e2af] mt-3">📧 Follow our socials for exact dates and updates!</div>
        </div>
      </div>
    ],
    '--prizes': [
      <div key="prizes" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">🏆 Hackbuild 2025 - Prize Pool</div>
        <div className="space-y-3">
          <div className="text-[#f9e2af]">Total Prize Pool: ₹40,000+ (Cash & Goodies)</div>
        </div>
      </div>
    ],
    '--timeline': [
      <div key="timeline" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">⏰ Hackbuild 2025 - Event Timeline</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1] font-bold mb-2">🏆 Competition Structure</div>
          <div className="text-[#a6e3a1]">Round 1 – Online Abstract Submission (Online)</div>
          <div className="text-[#c6d0f5] ml-4">
            Free participation for all registered teams<br />
            Abstract submission based on common released problem statement<br />
            Selection: 35 teams advance to Round 2
          </div>
          <div className="text-[#a6e3a1] mt-2">Round 2 – Development Phase (Hybrid)</div>
          <div className="text-[#c6d0f5] ml-4">
            Fee: ₹200 per team (shortlisted teams only)<br />
            Venue: Vidyalankar Institute of Technology<br />
            Format: Remote coding + Offline mentorship session<br />
            Selection: 10–12 teams advance to finals
          </div>
          <div className="text-[#a6e3a1] mt-2">Round 3 – Final Pitching & Awards (Offline)</div>
          <div className="text-[#c6d0f5] ml-4">
            Format: Live pitch presentations<br />
            Judging: Industry experts and experienced judges<br />
            Outcome: Winners announced with prize distribution
          </div>
          <div className="text-[#f38ba8] font-bold mt-4 mb-2">📅 Detailed Timeline</div>
          <div className="text-[#a6e3a1]">August 12, 2025 – Round 1 Launch</div>
          <div className="text-[#c6d0f5] ml-4">
            Problem statement release for all registered teams on WhatsApp group.<br />
            Submission format: PPT, PDF, or Word document<br />
            Word limit: 300–700 words<br />
            Plagiarism threshold: ≤ 8%<br />
            Submission will be taken through Devfolio<br />
            <span className="text-[#f9e2af]">Note: This abstract is only for Round 1 qualification. Actual hackathon will have different problem statements.</span>
          </div>
          <div className="text-[#a6e3a1] mt-2">August 16, 2025 – Submission Deadline</div>
          <div className="text-[#c6d0f5] ml-4">
            11:59 PM – Final deadline for abstract submission<br />
            Registration closes for new participants
          </div>
          <div className="text-[#a6e3a1] mt-2">August 19, 2025 – Results Day</div>
          <div className="text-[#c6d0f5] ml-4">
            8:00 PM – Announcement of shortlisted teams<br />
            35 teams selected for Round 2
          </div>
          <div className="text-[#a6e3a1] mt-2">August 20, 2025 – Round 2 Kickoff</div>
          <div className="text-[#c6d0f5] ml-4">
            11:00 AM – Main problem statement list release<br />
            2:00 PM – Final problem statement allocation<br />
            Development phase begins (remote)
          </div>
          <div className="text-[#a6e3a1] mt-2">August 20–22, 2025 – Development Period</div>
          <div className="text-[#c6d0f5] ml-4">
            Teams work remotely on their solutions (90% of work should be done)<br />
            Deadline: 3:00 PM, August 22nd
          </div>
          <div className="text-[#a6e3a1] mt-2">August 22, 2025 – Midway Showcase</div>
          <div className="text-[#c6d0f5] ml-4">
            Venue: VIT Campus (Offline)<br />
            Time: 3:45 PM – 7:45 PM<br />
            Progress showcase, mentorship session, judge feedback
          </div>
          <div className="text-[#a6e3a1] mt-2">August 23, 2025 – Evaluation & Finals</div>
          <div className="text-[#c6d0f5] ml-4">
            Morning (9:00 AM – 1:30 PM):<br />
            Updated solution presentation & evaluation<br />
            Shortlisting of top 10–12 teams for finals<br />
            Afternoon (2:30 PM onwards):<br />
            Final pitch presentations<br />
            Awards ceremony & winner declaration
          </div>
        </div>
      </div>
    ],
    '--sponsors': [
      <div key="sponsors" className="output w-full text-[#c6d0f5] animate-fadein">
        <div className="text-[#f38ba8] font-bold mb-3">Hackbuild 2025 - Sponsors & Partners</div>
        <div className="space-y-3">
          <div className="text-[#a6e3a1]">💠 The Sponsors: Devfolio, EthIndia, Polygon, Top Club, .xyz</div>
          <div className="text-[#a6e3a1]">🤝 Community Partners: GDG Cloud Mumbai, CSI VIT, CESA VIT</div>
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
