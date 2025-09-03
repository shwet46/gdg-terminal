import React, { useEffect, useRef, useState } from 'react';

// Thick blinking block cursor implementation
const TerminalInput = ({
  inputRef,
  currentCommand,
  onInputChange,
  onKeyDown,
  currentPath
}) => {
  const measureRef = useRef(null);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (measureRef.current) {
      setCursorLeft(measureRef.current.offsetWidth);
    }
  }, [currentCommand]);

  return (
    <div className="flex flex-wrap items-center w-full mt-2 min-w-0">
      <div className="flex items-center flex-shrink-0 mr-2 mb-1 sm:mb-0">
        <span className="text-red-400 font-bold text-sm sm:text-base">developer@gdgvitm</span>
        <span className="text-[#c6d0f5] ml-1">:</span>
        <span className="text-blue-300 font-bold ml-1">{currentPath}</span>
        <span className="text-[#c6d0f5] ml-2">$</span>
      </div>
      <div className="relative flex-1 min-w-0 mb-1 sm:mb-0">
        <input
          ref={inputRef}
          type="text"
            value={currentCommand}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="bg-transparent border-none outline-none text-[#B5BFE2] font-['IBM_Plex_Mono',monospace] font-medium w-full min-w-0 text-sm sm:text-base focus:outline-[#babbf1] caret-transparent"
          autoComplete="off"
          spellCheck="false"
          style={{ minWidth: '120px' }}
        />
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre font-['IBM_Plex_Mono',monospace] text-sm sm:text-base top-0 left-0"
        >
          {currentCommand}
        </span>
        {focused && (
          <span
            className="terminal-block-cursor"
            style={{ left: cursorLeft }}
          />
        )}
      </div>
    </div>
  );
};

export default TerminalInput;