import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PluginGenerator } from './generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../static')));

const generator = new PluginGenerator();

// API endpoint to generate plugin
app.post('/api/generate', async (req, res) => {
  try {
    const { description, type, name } = req.body;

    if (!description || !type || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`Generating plugin: ${name} (${type})`);

    const pluginCode = await generator.generatePlugin(description, type, name);

    res.json({
      success: true,
      files: pluginCode,
      pluginName: name,
    });
  } catch (error) {
    console.error('Error generating plugin:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to generate plugin',
    });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(PORT, () => {
  console.log(`🔌 Plugin Maker running at http://localhost:${PORT}`);
  console.log(`Make sure ANTHROPIC_API_KEY is set in your environment`);
});
