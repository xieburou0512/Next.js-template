# Contributing to Next.js Enterprise Boilerplate

Thank you for your interest in contributing to Next.js Enterprise Boilerplate! We welcome contributions from the community.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Your environment (OS, Node/Bun version, browser)
- Screenshots if applicable

### Suggesting Features

We love new ideas! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Possible implementation approach (optional)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear, concise commit messages
   - Add tests if applicable
   - Update documentation as needed

4. **Test your changes**
   ```bash
   bun run lint
   bun run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Ensure all checks pass

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing ESLint and Prettier configuration
- Use meaningful variable and function names
- Add comments for complex logic

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add dark mode toggle
fix: resolve mobile menu overflow issue
docs: update installation instructions
```

### Project Structure

```
src/
├── app/              # Next.js App Router pages
├── config/           # Configuration files
├── lingui/           # Internationalization setup
├── locales/          # Translation files
├── service/          # API services
└── middleware.ts     # Next.js middleware
```

### Internationalization

When adding new text:

1. Use the `Trans` or `msg` macro from `@lingui/macro`
2. Extract translations:
   ```bash
   bun run extract-test
   ```
3. Add translations to `src/locales/en.po` and `src/locales/zh-Hans.po`

### Environment Variables

- Use `.env` for development
- Use `.env.production` for production settings
- Never commit sensitive data or API keys
- Document new environment variables in README

### Testing

- Write tests for new features
- Ensure existing tests pass
- Maintain or improve code coverage

## Project Setup

### Prerequisites

- Node.js >= 18.17.0 or Bun >= 1.0.0
- Git

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Next.js-Enterprise-Boilerplate.git

# Install dependencies
bun install

# Run development server
bun dev
```

### Available Scripts

```bash
bun dev              # Start development server with Turbopack
bun build            # Production build
bun build:test       # Test environment build
bun build:prod       # Production environment build
bun lint             # Run ESLint
bun prettier         # Format code
bun extract          # Extract and commit translations
bun extract-test     # Extract translations (test only)
```

## Review Process

1. All PRs require at least one review
2. CI checks must pass
3. Code should follow project conventions
4. Documentation should be updated as needed

## Questions?

Feel free to create an issue for any questions or clarifications needed.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
