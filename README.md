# dmhy-get-api-unofficial

Yet another [DMHY](https://share.dmhy.org/) scraper

[![npm](https://img.shields.io/npm/v/dmhy-get-api-unofficial.svg)](https://www.npmjs.com/package/dmhy-get-api-unofficial)

[Swagger Doc](https://garden.yinyan.fr/swagger)

[Demonstration](https://garden.yinyan.fr/)

[Built in React UI](https://github.com/yinyanfr/dmhy-alt-ui-unofficial)

## Quick Start

```
npm install dmhy-get-api-unofficial
```

### Use the express app or router

```typescript
import { dmhyRouter } from "dmhy-get-api-unofficial" // router
import { app as yourApp } from "dmhy-get-api-unofficial" // express app instance
```

### Use the scraper

```typescript
import { scrapeDMHYList } from "dmhy-get-api-unofficial"
```

```typescript
interface DMHYSearchQuery {
  keyword?: string | number;
  sort_id?: string | number;
  team_id?: string | number;
  user_id?: string | number;
  order?: 'date-desc' | 'date-asc' | 'rel';
  page?: string | number;
}

async function scrapeDMHYList(
  queries: DMHYSearchQuery = {},
  options: Record<string, unknown> = {},
): Promise<string> // return the html text
```

### Use the parser

```typescript
import { parseDMHYList, parseDMHYSearchOptions } from "dmhy-get-api-unofficial"
```

- parseDMHYSearchOptions(): returns directly the advanced search options (see swagger).
- parseDMHYList(html: string): returns info scraping from list view (see swagger). 
