import { Entity, schema, TransformedItem } from 'dynamodb-toolbox';
import { string } from 'dynamodb-toolbox/attributes/string';
import { AppDataTable } from '@/database/table/appDataTable';
// Facility Entity
export const FacilityEntity = new Entity({
  name: 'Facility',
  table: AppDataTable,
  schema: schema({
    facilityId: string().key(),
    name: string().required(),
    location: string(),
    description: string(),
  }),
  computeKey: ({ facilityId }) => ({
    pk: `FACILITIES`,
    sk: `FACILITY#${facilityId}`,
  }),
  timestamps: {
    created: true,
    modified: true,
  },
});

export type Facility = TransformedItem<typeof FacilityEntity>;
