import bcrypt from 'bcrypt';

const saltBounds = 10;

/**
 * Encodes a given string by hashing it with bcrypt.
 *
 * This function takes a string value, generates a salt with a specified number of rounds,
 * and hashes the string using bcrypt. The result is a securely hashed version of the input string.
 *
 * @param {string} value - The string to be hashed (typically a password).
 * @returns {string} The hashed version of the input string.
 */
function encodeFnc(value: string): string {
  // Generate a salt with the specified number of rounds
  const salt = bcrypt.genSaltSync(saltBounds);

  // Hash the input string with the salt
  const hash = bcrypt.hashSync(value, salt);

  // Return the hashed string
  return hash;
}

export { encodeFnc };
