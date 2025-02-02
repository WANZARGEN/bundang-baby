import { AppDataTable } from '@/database/table/appDataTable';
import { FacilityEntity } from '@/database/schema/facility';
import { QueryCommand } from 'dynamodb-toolbox';
import { NextResponse } from 'next/server';

function log(level: string, message: string, context: Record<string, any> = {}) {
  console.log(JSON.stringify({ level, message, context, timestamp: new Date().toISOString() }));
}

export async function GET() {
  log('info', 'Fetching facilities', { partitionKey: 'FACILITIES' });

  try {
    const queryCommand = AppDataTable.build(QueryCommand);
    const res = await queryCommand.query({ partition: 'FACILITIES' }).send();
    const { Items, Count } = res;
    if (!Items) {
      log('warn', 'No facilities found', { partitionKey: 'FACILITIES' });
      return NextResponse.json({ error: 'No facilities found' }, { status: 404 });
    }
    log('info', 'Facilities fetched successfully', { count: Count, items: Items });
    return NextResponse.json(Items);
  } catch (err) {
    log('error', 'Error fetching facilities', { partitionKey: 'FACILITIES', error: err.message });
    console.error('Error fetching facilities:', err);
    return NextResponse.json({ error: 'Error fetching facilities' }, { status: 500 });
  }
}
