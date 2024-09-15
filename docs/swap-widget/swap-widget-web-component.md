Certainly! Here's a markdown version of the Skip Go Widget Web Component documentation:

# Skip Go Widget: Web Component

For applications not using React, the Skip:Go Widget is available as a web component.

## Installation

You can use the web component by either importing it from `@skip-go/widget-web-component` or using a script tag / CDN link.

### Option 1: Import from npm package

```typescript
import('@skip-go/widget-web-component');
```

**Note:** Ensure Node has enough memory allocated to load the package:

```bash
NODE_OPTIONS=--max-old-space-size=32384
```

### Option 2: Use script tag (Recommended)

```html
<body>
  <script
    async
    src="https://unpkg.com/@skip-go/widget-web-component/build/index.js"
    type="module"
  ></script>
</body>
```

## Usage

After installation, you can use the `swap-widget` web component:

```html
<swap-widget></swap-widget>
```

## Props

The props for the web component are the same as `SwapWidgetProps`, but they should be passed as attributes in kebab-case as strings or stringified objects.

## Example

```html
<div style="width:450px;height:820px;">
  <swap-widget
    theme='{
      "backgroundColor": "#191A1C",
      "textColor": "#E6EAE9",
      "borderColor": "#363B3F",
      "brandColor": "#FF4FFF",
      "highlightColor": "#1F2022"
    }'
    default-route='{
      "srcChainID": "osmosis-1",
      "srcAssetDenom": "ibc/1480b8fd20ad5fcae81ea87584d269547dd4d436843c1d20f15e00eb64743ef4"
    }'
  ></swap-widget>
</div>
```

This example demonstrates how to use the `swap-widget` web component with custom theme and default route settings.

[Source](https://docs.skip.build/go/widget/web-component)
