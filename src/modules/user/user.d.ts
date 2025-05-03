interface AppUser extends IId, IIsActive {
  firstName: string;
  lastName: string;
  pseudo?: string;
  email: string;
  role: AppUserRole;
}
