import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { ddbClient } from './dbconfig';

// INFO: marshall: Converts a regular object to DynamoDB format.
const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false,
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true,
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false,
};

// INFO: unmarshall: Converts DynamoDB format to a regular object.
const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false,
};

// Create the DynamoDB document client.
const DocumentClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

export { DocumentClient };
