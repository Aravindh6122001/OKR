interface FormValues {
    email: string;
    password: string;
  }
  
  export const validateForm = (values: FormValues): string[] => {
    const errors: string[] = [];
  
    const emailError = validateEmail(values.email);
    if (emailError) {
      errors.push(emailError);
    }
  
    const passwordError = validatePassword(values.password);
    if (passwordError) {
      errors.push(passwordError);
    }
  
    return errors;
  };
  
  export const validateEmail = (email: string): string | undefined => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return 'Email is required';
    } else if (!emailPattern.test(email)) {
      return 'Email is invalid';
    }
  };
  
  export const validatePassword = (password: string): string | undefined => {
    if (!password.trim()) {
      return 'Password is required';
    } else if (password.trim().length < 6) {
      return 'Password must be at least 6 characters long';
    }
  };