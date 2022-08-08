const httpStatus = (param: string) => {
  const badRequest = 400;
  const unprocEntity = 422;

  if (param === 'any.required') return badRequest;
  return unprocEntity;
};

export default httpStatus;