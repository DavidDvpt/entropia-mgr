import ErrorKeyEnum from './ErrorKeyEnum';

const apiErrorMessages: ApiErrorMessagesType = {
  login: {
    [ErrorKeyEnum.emailRequired]: {
      api: 'Email is required',
      user: "L'email est requis",
    },
    [ErrorKeyEnum.invalidEmail]: {
      api: 'Invalid email',
      user: 'Cet email est invalide',
    },
    [ErrorKeyEnum.passwordRequired]: {
      api: 'Password is required',
      user: 'Le mot de passe est requis',
    },
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
      user: "L'email et le mot de passe sont requis",
    },
  },
  common: {
    [ErrorKeyEnum.idIsRequired]: {
      api: 'Id is required',
      user: "L'id est requis",
    },
    [ErrorKeyEnum.unauthorized]: {
      api: 'Unauthorized access',
      user: 'Accès non autorisé',
    },
    [ErrorKeyEnum.nameRequired]: {
      api: 'Name is required',
      user: 'Le nom et requis',
    },
    [ErrorKeyEnum.internalServerError]: {
      api: 'Server error',
      user: 'Erreur du serveur, veuillez réessayer plus tard',
    },
  },
  manage: {
    [ErrorKeyEnum.itemCategoryIdRequired]: {
      api: 'ItemCategory id is required',
      user: "L'id de la catégorie est requis",
    },
    [ErrorKeyEnum.itemTypeIdRequired]: {
      api: 'ItemType id is required',
      user: "L'id du type est requis",
    },
    [ErrorKeyEnum.valueRequired]: {
      api: 'value is required',
      user: 'La valeur est requise',
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
