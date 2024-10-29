export const validatePassword = async (password: string): Promise<boolean> => {
  const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
  );

  const isValidPassword: boolean = passwordRegex.test(password);
  return isValidPassword;
};

export const isEmptyOrNull = (str: string): boolean => {
  return !str || str.trim() === '';
};
