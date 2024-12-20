import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import yup from "@/utils/validate/yup-base"

type FormLibraryOfYourType = {
  search: string;
};

const useLibraryOfYourForm = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
      }),
    [],
  );

  return useForm<FormLibraryOfYourType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationScheme) as any,
    shouldFocusError: true,
    defaultValues: {
      search: "",
    },
  });
};

export { useLibraryOfYourForm };
export type { FormLibraryOfYourType };
