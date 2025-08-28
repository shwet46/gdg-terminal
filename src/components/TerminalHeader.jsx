import React from 'react';

const TerminalHeader = () => (
  <div className="mb-4 pb-2 bg-none flex items-center">
    <span className="text-[#a6e3a1] font-bold text-sm sm:text-base md:text-lg tracking-wide break-words">
      <span className="hidden sm:inline">
        Welcome to our terminal, get some real Developer experience ~/
      </span>
      <span className="sm:inline">
        &nbsp;type 'gdg help' for commands. <br/>
      </span>
      <span className="ml-2 text-[#f9e2af] italic hidden sm:inline">
        (Or just keep clicking around, like a true GUI enthusiast.)
      </span>
    </span>
  </div>
);

export default TerminalHeader;