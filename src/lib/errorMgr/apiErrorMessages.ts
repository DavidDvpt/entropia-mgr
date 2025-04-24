import ErrorKeyEnum from './ErrorKeyEnum';

const apiErrorMessages: ApiErrorMessagesType = {
  401: {
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
  500: {
    [ErrorKeyEnum.internalServerError]: {
      api: 'Server error',
      user: 'Erreur du serveur, veuillez réessayer plus tard',
    },
  },
};

function quickErrorAccess(code: number, errorKey: ErrorKeyEnum) {
  return (
    apiErrorMessages[code]?.[errorKey] ?? {
      api: 'unknown error',
      user: 'Erreur inconnue',
    }
  );
}

export { apiErrorMessages, quickErrorAccess };
