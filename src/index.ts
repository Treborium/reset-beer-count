import { APIGatewayEvent } from "aws-lambda";
import countapi from "countapi-js";

export const handler = async (event: APIGatewayEvent) => {
  console.log("Incoming event:", { event });

  const result = await countapi.set(process.env.X_COUNT_API_KEY, 0);
  if (result.status !== 200) {
    console.error('Failed to reset counter');
    return {
      statusCode: 400,
    };
  }

  return {
    statusCode: 200,
  };
};
