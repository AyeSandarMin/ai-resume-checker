import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex lg:flex-row w-full flex-col h-screen lg:justify-around lg:overflow-hidden">
      {/* Sidebar Skeleton */}
      <div className="lg:w-90 w-full lg:flex-shrink-0 lg:h-full h-auto">
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#ffffff] to-[#3d84a8] text-white lg:h-full min-h-fit">
          {/* Logo skeleton */}
          <div className="pb-4">
            <div className="animate-pulse w-30 h-7 bg-white/30 rounded"></div>
          </div>
          
          {/* Score section skeleton */}
          <div className="mt-6 lg:mt-12 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="animate-pulse w-24 h-24 bg-white/30 rounded-full mb-4"></div>
              <div className="animate-pulse h-6 w-32 bg-white/30 rounded"></div>
            </div>
            <div className="animate-pulse text-xl lg:text-2xl font-bold mb-4 lg:mb-8 pt-4 text-center h-8 w-40 bg-white/20 rounded mt-4"></div>
          </div>
          
          {/* Summary skeleton */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-3">
              <div className="animate-pulse h-5 w-24 bg-white/30 rounded"></div>
              <div className="space-y-2">
                <div className="animate-pulse h-3 w-full bg-white/20 rounded"></div>
                <div className="animate-pulse h-3 w-4/5 bg-white/20 rounded"></div>
                <div className="animate-pulse h-3 w-3/5 bg-white/20 rounded"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="animate-pulse h-5 w-32 bg-white/30 rounded"></div>
              <div className="space-y-2">
                <div className="animate-pulse h-3 w-full bg-white/20 rounded"></div>
                <div className="animate-pulse h-3 w-5/6 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content skeleton */}
      <div className="flex-1 lg:overflow-y-auto overflow-visible">
        <div className="p-4 sm:p-6 bg-gray-50 lg:min-h-screen min-h-fit">
          {/* Header with button */}
          <div className="flex justify-end">
            <div className="animate-pulse h-10 w-32 bg-gray-200 rounded-lg"></div>
          </div>
          
          {/* Main content card */}
          <div className="gradient-border p-4 sm:p-6 lg:p-8 mt-4 shadow-md">
            {/* Title */}
            <div className="my-5">
              <div className="animate-pulse h-8 w-80 max-w-full bg-gray-200 rounded mb-2"></div>
            </div>
            
            {/* Content sections */}
            <div className="space-y-6 lg:space-y-8">
              {/* ATS Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="animate-pulse h-6 w-24 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-8 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 w-4/5 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                  <div className="animate-pulse h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Details section */}
              <div className="space-y-4">
                <div className="animate-pulse h-6 w-32 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="animate-pulse h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-4/5 bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="animate-pulse h-5 w-24 bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="animate-pulse h-5 w-28 bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-4/5 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="animate-pulse h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resume preview skeleton */}
            <div className="feedback-section items-center justify-center mt-6 lg:mt-8">
              <div className="gradient-border p-4 sm:p-6 lg:p-8 max-sm:m-0 lg:h-[90%] max-xl:h-fit w-full lg:w-fit">
                <div className="w-full h-64 lg:h-96 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 bg-gray-300 animate-pulse rounded mx-auto mb-2"></div>
                    <div className="h-4 w-32 bg-gray-300 animate-pulse rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;