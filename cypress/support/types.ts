// This file defines reusable TypeScript interfaces/types.
// Having one central file for types is a best practice because:
//  - You define common data shapes clearly, once, in one place.
//  - You avoid duplication and inconsistencies across the project.
//  - Types become easy to maintain and extend as your project grows.
//
// Only add types/interfaces here if they're used multiple times across your tests or framework.
// Types that are used only in one place can remain within their specific files.

export interface EnvConfig {
  readonly baseUrl: string;
  readonly env: {
    readonly email: string;
    readonly password: string;
    readonly envName: 'env1' | 'env2';
  };
}

export interface Coords {
  x: number;
  y: number;
}
