'use client';

import React, { createContext, useContext, useState } from 'react';

export default function createGenericCtx<A>(defaultValue: A) {
  type ContextType = {
    ctxState: A;
    setCtxState: React.Dispatch<React.SetStateAction<A>>;
  };
  const defaultUpdate: ContextType['setCtxState'] = () => defaultValue;

  const ctx = createContext({
    ctxState: defaultValue,
    setCtxState: defaultUpdate,
  });

  const Provider = (props: React.PropsWithChildren<{}>) => {
    const [ctxState, setCtxState] = useState<A>(defaultValue);
    return <ctx.Provider value={{ ctxState, setCtxState }} {...props} />;
  };

  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

export const useGenericStateContext = <A,>(
  ctx: React.Context<{
    ctxState: A;
    setCtxState: React.Dispatch<React.SetStateAction<A>>;
  }>
) => {
  const context = useContext(ctx);

  if (!context) {
    throw new Error('useGenericStateContext must be used within a Provider');
  }

  return context;
};
