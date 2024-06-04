import { Entity, Table } from 'dynamodb-toolbox';
import { DocumentClient } from '@/database/ddbDocClient';

// Instantiate a table
const FacilityTable = new Table({
  // Specify table name (used by DynamoDB)
  name: 'Facility',

  // Define partition and sort keys
  partitionKey: 'pk',
  sortKey: 'sk',

  // Add the DocumentClient
  DocumentClient,
});

const Facility = new Entity({
  // Specify entity name
  name: 'Facility',

  // Define attributes
  attributes: {
    facilityId: { partitionKey: true },
    sk: { hidden: true, sortKey: true },
    name: { type: 'string' },
    // TODO: Add more attributes
  },

  // Assign it to our table
  table: FacilityTable,

  // In Typescript, the "as const" statement is needed for type inference
} as const);

export { FacilityTable, Facility };
