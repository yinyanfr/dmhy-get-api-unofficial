import request from 'umi-request';
import genericHeaders from './headers';

interface DMHYSearchQuery {
  keyword?: string | number;
  sort_id?: string | number;
  team_id?: string | number;
  user_id?: string | number;
  order?: 'date-desc' | 'date-asc' | 'rel';
  page?: string | number;
}

export async function scrapeDMHYList(
  queries: DMHYSearchQuery = {},
  options: Record<string, unknown> = {},
): Promise<string> {
  return request<string>('https://share.dmhy.org/', {
    method: 'GET',
    headers: genericHeaders,
    params: queries,
    ...options,
  });
}
