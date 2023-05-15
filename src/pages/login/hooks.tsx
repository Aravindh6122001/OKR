import { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
}

export const useForm = (initialValues: FormValues, validate: (values: FormValues) => string[]) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formErrors = validate(values);
    setErrors(formErrors);
    setIsSubmitting(false);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    open,
    toggle,
  };
};