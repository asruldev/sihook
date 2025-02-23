import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../src";

describe("useCounter", () => {
  it("should initialize counter with default value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 2 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  });

  it("should not go below min value", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0, min: 0 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it("should not exceed max value", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5, max: 5 }));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it("should reset counter", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 3 }));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(3);
  });
});