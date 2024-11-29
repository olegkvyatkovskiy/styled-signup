export type TValidate = { isValid: boolean };

export const validatePassword = (password: string) => {
  const minLength = 8;
  const maxLength = 64;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasNoSpaces = !/\s/.test(password);
  const hasCorrectLength =
    password.length >= minLength && password.length <= maxLength;
  const isNotEmpty = password.length > 0;

  return {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasCorrectLength,
    hasNoSpaces,
    isNotEmpty,
    isValid:
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasCorrectLength &&
      hasNoSpaces &&
      isNotEmpty,
  };
};

export type TValidatePasswordResult = ReturnType<typeof validatePassword> &
  TValidate;

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailRegex.test(email);
  const isNotEmpty = email.length > 0;

  const isValid = isEmail && isNotEmpty;

  return { isEmail, isNotEmpty, isValid };
};

export type TValidateEmailResult = ReturnType<typeof validateEmail> & TValidate;
