type AllowedProps =
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.SelectHTMLAttributes<HTMLSelectElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type AllowedElements = React.ReactElement<
  AllowedProps & React.RefAttributes<any>
>;
