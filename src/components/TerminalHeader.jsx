import React from 'react';

const TerminalHeader = () => (
  <div className="mb-4 pb-2 bg-none flex items-center">
    <span className="text-green-300 font-bold text-sm sm:text-base md:text-lg tracking-wide break-words">
      <span className="hidden sm:inline">Welcome to our terminal, get some real Developer experience ~/</span>
      <span className="sm:inline">  type 'gdg help' for commands.</span>
    </span>
  </div>
);

export default TerminalHeader;