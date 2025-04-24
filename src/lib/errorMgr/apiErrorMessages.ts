import ErrorKeyEnum from './ErrorKeyEnum';

const apiErrorMessages: ApiErrorMessagesType = {
  login: {
    [ErrorKeyEnum.badLogin]: {
      api: "This user don't exist",
      user: "Cet utilisateur n'existe pas",
    },
    [ErrorKeyEnum.badPwd]: {
      api: 'Invalid password',
      user: 'Mot de passe incorrect',
    },
    [ErrorKeyEnum.noCredentials]: {
      api: 'Email and password are required',
      user: "l'email et le mot de passe sont requis",
    },
    [ErrorKeyEnum.unauthorized]: {
      api: 'Unauthorized access',
      user: 'Accès non autorisé',
    },
  },
  common: {
    [ErrorKeyEnum.internalServerError]: {
      api: 'Server error',
      user: 'Erreur du serveur, veuillez réessayer plus tard',
    },
  },
};

function quickErrorAccess(
  code: keyof ApiErrorMessagesType,
  errorKey: ErrorKeyEnum
) {
  return (
    apiErrorMessages[code]?.[errorKey] ?? {
      api: 'unknown error',
      user: 'Erreur inconnue',
    }
  );
}

export { apiErrorMessages, quickErrorAccess };
