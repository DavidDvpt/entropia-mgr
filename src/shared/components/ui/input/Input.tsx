import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div>
        <input ref={ref} className={className} {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
