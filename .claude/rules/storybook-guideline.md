# Storybook Guideline

## Story Structure

- **Always define a `Playground` story as the first export.** This is an `args`-based story so that users can interactively test a single component instance via the Controls panel in the Docs tab.
- **Do NOT create individual stories for each prop value** (e.g. `Default`, `Secondary`, `Outline` as separate stories).
  - Instead, group related states into a single render story (e.g. `AllVariants`, `Sizes`).
- **Group stories by prop or concern**, such as:
  - `AllVariants` — all visual variants side by side
  - `Sizes` — all size options
  - `Icons` / `IconPositions` — icon-related combinations
  - `Disabled` — disabled states across variants
- Keep the number of stories minimal and scannable. Each story should demonstrate a meaningful dimension of the component.

## argTypes & Descriptions

- Always define `argTypes` for all public props.
- Write `description` values in **English**.
- Include `table.type.summary` and `table.defaultValue.summary` for documentation clarity.

Example:

```ts
argTypes: {
  variant: {
    description: 'Visual style of the button.',
    control: 'select',
    options: ['primary', 'secondary'],
    table: {
      type: { summary: '"primary" | "secondary"' },
      defaultValue: { summary: 'primary' },
    },
  },
}
```

## Language

- All `description` text and Storybook labels should be written in **English**.
- Button labels and content inside stories should also use **English** (e.g. "Search", "Delete", not "検索", "削除").

## Render Stories

- Use `render: () => (...)` for grouped display stories.
- Use `name` property for human-readable story titles (e.g. `name: 'All Variants'`).
- Use Tailwind utility classes (`flex`, `gap-4`, `items-center`, etc.) for layout inside render stories.

## Meta Configuration

- Always include `tags: ['autodocs']` to enable auto-generated documentation.
- Set `parameters: { layout: 'centered' }` unless the component requires full-width layout.
