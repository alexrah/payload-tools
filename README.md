# @alexrah/payload-tools

A collection of utility tools for Payload CMS v3 applications.

## Installation

Install the package using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm add @alexrah/payload-tools

# Using npm
npm install @alexrah/payload-tools

# Using yarn
yarn add @alexrah/payload-tools
```

## Available Tools

### pinoPrettyLogger

A utility function that creates a pre-configured Pino logger with pretty printing for development environments.

#### Usage (with Payload CMS)

`src/payload.config.ts`
```typescript

import { pinoPrettyLogger } from '@alexrah/payload-tools';

export default buildConfig({
  //[...],
  logger: pinoPrettyLogger('my-app'),
})

```

#### Usage (standalone)

```typescript
import { pinoPrettyLogger } from '@alexrah/payload-tools';

// Create a logger instance
const logger = pinoPrettyLogger('my-app');

// Log messages
logger.info('Application started');
logger.warn('This is a warning');
logger.error('An error occurred', { error: new Error('Something went wrong') });
```

#### Configuration

The logger can be configured using the following environment variables:

- `DISABLE_LOGGING`: Set to 'true' to disable all logging
- `PAYLOAD_LOG_LEVEL`: Set the minimum log level (default: 'info')

#### Features

- Colorized output for better readability
- Timestamps in local time
- Clean, developer-friendly formatting
- Runtime log level configuration
- PM2 process manager compatible

## Development

### Prerequisites

- Node.js (version specified in .nvmrc)
- pnpm (recommended) or npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Building

```bash
pnpm build
```

### Linting

```bash
pnpm lint
```

To automatically fix linting issues:

```bash
pnpm lint:fix
```

## License

ISC © Alessandro Stoppato

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the [GitHub repository](https://github.com/alexrah/payload-tools).
