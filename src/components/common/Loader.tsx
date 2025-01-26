import React from "react";

interface LoaderProps {
  size?: string; // e.g., "w-8 h-8" for custom sizes
  color?: string; // e.g., "border-blue-500" for custom colors
  fullscreen?: boolean; // Show loader fullscreen or inline
}

export const Loader: React.FC<LoaderProps> = ({
  size = "w-8 h-8",
  color = "border-blue-500",
  fullscreen = false,
}) => {
  if (fullscreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div
          className={`inline-block ${size} border-4 border-t-transparent rounded-full animate-spin ${color}`}
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <div
      className={`inline-block ${size} border-4 border-t-transparent rounded-full animate-spin ${color}`}
      role="status"
    ></div>
  );
};
