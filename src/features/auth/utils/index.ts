export const validatePassword = (password: string, confirmPassword: string) => {
  const errors: { newPassword?: string; confirmNewPassword?: string } = {};

  if (!password) {
    errors.newPassword = 'Password is required';
  } else if (password.length < 6) {
    errors.newPassword = 'Password must be at least 6 characters';
  }

  if (!confirmPassword) {
    errors.confirmNewPassword = 'Confirmation is required';
  } else if (confirmPassword !== password) {
    errors.confirmNewPassword = 'Passwords do not match';
  }

  return errors;
};
