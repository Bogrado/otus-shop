import useVuelidate from '@vuelidate/core';

export const useValidation = (schema, state) => {
  const v$ = useVuelidate(schema, state);

  const validateForm = async () => {
    v$.value.$touch();
    return !v$.value.$invalid;
  };

  return {
    v$,
    validateForm,
  };
}