import { Table } from 'dynamodb-toolbox';
import { DocumentClient } from '@/database/ddbDocClient';

export const AppDataTable = new Table({
  name: 'AppData', // Table name
  partitionKey: { name: 'pk', type: 'string' },
  sortKey: { name: 'sk', type: 'string' },
  documentClient: DocumentClient,
});
