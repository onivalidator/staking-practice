# Skip Go Widget: Common Questions

## "Buffer is not defined" Error

If you encounter a "Buffer is not defined" error when importing and using `@skip-go/widget`, you may need to polyfill Node.js modules, as the Skip Go Widget relies on them.

Here are some polyfill plugins for common environments:

- Webpack
- Rollup
- Vite
- ESBuild

[Source](https://docs.skip.build/go/widget/common-questions)

# Skip Go Widget: Recommendations

## Wrap the Widget with a Fixed Container

It is recommended to wrap the widget with a container element that has a fixed size. This helps prevent layout shifting, as the widget uses shadow-dom (which currently needs to be rendered client-side).

Example:

```html
<div style="width: 450px; height: 820px;">
  <SwapWidget />
</div>
```