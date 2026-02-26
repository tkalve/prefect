# Prefect

A lightweight React component that replaces the standard `<pre>` element with built-in line numbering, syntax-aware formatting, and developer-friendly enhancements.

## Features

✨ **Line Numbers** - Automatic line numbering with no configuration needed  
📱 **Responsive** - Works seamlessly on all screen sizes  
♿ **Accessible** - Built with WCAG accessibility standards in mind  
🎨 **Customizable** - Easy to style with CSS or CSS Modules  
⚡ **Lightweight** - Minimal dependencies, optimized for performance

## Installation

```bash
npm install @tkalve/prefect
# or
yarn add @tkalve/prefect
# or
pnpm add @tkalve/prefect
```

## Quick Start

```tsx
import { Prefect } from "@tkalve/prefect";

export function App() {
  const codeExample = `function hello() {
  console.log("Hello, world!");
}`;

  return <Prefect value={codeExample} />;
}
```

## Usage

### Basic Example

```tsx
import { Prefect } from "@tkalve/prefect";

const code = `const greeting = "Hello, Prefect!";
console.log(greeting);`;

export function CodeBlock() {
  return <Prefect value={code} />;
}
```

### With Custom Styling

```tsx
import { Prefect } from "@tkalve/prefect";
import styles from "./MyCodeBlock.module.scss";

export function StyledCodeBlock() {
  return (
    <Prefect
      value="console.log('styled code');"
      className={styles.customCodeBlock}
    />
  );
}
```

## Props

| Prop        | Type     | Description                               |
| ----------- | -------- | ----------------------------------------- |
| `value`     | `string` | **Required.** The code content to display |
| `className` | `string` | Optional CSS class for custom styling     |

## Styling & Customization

All Prefect styles are easily customizable using CSS custom properties (variables). Pass a `className` prop to your Prefect component and override any of the variables below.

### CSS Custom Properties

#### Colors

| Property                 | Default (Light)    | Default (Dark)           | Description              |
| ------------------------ | ------------------ | ------------------------ | ------------------------ |
| `--prefect-bg`           | `#fafafa`          | `#1e1e1e`                | Background color         |
| `--prefect-text`         | `#000000`          | `#d4d4d4`                | Text/code color          |
| `--prefect-number-color` | `#9aa0a6`          | `#555555`                | Line number color        |
| `--prefect-border-color` | `#e5e5e5`          | `#333333`                | Border and divider color |
| `--prefect-hover-bg`     | `rgba(0,0,0,0.03)` | `rgba(255,255,255,0.05)` | Hover background         |

#### Spacing

| Property                       | Default | Description        |
| ------------------------------ | ------- | ------------------ |
| `--prefect-padding-vertical`   | `1rem`  | Top/bottom padding |
| `--prefect-padding-horizontal` | `0`     | Left/right padding |
| `--prefect-margin`             | `0`     | Outer margin       |

#### Line Numbers

| Property                         | Default | Description                         |
| -------------------------------- | ------- | ----------------------------------- |
| `--prefect-number-padding-left`  | `1rem`  | Left padding of line number         |
| `--prefect-number-padding-right` | `1rem`  | Right padding of line number        |
| `--prefect-number-min-width`     | `3ch`   | Minimum width of line number column |
| `--prefect-number-text-align`    | `right` | Alignment of line numbers           |
| `--prefect-number-border-width`  | `1px`   | Width of divider line               |

#### Code Content

| Property                         | Default  | Description                  |
| -------------------------------- | -------- | ---------------------------- |
| `--prefect-content-padding-left` | `1.5rem` | Left padding of code content |
| `--prefect-content-text-align`   | `left`   | Alignment of code text       |

#### Typography

| Property                  | Default                 | Description   |
| ------------------------- | ----------------------- | ------------- |
| `--prefect-font-family`   | `"Consolas", monospace` | Font family   |
| `--prefect-font-size`     | `14px`                  | Font size     |
| `--prefect-line-height`   | `1.6`                   | Line height   |
| `--prefect-border-radius` | `8px`                   | Border radius |

### Simple Customization Example

```scss
.darkCodeBlock {
  --prefect-bg: #1a1a1a;
  --prefect-text: #e0e0e0;
  --prefect-number-color: #666;
  --prefect-border-color: #333;
  --prefect-padding-vertical: 1.5rem;
  --prefect-padding-horizontal: 1rem;
  --prefect-font-size: 13px;
}
```

```tsx
import { Prefect } from "@tkalve/prefect";
import styles from "./MyCodeBlock.module.scss";

export function DarkCodeBlock() {
  return (
    <Prefect
      value="console.log('custom styled code');"
      className={styles.darkCodeBlock}
    />
  );
}
```

### Theme Variants

Use the `dark` or `light` class names to force a theme:

```tsx
<Prefect value={code} className="dark" />
<Prefect value={code} className="light" />
```

## Accessibility

Prefect is built with accessibility in mind:

- Line numbers are marked with `aria-hidden="true"` to avoid redundant screen reader announcements
- Proper semantic HTML structure
- Respects system contrast preferences
- Empty lines are preserved with zero-width spaces for proper spacing

## Browser Support

Modern browsers supporting ES2020 and React 19+

## Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/tkalve/prefect/pulls).

## License

MIT © [Thomas Kalve](https://github.com/tkalve)

## Repository

- **GitHub**: [tkalve/prefect](https://github.com/tkalve/prefect)
- **npm**: [@tkalve/prefect](https://www.npmjs.com/package/@tkalve/prefect)
