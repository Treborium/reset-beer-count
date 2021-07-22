import { APIGatewayEvent } from "aws-lambda";
import countapi from "countapi-js";

export const handler = async (event: APIGatewayEvent) => {
  console.log("Incoming event:", { event });

  const key = process.env.X_COUNT_API_KEY;
  if (!key) {
    const errorMessage =
      'CountAPI key not defined as environment variable "X_COUNT_API_KEY"';
    console.error(errorMessage);
    return {
      statusCode: 400,
      body: errorMessage,
    };
  }

  const result = await countapi.set(key, 0);
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
