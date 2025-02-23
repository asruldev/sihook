import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useKeyboard } from "../src";

describe("useKeyboard", () => {
    it("should call callback when the specified key is pressed", () => {
      const callback = vi.fn();
      renderHook(() => useKeyboard("Enter", callback));
  
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      window.dispatchEvent(event);
  
      expect(callback).toHaveBeenCalled();
    });
  
    it("should not call callback when a different key is pressed", () => {
      const callback = vi.fn();
      renderHook(() => useKeyboard("Enter", callback));
  
      const event = new KeyboardEvent("keydown", { key: "Escape" });
      window.dispatchEvent(event);
  
      expect(callback).not.toHaveBeenCalled();
    });
  
    it("should remove event listeners on cleanup", () => {
      const callback = vi.fn();
      const { unmount } = renderHook(() => useKeyboard("Enter", callback));
  
      unmount();
      
      const event = new KeyboardEvent("keydown", { key: "Enter" });
      window.dispatchEvent(event);
  
      expect(callback).not.toHaveBeenCalled();
    });
  });