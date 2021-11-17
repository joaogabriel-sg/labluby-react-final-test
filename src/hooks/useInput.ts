import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (
  errorMessage: string,
  validateValue: (value: string) => boolean,
  initialValue?: string
) => {
  const [value, setValue] = useState(initialValue || "");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(value);
  const hasInputError = !isValueValid && isTouched;

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const handleBlurInput = useCallback(() => {
    setIsTouched(true);
  }, []);

  return {
    value,
    isValueValid,
    hasInputError,
    errorMessage,
    handleChangeInput,
    handleBlurInput,
  };
};
