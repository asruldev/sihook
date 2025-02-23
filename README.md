
# 🪄 sihook 🍪

**"Hooks like eating cookies" 🍪✨**

`sihook` is a collection of hooks designed to simplify React app development with TypeScript. This package provides a set of useful and ready-to-use hooks to handle common needs in your React applications, making your coding life sweeter! 😄

## 🚀 Installation

To install `sihook`, you can use either NPM or Yarn.

### Using NPM

```bash
npm install sihook
```

### Using Yarn

```bash
yarn add sihook
```

## 💡 Features

- **useLocalStorage**: A hook to easily store and retrieve data from `localStorage`. 🗄️
- **useWindowSize**: A hook to monitor the window size in real-time. 🖥️
- **useDebounce**: A hook to apply debouncing to functions for performance optimization. ⏱️

## 🛠️ Usage Examples

### `useLocalStorage`

Store and retrieve values with ease using `localStorage`! 🔐

```tsx
import { useLocalStorage } from 'sihook';

const MyComponent = () => {
  const [value, setValue] = useLocalStorage('myKey', 'defaultValue');

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('newValue')}>Set Value</button>
    </div>
  );
};
```

### `useWindowSize`

Keep track of your window size in real-time, and create responsive layouts! 📏

```tsx
import { useWindowSize } from 'sihook';

const MyComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};
```

### `useDebounce`

Prevent excessive API calls or re-renders by debouncing your functions! 🐢

```tsx
import { useDebounce } from 'sihook';

const MyComponent = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced Search: {debouncedSearch}</p>
    </div>
  );
};
```

## 📚 Documentation

Each hook in `sihook` comes with clear documentation and usage examples. For more detailed information, check out the repository documentation.

## 🤝 Contributing

We 💖 contributions from the community! If you'd like to contribute, feel free to open an issue or submit a pull request.

## 📝 License

MIT License. See the [LICENSE](LICENSE) file for more details.
