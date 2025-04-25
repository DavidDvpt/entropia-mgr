type ErrorMessageObjectType = { api: string; user: string };

type GenericErrorPropertyType = {
  [errorKey in ErrorKeyEnum]?: ErrorMessageObjectType;
};

type ApiErrorMessagesType = {
  common: GenericErrorPropertyType;
  login: GenericErrorPropertyType;
};

type ErrorStateType = { key: string; msg: string };
type ErrorStatesType = ErrorStateType[];
