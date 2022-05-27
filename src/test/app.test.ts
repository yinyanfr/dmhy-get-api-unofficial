import fs from 'fs/promises';
import path from 'path';
import { parseDMHYList } from '../lib';

describe('Parser tests', () => {
  it('should parse list view', async () => {
    const html = await (await fs.readFile(path.join(__dirname, 'seed', 'list.html'))).toString();
    const data = await parseDMHYList(html);
    expect(data).toBeTruthy();
  });
});
