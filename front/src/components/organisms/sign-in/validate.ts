import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import yup from "@/utils/validate/yup-base"

type FormLoginType = {
  is_sign_in: boolean;
  email: string;
  password: string;
};

const useLoginForm = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        is_sign_in: yup.boolean().required(),
        email: yup.string().label("LOGIN_FORM.EMAIL").email().required(),
        password: yup
          .string()
          .label("LOGIN_FORM.PASSWORD")
          .required(),
      }),
    [],
  );

  return useForm<FormLoginType>({
    resolver: yupResolver(validationScheme) as any,
    shouldFocusError: true,
    defaultValues: {
      is_sign_in: true,
      email: "",
      password: "",
    },
  });
};

export { useLoginForm };
export type { FormLoginType };
