import { useState, useEffect, useCallback } from "react";

export const useFullscreen = (): [boolean, () => void] => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(!!document.fullscreenElement);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      document.exitFullscreen(); // exitFullscreen doesn't return a promise
    } else {
      document.documentElement?.requestFullscreen(); // Ensure document.documentElement exists
    }
  }, [isFullscreen]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return [isFullscreen, toggleFullscreen];
};
