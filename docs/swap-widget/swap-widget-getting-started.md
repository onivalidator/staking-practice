# Skip Go Widget: Getting Started

## Overview

Skip Go Widget is a powerful tool for onboarding users and capital from anywhere in the world to your corner of the sovereign web. It provides seamless cross-chain bridging, swapping, and transferring functionality in an easy-to-integrate React/Web Component.

Key features:
- Customizable
- Extensible
- Contributor-friendly
- Fully open-sourced

The widget is designed to fit your exact user experience needs. Contributions are welcome through issues or pull requests in the repository, or by joining the Discord community.

## Useful Links

- [Skip Go Repository](https://github.com/skip-mev/skip-go)
- [Next JS App Example](https://github.com/skip-mev/skip-go/tree/main/examples/nextjs)

## Quickstart Guide

### 1. Installation

Install the `@skip-go/widget` package using npm:

```bash
npm install @skip-go/widget
```

If you're using yarn or another package manager that doesn't install peer dependencies by default, you may need to install these as well:

```bash
yarn add react react-dom styled-components
```

### 2. Use the `SwapWidget` Component

Implement the `SwapWidget` component to render the swap interface:

```typescript
import { SwapWidget } from '@skip-go/widget';

const SwapPage = () => {
  return (
    <div
      style={{
        width: '450px',
        height: '820px',
      }}
    >
      <SwapWidget
        theme={{
          brandColor: '#FF4FFF',
        }}
      />
    </div>
  );
};
```

### 3. Configure

After basic setup, you can customize the user experience. All configurable component props can be found in the Configuration Options section of the documentation.

For more detailed information and advanced configuration options, please refer to the [official Skip Go Widget documentation](https://docs.skip.build/go/widget/getting-started).

