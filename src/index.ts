import { APIGatewayEvent } from "aws-lambda";
import countapi from "countapi-js";

export const handler = async (event: APIGatewayEvent) => {
  console.log("Incoming event:", { event });

  const key = process.env.X_COUNT_API_KEY;
  const namespace = process.env.X_COUNT_API_NAMESPACE;

  if (!key || !namespace) {
    const errorMessage =
      'CountAPI key and/or namespace not defined as environment variables';
    console.error(errorMessage);
    return {
      statusCode: 400,
      body: errorMessage,
    };
  }

  const result = await countapi.set(namespace, key, 0);
  if (result.status !== 200) {
    const errorMessage = "Failed to reset counter";
    console.error(errorMessage);
    return {
      statusCode: 400,
      body: errorMessage,
    };
  }

  return {
    statusCode: 200,
    body: "Success!",
  };
};