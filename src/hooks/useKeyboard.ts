import { useEffect } from "react";

/**
 * useKeyboard - Hook untuk menangani event keyboard
 * @param {string | string[]} keys - Key yang akan dipantau
 * @param {Function} callback - Fungsi yang dipanggil saat key ditekan atau dilepas
 * @param {"keydown" | "keyup" | "both"} eventType - Jenis event yang ingin dideteksi (default: "keydown")
 * @param {boolean} enabled - Apakah hook aktif atau tidak (default: true)
 */
export function useKeyboard(
  keys: string | string[],
  callback: (event: KeyboardEvent) => void,
  eventType: "keydown" | "keyup" | "both" = "keydown",
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled) return;

    const keyList = Array.isArray(keys) ? keys : [keys];

    const handleEvent = (event: KeyboardEvent) => {
      if (keyList.includes(event.key)) {
        callback(event);
      }
    };

    if (eventType === "both" || eventType === "keydown") {
      window.addEventListener("keydown", handleEvent);
    }
    if (eventType === "both" || eventType === "keyup") {
      window.addEventListener("keyup", handleEvent);
    }

    return () => {
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("keyup", handleEvent);
    };
  }, [keys, callback, eventType, enabled]);
}
