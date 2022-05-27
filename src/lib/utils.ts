const factors: Record<string, number> = {
  B: 1,
  KB: 1024,
  MB: Math.pow(1024, 2),
  GB: Math.pow(1024, 3),
  TB: Math.pow(1024, 4),
};

export function convertToByte(value: number, unit: string) {
  return value * (factors[unit] || 1);
}

export function removeHighlight(title: string): string {
  return title.replace(/<span class="keyword">([^<]*)<\/span>/g, '$1');
}

/**
 * EelItem Model
 * @typedef {object} EelItem
 * @description Infomation of item scraped from DMHY list view
 * @property {string} id
 * @property {string} title
 * @property {string} group
 * @property {string} groupId
 * @property {string} time
 * @property {string} category
 * @property {string} categoryId
 * @property {string} uploader
 * @property {string} uploaderId
 * @property {number} seeder
 * @property {number} leecher
 * @property {number} completed
 * @property {number} size
 * @property {string} magnet
 * @property {string} color
 */
export interface EelItem {
  id?: string;
  title?: string;
  group?: string;
  groupId?: string;
  time?: string;
  category?: string;
  categoryId?: string;
  uploader?: string;
  uploaderId?: string;
  seeder?: number;
  leecher?: number;
  completed?: number;
  size?: number;
  magnet?: string;
  color?: string;
}

/**
 * SearchOption Model
 * @typedef {object} SearchOption
 * @description those 3 advanced search option selectors
 * @property {string} value.required
 * @property {string} label.required
 * @property {string} color
 */
interface SearchOption {
  value: string;
  label: string;
  color?: string;
}

/**
 * SearchOptions Model
 * @typedef {object} SearchOptions
 * @property {array<SearchOption>} categories.required
 * @property {array<SearchOption>} groups.required
 * @property {array<SearchOption>} orders.required
 */
export interface SearchOptions {
  categories: SearchOption[];
  groups: SearchOption[];
  orders: SearchOption[];
}
