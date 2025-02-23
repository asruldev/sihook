import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useToggle } from "../src";

describe("useToggle", () => {
  it("should toggle state correctly", () => {
    const { result } = renderHook(() => useToggle());

    // Default value should be false
    expect(result.current[0]).toBe(false);

    // Toggle state to true
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);

    // Toggle state back to false
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
  });

  it("should accept an initial state", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });
});
