import dbClient, { User } from '@orm/dbClient';

/**
 * Retrieves a user by their ID (in this case, the ID is the email).
 *
 * This function queries the database to find a user based on their email.
 * It returns the user's information if found, or `null` if no user is found.
 * If an error occurs during the query, it is rejected with the error.
 *
 * @param {string} id - The id of the user to search for.
 * @returns {Promise<User | null>} A promise that resolves with a `User` object if the user is found,
 * or `null` if no user is found with that id.
 * @throws {Error} If an error occurs during the database query.
 */
async function getUserById(id: string | null): Promise<User | null> {
  try {
    // check parameters
    if (!id) throw new Error('email parameter missing');

    // Query the database to find the user by id
    const result: User | null = await dbClient.user.findUnique({
      where: { id },
    });

    // const parsed = await userParser(result);
    // Return the found user or null if no user exists with the provided id
    return result;
  } catch (error) {
    // Reject the promise if an error occurs
    return Promise.reject(error);
  }
}
/**
 * Retrieves a user by their email.
 *
 * This function queries the database to find a user based on their email.
 * It returns the user's information if found, or `null` if no user is found.
 * If an error occurs during the query, it is rejected with the error.
 *
 * @param {string} email - The email of the user to search for.
 * @returns {Promise<User | null>} A promise that resolves with a `User` object if the user is found,
 * or `null` if no user is found with that email.
 * @throws {Error} If an error occurs during the database query.
 */
async function getUserByEmail(email: string | null): Promise<User | null> {
  try {
    // check parameters
    if (!email) throw new Error('email parameter missing');

    // Query the database to find the user by email
    const result: User | null = await dbClient.user.findUnique({
      where: { email },
    });

    // const parsed = await userParser(result);
    // Return the found user or null if no user exists with the provided id
    // Return the found user or null if no user exists with the provided email
    return result;
  } catch (error) {
    // Reject the promise if an error occurs
    return Promise.reject(error);
  }
}

export { getUserByEmail, getUserById };
