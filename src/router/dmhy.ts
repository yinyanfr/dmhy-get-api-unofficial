import express from 'express';
import { parseDMHYList, parseDMHYSearchOptions } from '../lib';
import { scrapeDMHYList } from '../service';

const app = express.Router();

/**
 * EelItem List Response Model
 * @typedef {object} EelItemListResponse
 * @property {array<EelItem>} data
 */

/**
 * GET /api/list
 * @summary get the item list
 * @tags DMHY
 * @param {string} keyword.query - keyword
 * @param {string} sort_id.query - category
 * @param {string} team_id.query - group
 * @param {string} user_id.query - uploader
 * @param {string} order.query - order - enum:date-desc,date-asc,rel
 * @param {string} page.query - page
 * @return {EelItemListResponse} 200 - success response
 * @return {object} 400 - Bad Request
 * @return {object} 404 - Not Found
 */
app.get('/list', async (req, res) => {
  const html = await scrapeDMHYList(req.query);
  const list = await parseDMHYList(html);
  res.send({ data: list });
});

/**
 * SearchOptions Response Model
 * @typedef {object} SearchOptionsResponse
 * @property {SearchOptions} data
 */

/**
 * GET /api/options
 * @summary retrieve the SearchOptions
 * @tags list
 * @security Token
 * @return {SearchOptionsResponse} 200 - success response
 * @return {object} 400 - Bad Request
 * @return {object} 404 - Not Found
 */
app.get('/options', (_, res) => {
  const options = parseDMHYSearchOptions();
  res.send({ data: options });
});

export default app;
