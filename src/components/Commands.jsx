import React from 'react';

const Commands = () => {
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
      url: 'https://gdgvitm.tech/',
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
      <a href="https://spectrum.gdgvitm.tech/" className="underline hover:text-pink-300 transition-colors">spectrum.gdgvitm.tech</a>
    ],
    'gdg socials': [
      <div key="gdg-socials-list" className="output w-full text-[#c6d0f5] animate-fadein">
        <span className="font-bold text-pink-300">Follow us on social media:</span>
        <ul className="links list-none pl-0 mt-2 mb-2">
          {socialsList.map((social, idx) => (
            <li key={social.name} className="mb-1 text-[#f2d5cf] font-medium">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-pink-300 transition-colors break-all"
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
      <div key="resources-list" className="output w-full text-[#c6d0f5] animate-fadein">
        <span className="font-bold text-green-300">📚 Study Resources Commands:</span>
        <div className="mt-3 mb-3">
          <div className="text-[#f2d5cf] mb-3">💡 Type any of these commands to access study resources:</div>
          <ul className="list-none pl-0 mt-2 space-y-1">
            {Object.entries(resourceCommands).map(([command, resource]) => (
              <li key={command} className="text-[#c6d0f5] flex flex-col sm:flex-row">
                <span className="text-blue-300 font-mono font-bold sm:w-36 lg:w-40 flex-shrink-0">{command}</span>
                <span className="text-[#babbf1] sm:ml-2 mt-1 sm:mt-0"> - {resource.description}</span>
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
    'gdg contact': ['For collaboration or queries, please reach out to us at:', <a href="mailto:gdgoncampus.vit@gmail.com" className="underline hover:text-pink-300 transition-colors break-all">gdgoncampus.vit@gmail.com</a>],
  };

  const hackbuildBanner = `
██╗  ██╗  █████╗   ██████╗ ██╗  ██╗ ██████╗  ██╗   ██╗ ██╗ ██╗      ██████╗ 
██║  ██║ ██╔══██╗ ██╔════╝ ██║ ██╔╝ ██╔══██╗ ██║   ██║ ██║ ██║      ██╔══██╗
███████║ ███████║ ██║      █████╔╝  ██████╔╝ ██║   ██║ ██║ ██║      ██║  ██║
██╔══██║ ██╔══██║ ██║      ██╔═██╗  ██╔══██╗ ██║   ██║ ██║ ██║      ██║  ██║
██║  ██║ ██║  ██║ ╚██████╗ ██║  ██╗ ██████╔╝ ╚██████╔╝ ██║ ███████╗ ██████╔╝
╚═╝  ╚═╝ ╚═╝  ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═════╝  ╚═╝ ╚══════╝ ╚═════╝ 
`;

  const hackbuildSubcommands = [
    { cmd: 'gdg hackbuild --domains', desc: 'Show Hackbuild domains' },
    { cmd: 'gdg hackbuild --registration', desc: 'Register for Hackbuild' },
    { cmd: 'gdg hackbuild --rulebook', desc: 'View Hackbuild rulebook' },
    { cmd: 'gdg hackbuild --dates', desc: 'Show Hackbuild dates' },
    { cmd: 'gdg hackbuild --prizes', desc: 'Show Hackbuild prizes' },
    { cmd: 'gdg hackbuild --timeline', desc: 'Show Hackbuild timeline' },
    { cmd: 'gdg hackbuild --sponsors', desc: 'Show Hackbuild sponsors' },
  ];

  return {
    availableCommands,
    resourceCommands,
    socialsList,
    commandResponses,
    hackbuildBanner,
    hackbuildSubcommands,
  };
};

export default Commands;