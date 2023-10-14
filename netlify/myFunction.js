exports.handler = async function (event, context) {
    if (event.httpMethod === "POST") {
      // Handle the POST request from your ESP8266.
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Request received successfully" }),
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }
  };
  