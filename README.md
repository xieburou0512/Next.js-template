# Next.js Enterprise Boilerplate

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun)](https://bun.sh)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🚀 A modern, production-ready Next.js 16 enterprise boilerplate with TypeScript, internationalization, PWA support, and best practices built-in.

[English](./README.md) | [简体中文](./README.zh-CN.md)

[Live Demo](https://your-demo-url.com) | [Documentation](./docs) | [Report Bug](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/issues) | [Request Feature](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/issues)

</div>

## ✨ Features

### Core Framework
- ⚡ **Next.js 16.0.7** - Latest App Router with Turbopack support
- ⚛️ **React 18.3** - Modern React features with concurrent rendering
- 🏃 **Bun Runtime** - Ultra-fast JavaScript runtime and package manager
- 📘 **TypeScript 5.9** - Strict type safety with latest features

### Styling & UI
- 🎨 **Tailwind CSS 3.4** - Utility-first CSS framework
- ✨ **Framer Motion** - Production-ready animation library
- 📱 **Responsive Design** - Mobile-first approach with device detection

### Internationalization
- 🌍 **LinguiJS** - Modern i18n solution with compile-time optimization
- 🗣️ **Multi-language** - Built-in English and Simplified Chinese support
- 🔄 **Dynamic routing** - Language-based URL routing with middleware

### State & Data
- 🔄 **SWR** - Powerful data fetching and caching
- 🗄️ **Zustand** - Lightweight state management
- 🌐 **ky** - Modern HTTP client with intuitive API

### Performance & PWA
- 📦 **Serwist** - Service Worker for offline support
- 🚀 **Optimized builds** - Production-ready with bundle analysis
- ⚡ **Turbopack** - Lightning-fast development builds

### Developer Experience
- 🔧 **ESLint + Prettier** - Consistent code style
- 🪝 **Husky + lint-staged** - Git hooks for quality control
- 📝 **Environment configs** - Separate dev/test/prod configurations
- 🎯 **TypeScript paths** - Clean imports with path aliases

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Internationalization](#-internationalization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.17.0 or **Bun** >= 1.0.0
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate.git
cd Next.js-Enterprise-Boilerplate
```

2. **Install dependencies**

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

3. **Set up environment variables**

```bash
cp .env .env.local
# Edit .env.local with your configuration
```

4. **Run development server**

```bash
bun dev
# or
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your app!

## 🛠 Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | [Next.js](https://nextjs.org) | 16.0.7 | React framework with App Router |
| **Runtime** | [Bun](https://bun.sh) | 1.0+ | JavaScript runtime & package manager |
| **Language** | [TypeScript](https://www.typescriptlang.org) | 5.9.3 | Type-safe JavaScript |
| **UI Library** | [React](https://react.dev) | 18.3.1 | Component-based UI |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 3.4.18 | Utility-first CSS |
| **Animation** | [Framer Motion](https://www.framer.com/motion) | 12.23.25 | Motion library |
| **State** | [Zustand](https://github.com/pmndrs/zustand) | 5.0.9 | State management |
| **Data Fetching** | [SWR](https://swr.vercel.app) | 2.3.7 | React Hooks for data |
| **HTTP Client** | [ky](https://github.com/sindresorhus/ky) | 1.14.0 | HTTP client |
| **i18n** | [LinguiJS](https://lingui.dev) | 5.6.1 | Internationalization |
| **PWA** | [Serwist](https://serwist.pages.dev) | 9.2.3 | Service Worker |
| **Utilities** | [ahooks](https://ahooks.js.org) | 3.9.6 | React Hooks collection |
| **Date** | [moment](https://momentjs.com) | 2.30.1 | Date manipulation |
| **Linting** | [ESLint](https://eslint.org) | 8.57.1 | Code linting |
| **Formatting** | [Prettier](https://prettier.io) | 3.7.4 | Code formatting |

## 📁 Project Structure

```
Next.js-Enterprise-Boilerplate/
├── src/
│   ├── app/                          # Next.js 16 App Router
│   │   ├── [lang]/                   # Dynamic language routing
│   │   │   ├── (frame)/              # Layout groups
│   │   │   │   ├── (home)/           # Home page group
│   │   │   │   │   ├── page.tsx      # Home page
│   │   │   │   │   └── hooks/        # Page-specific hooks
│   │   │   │   └── layout.tsx        # Frame layout
│   │   │   ├── layout.tsx            # Language layout
│   │   │   ├── provider.tsx          # Client providers
│   │   │   └── providers.tsx         # Additional providers
│   │   ├── components/               # Shared components
│   │   │   ├── Header/               # Header component
│   │   │   └── Body/                 # Body component
│   │   ├── hooks/                    # App-level hooks
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── not-found.tsx             # 404 page
│   │   └── sw.ts                     # Service Worker config
│   ├── config/                       # Configuration files
│   │   ├── base.ts                   # Base config
│   │   ├── theme.ts                  # Theme settings
│   │   ├── dev/                      # Development config
│   │   └── prod/                     # Production config
│   ├── lingui/                       # i18n setup
│   │   ├── appRouterI18n.ts          # i18n instance
│   │   ├── initLingui.ts             # Lingui initialization
│   │   ├── LinguiClientProvider.tsx  # Client provider
│   │   └── LinguiLink.tsx            # i18n Link component
│   ├── locales/                      # Translation files
│   │   ├── en.po                     # English translations
│   │   └── zh-Hans.po                # Chinese translations
│   ├── service/                      # API services
│   │   ├── index.ts                  # API client (ky)
│   │   └── serverApi.ts              # Server-side API
│   └── middleware.ts                 # Next.js middleware
├── public/                           # Static assets
├── .github/                          # GitHub configurations
├── .nvmrc                            # Node version
├── next.config.mjs                   # Next.js config
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind config
├── lingui.config.ts                  # Lingui config
├── .eslintrc.json                    # ESLint rules
├── bunfig.toml                       # Bun configuration
├── package.json                      # Dependencies
├── CONTRIBUTING.md                   # Contribution guide
├── CHANGELOG.md                      # Version history
└── README.md                         # This file
```

## 🔧 Development

### Available Scripts

```bash
# Development
bun dev                  # Start dev server with Turbopack
bun build                # Build for production
bun start                # Start production server

# Environment-specific builds
bun run build:test       # Build for test environment
bun run build:prod       # Build for production environment

# Code quality
bun lint                 # Run ESLint
bun prettier             # Format code with Prettier

# Internationalization
bun run extract          # Extract translations and commit
bun run extract-test     # Extract translations (test only)

# Bundle analysis
ANALYZE=true bun build   # Analyze bundle size
```

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# App Environment
NEXT_PUBLIC_APP_ENV=dev

# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com

# Optional: Analytics, monitoring, etc.
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Development Best Practices

1. **Type Safety**
   - Always use TypeScript
   - Avoid `any` types
   - Define proper interfaces

2. **Code Style**
   - Follow ESLint rules
   - Run Prettier before committing
   - Use meaningful variable names

3. **Components**
   - Keep components small and focused
   - Use hooks for logic
   - Implement proper error boundaries

4. **Performance**
   - Use dynamic imports for code splitting
   - Optimize images with `next/image`
   - Implement proper caching strategies

## 🌍 Internationalization

This project uses [LinguiJS](https://lingui.dev) for internationalization.

### Supported Languages

- 🇺🇸 English (`en`)
- 🇨🇳 Simplified Chinese (`zh-Hans`)

### Adding Translations

1. **Use the Trans macro in your components:**

```tsx
import { Trans } from '@lingui/macro'

export default function MyComponent() {
  return <Trans>Hello World</Trans>
}
```

2. **Extract translations:**

```bash
bun run extract-test
```

3. **Add translations to `.po` files:**

Edit `src/locales/en.po` and `src/locales/zh-Hans.po`

4. **Commit translations:**

```bash
bun run extract  # Extracts, commits, and pushes
```

### Language Routing

- Default language: English
- URLs are prefixed with language code: `/en/...`, `/zh-Hans/...`
- Language preference is stored in cookies
- Automatic language detection from browser settings

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate)

1. Click the button above
2. Configure environment variables
3. Deploy!

### Docker

```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", "server.js"]
```

### Manual Deployment

```bash
# Build
bun run build:prod

# Start
bun start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed version history.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Vercel](https://vercel.com) - Deployment platform
- [Bun](https://bun.sh) - Fast JavaScript runtime
- All the amazing open-source libraries used in this project

## 📬 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/issues)
- **Discussions**: [Ask questions and share ideas](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/discussions)

---

<div align="center">

Made with ❤️ by [xieburou0512](https://github.com/xieburou0512)

If this project helps you, please give it a ⭐!

</div>
