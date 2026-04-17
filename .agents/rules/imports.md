---
trigger: always_on
glob: "**/*"
description: Rules for file naming, imports, and barrel exports.
---

# File Naming and Exports

To maintain a clean and modular codebase with short import paths, follow these rules:

## File Naming
- **Entry Points**: The main file within any component or feature directory must satisfy the name `index.tsx` (or `index.ts`).
- **Barrel Exports**: Every directory should contain an `index.ts` (or `index.tsx`) file that acts as a central export point (barrel).

## Export Patterns
- **Re-exporting**: Each `index` file must re-export all relevant members (components, types, hooks, utils) from its subdirectories or sibling files.
  - Example: `export * from './MyComponent';`
- **Short Paths**: Always import from the directory level rather than specific nested files, leveraging the barrel exports to keep paths as short as possible.
  - **Preferred**: `import { Button } from '@/features/auth/components/atoms';`
  - **Avoid**: `import { Button } from '@/features/auth/components/atoms/Button/index';`

## Best Practices
- **Encapsulation**: Use barrel files to hide internal implementation details of a folder.
- **Consistency**: Ensure every new folder created includes an `index` file if it's meant to be consumed externally.
