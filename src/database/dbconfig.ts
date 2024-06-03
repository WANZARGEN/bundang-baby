import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const REGION = 'ap-northeast-2';

const PORT = Number(process.env.LOCAL_DB_PORT)
const ENDPOINT = process.env.NODE_ENV === 'development' && !Number.isNaN(PORT) ? {
    hostname: 'localhost',
    port: PORT as number,
    path: '',
    protocol: 'http:',
  } : undefined

// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
  endpoint: ENDPOINT,
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export { ddbClient };
