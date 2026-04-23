# Google Material Symbols

Material Symbols are Google's newest icons, consolidating over 2,500 glyphs into a single font file with a wide range of design variants.

## Usage

To use an icon, use a `span` or `i` tag with the class `material-symbols-rounded` (or the variant configured in `layout.tsx`) and the icon name as the text content.

### Basic Example

```tsx
<span className="material-symbols-rounded">
  visibility
</span>
```

### With Tailwind CSS

You can use Tailwind to style the size and color:

```tsx
<span className="material-symbols-rounded text-primary text-2xl">
  settings
</span>
```

### Common Icons for this Project

- `visibility`: Show password
- `visibility_off`: Hide password
- `check_circle`: Success / Verified
- `error`: Error / Warning
- `arrow_forward`: Next / Go
- `arrow_back`: Back

## Configuration

The icons are loaded via Google Fonts in the `RootLayout` (`src/app/layout.tsx`):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
```

> [!TIP]
> Always use the `material-symbols-rounded` class to ensure consistent styling across the application.
