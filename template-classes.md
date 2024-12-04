---
title: Template classes
---

# Template classes

When using same class name in multiple places inside a template, it is adviced to store them in a `className` and `classes` to reuse it inside a template.

- Class names are defined in one place and reused throughout the template
- Reduces the chance of typos or inconsistencies in class names
- Makes it easier to refactor class names when changes are required

## Example

❌ Bad:

```vue
<template>
  <div className="settings-page">
    <v-checkbox label="Use fastest node" class="settings-page__checkbox" />
    <v-checkbox label="Use sockets" class="settings-page__checkbox" />
  </div>
</template>
```

✅ Good:

```vue
<template>
  <div :className="classes.root">
    <v-checkbox label="Use fastest node" :class="classes.settingCheckbox" />
    <v-checkbox label="Use sockets" :class="classes.settingCheckbox" />
  </div>
</template>

<script lang="ts">
const className = "settings-page";
const classes = {
  root: className,
  checkbox: `${className}__checkbox`,
};

export default defineComponent({
  setup() {
    return { classes };
  },
});
</script>
```

**Notes:**

- The `classes` object must be defined outside the component definition.
- Ensure you return the `classes` object in the `setup()` method to access it in the template.
- We use [BEM](/classes-bem) methodology for class naming.
