import Anthropic from '@anthropic-ai/sdk';

export interface PluginFiles {
  [filename: string]: string;
}

export class PluginGenerator {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  async generatePlugin(
    description: string,
    type: string,
    name: string
  ): Promise<PluginFiles> {
    const prompt = this.buildPrompt(description, type, name);

    const message = await this.client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : '';
    return this.parsePluginCode(responseText, type);
  }

  private buildPrompt(description: string, type: string, name: string): string {
    const typeInstructions = this.getTypeInstructions(type);

    return `You are an expert plugin developer. Create a complete, production-ready plugin based on this description:

Plugin Name: ${name}
Plugin Type: ${type}
Description: ${description}

${typeInstructions}

Generate the complete plugin code with all necessary files. Format your response as follows:

FILE: filename.extension
\`\`\`language
code here
\`\`\`

FILE: another_file.json
\`\`\`json
code here
\`\`\`

Make sure to include:
1. All necessary configuration files (package.json, tsconfig.json, manifest.json, etc.)
2. Main implementation files
3. Type definitions if applicable
4. Basic documentation/comments
5. Error handling

Be thorough and create a complete, working plugin.`;
  }

  private getTypeInstructions(type: string): string {
    const instructions: { [key: string]: string } = {
      vscode: `This is a VS Code extension. Include:
- package.json with proper extension metadata
- extension.ts or extension.js as the main entry point
- A simple activation function
- README.md with usage instructions
- .vscode.extension.bak or .vscodeignore file`,

      nodejs: `This is a Node.js module. Include:
- package.json with proper module information
- index.js or index.ts as the main export
- Proper exports and error handling
- README.md with usage examples
- Optional: TypeScript definitions`,

      browser: `This is a browser extension. Include:
- manifest.json (v3)
- background.js or service worker
- popup.html and popup.js if needed
- content.js if needed
- icons folder with icons
- README.md`,

      javascript: `This is a generic JavaScript module. Include:
- package.json
- index.js or index.ts
- README.md with examples
- Optional configuration files`,
    };

    return instructions[type] || instructions.javascript;
  }

  private parsePluginCode(responseText: string, type: string): PluginFiles {
    const files: PluginFiles = {};

    // Extract files from the response
    const filePattern = /FILE:\s*([^\n]+)\n```(?:[\w-]*\n)?([\s\S]*?)```/g;
    let match;

    while ((match = filePattern.exec(responseText)) !== null) {
      const filename = match[1].trim();
      const content = match[2].trim();
      files[filename] = content;
    }

    // If no files were parsed, create a basic structure
    if (Object.keys(files).length === 0) {
      files['index.js'] = responseText;
      files['package.json'] = JSON.stringify(
        {
          name: 'plugin',
          version: '1.0.0',
          main: 'index.js',
        },
        null,
        2
      );
    }

    return files;
  }
}
