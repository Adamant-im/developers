---
title: BEM methodology
---

# BEM methodology

We follow the **BEM (Block, Element, Modifier)** methodology for class naming, with one minor exception: instead of using the `-` prefix for modifiers, we use `--`.

https://en.bem.info/methodology

## Example

BEM in action:

```vue
<template>
  <!-- Block-->
  <div class="wallet-page">
    <!-- Element -->
    <div class="wallet-page__send-button">Send BTC</div>
    <!-- Element + Modifier -->
    <div class="wallet-page__send-button wallet-page__send-buttom--disabled">
      Send ETH
    </div>
  </div>
</template>
```

**Explanation:**

- **Block**: Represents the parent entity or a standalone component.<br>
  Example: `wallet-page`
- **Element**: Represents a child part of the block.<br>
  Example: `wallet-page__send-button`
- **Modifier**: Represents a variation or state of the block or element.<br>
  Example: `wallet-page__send-button--disabled`

## Difference from standard BEM

- In standard BEM, modifiers use a single dash (`-`), like `block__element-modifier`.
- In our implementation, modifiers use a double dash (`--`) for better readability: `block__element--modifier`.

## Links

- [BEM Docs](https://en.bem.info/methodology)
