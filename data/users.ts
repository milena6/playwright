export const TEST_USERS = [
  {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    expectedError: false,
    description: "Valid credentials",
  },
  {
    username: process.env.USERNAME!,
    password: "invalidPass",
    expectedError: true,
    expectedErrorMessage: "Your password is invalid! ×",
    description: "Valid username, incorrect password",
  },
  {
    username: "invalidUser",
    password: process.env.PASSWORD!,
    expectedError: true,
    expectedErrorMessage: "Your username is invalid! ×",
    description: "Incorrect username, valid password",
  },
  {
    username: "",
    password: "",
    expectedError: true,
    expectedErrorMessage: "Your username is invalid! ×",
    description: "Empty fields",
  },
  {
    username: `${process.env.USERNAME!} `,
    password: `${process.env.PASSWORD!} `,
    expectedError: true,
    expectedErrorMessage: "Your username is invalid! ×",
    description: "Valid credentials with leading and trailing whitespace",
  },
];
