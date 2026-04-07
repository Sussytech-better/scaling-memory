# 🔌 AI Plugin Maker

An intelligent plugin generator that creates complete, production-ready plugins from simple descriptions using Claude AI.

## Features

- **AI-Powered Generation**: Describe what you want, and Claude creates the plugin
- **Multiple Plugin Types**: Support for VS Code extensions, Node.js modules, browser extensions, and generic JavaScript plugins
- **Complete Scaffolding**: Generates all necessary files including configuration, source code, and documentation
- **Interactive CLI**: User-friendly command-line interface to guide you through the process

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scaling-memory
```

2. Install dependencies:
```bash
npm install
```

3. Set up your Anthropic API key:
```bash
export ANTHROPIC_API_KEY=your-key-here
```

## Usage

Run the plugin maker:
```bash
npm run dev
```

Or after building:
```bash
npm run build
npm start
```

### Interactive Setup

1. **Describe your plugin**: What functionality do you want?
2. **Choose plugin type**: Select from VS Code, Node.js, Browser, or JavaScript
3. **Name your plugin**: Give it a unique name
4. **Wait for generation**: AI creates all the files
5. **Review and use**: Check the generated code and customize as needed

## Example

```
🔌 AI Plugin Maker

What would you like your plugin to do?
📝 Plugin description: A plugin that converts markdown to HTML with syntax highlighting

What type of plugin?
1. VS Code Extension
2. Node.js Module
3. Browser Extension
4. Generic JavaScript

Select (1-4): 2

📛 Plugin name: markdown-to-html

⚙️  Generating your plugin...
✓ Created package.json
✓ Created index.ts
✓ Created README.md
✓ Created types.ts

✅ Plugin created successfully!
📂 Location: plugins/markdown-to-html
```

## Project Structure

```
.
├── src/
│   ├── index.ts           # Main CLI entry point
│   └── generator.ts       # Plugin generation logic
├── plugins/               # Generated plugins output
├── package.json
├── tsconfig.json
└── README.md
```

## Supported Plugin Types

### VS Code Extension
- Full extension manifest
- TypeScript support
- Activation events
- Commands and contributions

### Node.js Module
- Complete module structure
- TypeScript definitions
- Proper exports
- npm package configuration

### Browser Extension
- Manifest v3 support
- Background/service workers
- Content scripts
- Popup UI

### Generic JavaScript
- Flexible module structure
- Works in Node.js and browsers
- Configuration files

## Requirements

- Node.js 18+
- npm or yarn
- Anthropic API key ([Get one here](https://console.anthropic.com))

## Environment Variables

Create a `.env` file or export:
```bash
ANTHROPIC_API_KEY=your-anthropic-api-key
```

## Generated Files

Each plugin includes:
- **package.json**: Project metadata and dependencies
- **Main source files**: Implementation code for your plugin
- **Configuration files**: Type definitions, build config, etc.
- **README.md**: Documentation and usage examples
- **Type definitions**: If applicable (TypeScript support)

## Customization

After generation, you can:
1. Modify the generated code to fit your specific needs
2. Add additional dependencies
3. Create custom build configurations
4. Add tests and documentation

## Tips

- Be descriptive in your plugin description for better results
- Specify features, use cases, and expected inputs/outputs
- The AI can handle complex plugin requirements
- Review generated code before deployment
- Add your own error handling and testing

## License

MIT

## Support

For issues or questions, please open an issue in the repository.