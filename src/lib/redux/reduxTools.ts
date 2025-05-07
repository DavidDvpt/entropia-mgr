const generateQueryParams = (params: Record<string, any>) => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value) queryParams.append(key, value);
  });

  return queryParams.toString();
};

export { generateQueryParams };
