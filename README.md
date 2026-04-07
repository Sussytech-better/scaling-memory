# ⛏️ Minecraft Plugin Maker

An intelligent Minecraft plugin generator that creates complete, production-ready plugins from simple descriptions using Claude AI.

Generate plugins for **Bukkit/Spigot**, **Paper Server**, **Minecraft Forge**, and **Fabric** instantly!

## Features

- **AI-Powered Generation**: Describe your plugin idea and Claude AI creates it
- **Multiple Framework Support**: 
  - 🪓 **Bukkit/Spigot** - Classic Java server plugins
  - 📄 **Paper Server** - High-performance server plugins
  - ⚙️ **Minecraft Forge** - Mod development
  - 🧵 **Fabric Mod** - Modern modding framework
- **Complete Scaffolding**: All necessary files, configs, and documentation
- **Web Interface**: Beautiful, easy-to-use HTML interface - no installation needed!

## Quick Start (Web Version)

🌐 **No installation required!** Just open the HTML file in your browser:

1. **Download or clone** this repository
2. **Open `plugin-maker.html`** in your web browser (double-click it)
3. **Get your API key** from [console.anthropic.com](https://console.anthropic.com)
4. **Paste your API key** in the form
5. **Describe your plugin** - Be specific about what it should do
6. **Choose plugin type** - Bukkit, Paper, Forge, or Fabric
7. **Name your plugin** - e.g., `CustomTitles` or `AntiCheat`
8. **Click Generate** - AI creates your complete plugin!
9. **Copy or download** the generated files

## Quick Start (CLI Version)

For those who prefer the command line:

1. **Clone the repository**:
```bash
git clone https://github.com/Sussytech-better/scaling-memory.git
cd scaling-memory
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set your API key**:
```bash
export ANTHROPIC_API_KEY=your-key-here
```

4. **Run the plugin maker**:
```bash
npm run cli
```

## What Gets Generated

Each plugin includes:
- **Source code** - Complete, documented Java implementation
- **Configuration files** - plugin.yml, pom.xml, build.gradle, etc.
- **Commands & Events** - Fully functional command handlers and event listeners
- **Config system** - YAML configuration support where applicable
- **README.md** - Setup and installation instructions
- **Error handling** - Proper logging and exception handling

## Plugin Type Details

### 🪓 Bukkit/Spigot
Perfect for server-side plugins! Generates:
- `plugin.yml` with metadata and commands
- `pom.xml` with Bukkit API dependency
- Main plugin class extending `JavaPlugin`
- Command handlers with permission support
- Event listeners

**Example**: Custom permission system, player warps, economy system

### 📄 Paper Server
High-performance plugins for Paper servers! Generates:
- `plugin.yml` configuration
- `build.gradle` setup
- Async task handling
- Paper-specific optimizations
- Advanced event handling

**Example**: Server admin tools, anti-cheat, performance monitoring

### ⚙️ Minecraft Forge
Comprehensive mod development! Generates:
- `build.gradle` for Forge
- Mod main class with `@Mod` annotation
- Block/Item registries
- Event handlers
- `mods.toml` metadata

**Example**: Custom tools, blocks, items, dimensions

### 🧵 Fabric
Modern modding with Fabric API! Generates:
- `build.gradle` for Fabric
- `fabric.mod.json` configuration
- Mod initializer class
- Entrypoints and event handlers
- Config system support

**Example**: Custom crafting recipes, new features, quality of life mods

## Examples

### Create a Custom Title Plugin (Bukkit)
```
Description: A plugin that gives players custom titles with /title command, supports colors and animations

Type: Bukkit/Spigot
Name: CustomTitles

→ AI generates complete plugin with:
   - /title <player> <text> <color> command
   - Title system with animations
   - Permission support
   - Configuration file
```

### Create an Anti-Cheat Mod (Fabric)
```
Description: An anti-cheat mod that detects flying, speed hacking, and unrealistic inventory changes

Type: Fabric Mod
Name: AntiCheat

→ AI generates complete mod with:
   - Player movement detection
   - Inventory monitoring
   - Configuration system
   - Admin notifications
```

## File Structure

```
.
├── plugin-maker.html      # 🌐 Web interface (just open in browser!)
├── src/                   # CLI source code
│   ├── index.ts           # CLI entry point
│   ├── server.ts          # Express server
│   └── generator.ts       # Plugin generation logic
├── static/                # Web server static files
│   └── index.html         # Legacy web interface
├── plugins/               # Generated plugins output directory
├── package.json
├── tsconfig.json
└── README.md
```

## Getting an API Key

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in with your account
3. Click "API Keys" in the sidebar
4. Click "Create Key"
5. Copy your key (looks like `sk-ant-...`)
6. Paste it in the plugin maker form

**Note**: You may need to add a payment method to your account.

## Requirements

- **Web Version**: Just a modern web browser (Chrome, Firefox, Edge, Safari)
- **CLI Version**: 
  - Node.js 18+
  - npm or yarn
  - Anthropic API key

## Tips for Best Results

- 📝 **Be specific** - Describe exactly what commands, features, and behavior you want
- 🎯 **Include examples** - "A /warp command that saves player locations and lets them teleport"
- ⚙️ **Mention mechanics** - Permission levels, configuration options, databases
- 🧪 **Review generated code** - Always test the plugin before using on a live server
- 🔧 **Customize** - The generated code is a solid foundation to build upon

## Common Use Cases

- 🎮 **Game Mechanics** - Custom games, minigames, survival features
- 👥 **Player Management** - Warnings, bans, permissions, player data
- 💰 **Economy Systems** - Currency, shops, auctions, trade
- 🛡️ **Server Security** - Anti-cheat, anti-grief, DDoS protection
- 🎨 **Cosmetics** - Custom skins, titles, effects, animations
- 🗺️ **World Features** - Custom dimensions, biomes, structures

## Troubleshooting

### "API Key Error"
- Make sure your key starts with `sk-ant-`
- Verify you have a payment method on your Anthropic account
- Try generating a new key

### "Failed to Generate"
- Check your API key is correct
- Make sure you filled all fields
- Check your internet connection
- Try a simpler description first

### Generated Code Won't Compile
- Ensure you have the correct JDK version (Java 16+ recommended)
- Check you have all dependencies installed
- For Bukkit: Make sure you're using the right Bukkit/Spigot version
- Review the generated README for specific setup instructions
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