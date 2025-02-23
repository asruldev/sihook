import { renderHook, act } from "@testing-library/react";
import { vi } from 'vitest';
import { useFilterParams } from "../src";

// Setup mock for window and history before each test
beforeEach(() => {
  vi.stubGlobal('window', {
    location: {
      search: '',
    },
    history: {
      replaceState: vi.fn(),
    },
  });
});

describe('useFilterParams', () => {
  it('should initialize query with default values', () => {
    const initQuery = { filter1: 'value1', filter2: 'value2' };
    const { result } = renderHook(() => useFilterParams(initQuery));

    expect(result.current.query).toEqual(initQuery);
  });

  it('should update query and URL when setting query data', () => {
    const { result } = renderHook(() => useFilterParams());

    act(() => {
      result.current.setQueryData('newValue', 'filter1');
    });

    expect(result.current.query).toEqual({ filter1: 'newValue' });
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      '?filter1=newValue'
    );
  });

  it('should update query and URL when setting object query data', () => {
    const { result } = renderHook(() => useFilterParams());

    act(() => {
      result.current.setQueryData({ filter1: 'value1', filter2: 'value2' }, '', true);
    });

    expect(result.current.query).toEqual({ filter1: 'value1', filter2: 'value2' });
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      '?filter1=value1&filter2=value2'
    );
  });

  it('should clear a specific query param', () => {
    const initQuery = { filter1: 'value1', filter2: 'value2' };
    const { result } = renderHook(() => useFilterParams(initQuery));

    act(() => {
      result.current.clearParams('filter1');
    });

    expect(result.current.query).toEqual({ filter2: 'value2' });
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      '?filter2=value2'
    );
  });

  it('should clear all query params', () => {
    const initQuery = { filter1: 'value1', filter2: 'value2' };
    const { result } = renderHook(() => useFilterParams(initQuery));

    act(() => {
      result.current.clearAllFilters();
    });

    expect(result.current.query).toEqual(initQuery);
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      '?filter1=value1&filter2=value2'
    );
  });

  it('should correctly parse URL search params on initialization', () => {
    // Set mock search params before testing
    window.location.search = '?filter1=value1&filter2=value2';

    const { result } = renderHook(() => useFilterParams());

    expect(result.current.query).toEqual({ filter1: 'value1', filter2: 'value2' });
  });
});
