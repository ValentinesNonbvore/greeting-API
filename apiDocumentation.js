// apiDocumentation.js
export const apiDocumentation = {
               basePath: "/",
               steps: [
                              {
                                             step: 1,
                                             method: "GET",
                                             path: "/",
                                             description: "See a welcome message and instructions on how to use the API.",
                                             usage: "Send a GET request to /"
                              },
                              {
                                             step: 2,
                                             method: "GET",
                                             path: "/greet",
                                             description: "Get a list of all greetings.",
                                             usage: "Send a GET request to /greet"
                              },
                              {
                                             step: 3,
                                             method: "GET",
                                             path: "/greet/:timeOfDay",
                                             description: "Get a specific greeting (e.g., 'morning', 'night').",
                                             usage: "Send a GET request to /greet/morning"
                              },
                              {
                                             step: 4,
                                             method: "POST",
                                             path: "/greet",
                                             description: "Create a new greeting.",
                                             usage: `Send a POST request to /greet with JSON body: { timeOfDay: afternoon, message: Good afternoon! }`
                              },
                              {
                                             step: 5,
                                             method: "PUT",
                                             path: "/greet/:timeOfDay",
                                             description: "Update an existing greeting.",
                                             usage: `Send a PUT request to /greet/morning with JSON body: { message: Updated Good morning! }`
                              },
                              {
                                             step: 6,
                                             method: "DELETE",
                                             path: "/greet/:timeOfDay",
                                             description: "Delete a specific greeting.",
                                             usage: "Send a DELETE request to /greet/night"
                              }
               ]
};