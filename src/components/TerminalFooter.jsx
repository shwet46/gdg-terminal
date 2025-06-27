import React from 'react';

const TerminalFooter = () => (
  <footer className="relative text-[#B5BFE2] text-sm mt-10 border-t border-[#626880]/30 pt-6 pb-4 w-full">
    <div className="space-y-3">
      {/* Main terminal info with enhanced styling */}
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-[#7aa2f7] rounded-full animate-pulse"></span>
        <p className="font-mono">
          <span className="text-[#7aa2f7] font-semibold">GDG VIT Terminal</span>
          <span className="text-[#626880] mx-2">│</span>
          <span className="text-[#9ece6a]">v1.0.1</span>
          <span className="text-[#626880] mx-2">│</span>
          <span className="text-[#f7768e]">Built with Caffine and JavaScript</span>
          <span className="text-[#626880] text-xs ml-2">(not Go or Rust)</span>
        </p>
      </div>

      {/* Interactive help text with better animation */}
      <div className="flex items-center gap-2">
        <span className="text-[#bb9af7]">›</span>
        <p className="text-[#f2d5cf] font-mono text-sm">
          <span className="animate-pulse">Click anywhere to focus</span>
          <span className="text-[#626880] mx-2">•</span>
          <span className="text-[#7dcfff]">Type </span>
          <code className="bg-transparent px-2 py-0.5 rounded text-[#9ece6a] border border-[#626880]/20">
            gdg help
          </code>
          <span className="text-[#7dcfff]"> for commands</span>
        </p>
      </div>

      {/* Enhanced copyright with terminal styling */}
      <div className="flex items-center justify-between pt-3 border-t border-[#626880]/20">
        <p className="text-xs text-[#626880] font-mono">
          <span className="text-[#bb9af7]">©</span> 2025 
          <span className="text-[#7aa2f7] ml-1">Google Developer Groups VIT Mumbai</span>
          <span className="ml-2 text-[#565f89]">All rights reserved</span>
        </p>
        
        {/* Terminal status indicator */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#9ece6a] rounded-full animate-pulse"></div>
            <span className="text-[#626880]">Online</span>
          </div>
          <span className="text-[#565f89]">•</span>
          <span className="text-[#565f89] font-mono">Ready</span>
        </div>
      </div>
    </div>

    {/* Subtle glow effect */}
    <div className="absolute inset-0 pointer-events-none opacity-60"></div>
  </footer>
);

export default TerminalFooter;