#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { createInterface } from 'readline';
import { PluginGenerator } from './generator.js';
import chalk from 'chalk';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
  console.clear();
  console.log(chalk.bold.cyan('🔌 AI Plugin Maker\n'));
  console.log(chalk.gray('Create plugins by describing what you want!\n'));

  const generator = new PluginGenerator();

  // Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log(chalk.yellow('⚠️  ANTHROPIC_API_KEY not set in environment variables'));
    console.log(chalk.gray('Set it before running: export ANTHROPIC_API_KEY=your-key\n'));
  }

  try {
    // Get plugin description
    console.log(chalk.bold('What would you like your plugin to do?'));
    console.log(chalk.gray('(Describe the plugin functionality in detail)\n'));
    const description = await question(chalk.cyan('📝 Plugin description: '));

    if (!description.trim()) {
      console.log(chalk.red('❌ Plugin description cannot be empty'));
      rl.close();
      return;
    }

    // Get plugin type
    console.log(chalk.bold('\nWhat type of plugin?\n'));
    console.log(chalk.gray('1. VS Code Extension'));
    console.log(chalk.gray('2. Node.js Module'));
    console.log(chalk.gray('3. Browser Extension'));
    console.log(chalk.gray('4. Generic JavaScript'));

    const typeChoice = await question(chalk.cyan('\nSelect (1-4): '));
    const pluginTypes = ['vscode', 'nodejs', 'browser', 'javascript'];
    const pluginType = pluginTypes[parseInt(typeChoice) - 1] || 'javascript';

    // Get plugin name
    const pluginName = await question(chalk.cyan('\n📛 Plugin name (e.g., my-awesome-plugin): '));

    if (!pluginName.trim()) {
      console.log(chalk.red('❌ Plugin name cannot be empty'));
      rl.close();
      return;
    }

    console.log(chalk.bold.blue('\n⚙️  Generating your plugin...\n'));

    // Generate plugin
    const pluginCode = await generator.generatePlugin(description, pluginType, pluginName);

    // Save plugin
    const pluginDir = path.join('plugins', pluginName);
    await fs.ensureDir(pluginDir);

    // Write generated files
    for (const [filename, content] of Object.entries(pluginCode)) {
      const filePath = path.join(pluginDir, filename);
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, content);
      console.log(chalk.green(`✓ Created ${filename}`));
    }

    console.log(chalk.bold.green(`\n✅ Plugin created successfully!\n`));
    console.log(chalk.cyan(`📂 Location: ${pluginDir}`));
    console.log(chalk.cyan(`📦 Files generated: ${Object.keys(pluginCode).join(', ')}\n`));
    console.log(chalk.gray('Next steps:'));
    console.log(chalk.gray(`1. cd ${pluginDir}`));
    console.log(chalk.gray('2. npm install'));
    console.log(chalk.gray('3. Review and customize the generated code\n'));
  } catch (error) {
    if (error instanceof Error) {
      console.log(chalk.red(`❌ Error: ${error.message}`));
    } else {
      console.log(chalk.red('❌ An unexpected error occurred'));
    }
  } finally {
    rl.close();
  }
}

main();
