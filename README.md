# sihook 🍪

**sihook** adalah kumpulan custom hooks untuk React yang ringan dan mudah digunakan. Dibuat untuk meningkatkan produktivitas dalam pengembangan aplikasi React dengan pendekatan yang simpel dan efisien.

## ✨ Fitur
- 📌 Hooks siap pakai untuk state management, efek, dan event handling.
- 🚀 Performant & ringan.
- ⚛️ Sepenuhnya kompatibel dengan React dan TypeScript.

## 📦 Instalasi

Gunakan npm, yarn, atau pnpm untuk menginstal **sihook**:

```sh
npm install sihook
```
```sh
yarn add sihook
```
```sh
pnpm add sihook
```

## 🚀 Penggunaan

### 1. useCounter
Hook sederhana untuk menangani counter.

```tsx
import { useCounter } from "sihook";

export default function CounterComponent() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### 2. useToggle
Hook untuk toggle nilai boolean.

```tsx
import { useToggle } from "sihook";

export default function ToggleComponent() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOpen ? "Tutup" : "Buka"}</button>
    </div>
  );
}
```

## 📜 Lisensi

MIT License © 2025 [Asrul Harahap](https://github.com/asruldev)

