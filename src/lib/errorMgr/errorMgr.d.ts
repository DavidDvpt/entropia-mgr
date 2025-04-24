type ErrorMessageObjectType = { api: string; user: string };

type ApiErrorMessagesType = {
  [statusCode: number]: {
    [errorKey in ErrorKeyEnum]?: ErrorMessageObjectType;
  };
};

type ErrorStateType = { key: string; msg: string };
type ErrorStatesType = ErrorStateType[];
