---
trigger: always_on
glob: "**/*"
description: Screaming Architecture and project folder structure rules.
---

# Project Structure: Screaming Architecture

The project follows a **Screaming Architecture**, organized by **features**. Every feature should be self-contained within its own directory (typically under `src/features/` or similar).

## Feature Folders
Each feature folder must be subdivided into:
- `components/`: Following Atomic Design principles:
  - `atoms/`
  - `molecules/`
  - `organisms/`
  - `templates/`
  - *Note: Each component should have its own subdirectory containing `index.tsx` and `types.ts` (if required).*
- `pages/`: Feature-specific page components.
- `utils/`: Utility functions specific to the feature.
- `services/`: API services and external data logic.
- `hooks/`: Custom hooks relevant to the feature.

## Design Principles
- **Encapsulation**: Keep all feature-specific logic within its folder.
- **Atomic Components**: Use the atoms/molecules/organisms/templates hierarchy for UI.
- **Clear Intent**: The folder structure should "scream" what the application does, not just technical implementation details.
