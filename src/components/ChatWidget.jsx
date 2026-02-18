import React from 'react';
import chaticon from '../assets/chaticon.png';

const ChatWidget = ({ setIsChatOpen }) => {
  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open chat"
        style={{ background: 'transparent' }}
      >
        <img src={chaticon} alt="Chat Icon" className="w-8 h-8" loading="eager" />
      </button>

      {/* Chat Widget Panel */}
      <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 w-full sm:w-96 max-w-sm md:max-w-sm h-96 md:h-[500px] bg-gray-800 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col z-40 transition-all duration-200">
        {/* Header */}
        <div className="bg-gray-900 rounded-t-2xl md:rounded-t-3xl p-4 md:p-6 border-b border-gray-700 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105">
              <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
              </svg>
            </div>
            <span className="font-semibold text-white text-base md:text-lg truncate">AIFA Chat</span>
          </div>
        </div>

        {/* AIFA Message */}
        <div className="flex gap-2 md:gap-3 p-4 md:p-6">
          <div className="w-7 md:w-8 h-7 md:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="bg-gray-700 rounded-xl md:rounded-2xl p-3 md:p-4 max-w-xs">
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Hi! I'm AIFA 👋 Whether you're learning AI or building the next big thing, I'm here to help. What would you like to know about AIFAG or LifeOS?
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-gray-900 rounded-b-2xl md:rounded-b-3xl p-3 md:p-4 border-t border-gray-700 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm border border-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-200"
            />
            <button className="w-9 md:w-10 h-9 md:h-10 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0" aria-label="Send message">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.98722099 L3.03521743,10.4282144 C3.03521743,10.5853118 3.03521743,10.7424092 3.50612381,10.7424092 L16.6915026,11.5279961 C16.6915026,11.5279961 17.1624089,11.5279961 17.1624089,12.0992883 C17.1624089,12.6705804 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>

  );
}

export default ChatWidget;
