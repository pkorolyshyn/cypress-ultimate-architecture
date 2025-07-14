## Cypress Ultimate Architecture (BDD + TypeScript Version)

This is an additional version [BDD Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/bdd-version) expands the BDD framework by integrating TypeScript, providing stronger type safety, clearer code, and better maintainability.

## 🚀 Quick Start

```bash
git clone https://github.com/pkorolyshyn/cypress-ultimate-architecture.git
cd cypress-ultimate-architecture
git checkout bdd-typescript-version
npm install
npx cypress open
```

Happy BDD + TypeScript Testing! 😊

### 🌟 What's Different in This Edition?

- **💻 Full TypeScript Support**
  All core framework components, test files, and configurations have been adapted to TypeScript, ensuring you get instant IDE feedback, autocompletion, and fewer runtime errors.

- **📁 Clear TypeScript Project Setup**
  `tsconfig.json` optimized for modern projects:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "node",
    "strict": true,
    "incremental": true,
    "allowJs": true,
    "esModuleInterop": true
  }
}
```

- **📑 Dedicated Type Definitions**
  A structured `types.ts` for reusable interfaces:

```typescript
export interface EnvConfig {
  baseUrl: string;
  env: {
    email: string;
    password: string;
    envName: 'env1' | 'env2';
  };
}
```

- **🛠️ Extended Global Declarations**
  An `index.d.ts` file clearly documents third-party module types and global Cypress extensions:

```typescript
declare module '@cypress/grep/src/support';
declare module 'allure-cypress/reporter';
declare module 'eslint-plugin-cypress';
declare module '@typescript-eslint/parser';

declare namespace Cypress {
  interface EndToEndConfigOptions {
    hideXHRInCommandLog?: boolean;
  }
}
```

- **🔎 ESLint Optimized for TypeScript**

### 🎯 Why Choose TypeScript?

- ✅ **Fewer Debuging, Less Guesswork:** Catch errors before runtime.
- ✅ **Improved Developer Experience:** Autocomplete, refactoring, and in-editor documentation.
- ✅ **Maintainable Codebase:** Clearer intent and easier onboarding for new engineers.

## 📁 Related Projects

- [Main Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture) — includes all core features with JavaScript
- [Main TypeScript Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/main-typescript-version) — includes all core features with TypeScript
- [BDD Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/bdd-version) — includes all core features with JavaScript and BDD
