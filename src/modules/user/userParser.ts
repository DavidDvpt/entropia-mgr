async function userParser(data: any): Promise<AppUser> {
  try {
    if (
      typeof data.id !== 'string' ||
      typeof data.firstname !== 'string' ||
      typeof data.lastname !== 'string' ||
      typeof data.email !== 'string' ||
      typeof data.pseudo !== 'string' ||
      typeof data.role !== 'string' ||
      typeof data.isActive !== 'boolean'
    ) {
      throw new Error('Invalid user data format');
    }

    const user: AppUser = {
      id: data.id,
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      pseudo: data.pseudo,
      role: data.role as AppUserRole,
      isActive: data.isActive,
    };

    return user;
  } catch (error) {
    // Tu peux logger ici si besoin
    return Promise.reject(error);
  }
}

export { userParser };
