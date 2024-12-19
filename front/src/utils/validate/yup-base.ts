import { template } from "lodash";
import * as yup from "yup";

import { regexValidate } from "@/constants";

import { LABEL, MESSAGES } from "./message";

export function getValue(obj: Record<string, any>, keyString?: string) {
  if (!keyString) return "";
  const keys = keyString.split(".");
  let value = obj;

  for (let i = 0; i < keys.length; i++) {
    value = value?.[keys[i]];
  }

  return value;
}

export function getErrorMessage(label: string, msgCode: string) {
  const field = getValue(LABEL, label);
  const compiled = template(msgCode);

  return compiled({ field });
}

export const getMessageAddMethod = {
  validPassword: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_006);

    return compiled({ field });
  },
  validPasswordLength: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_031);

    return compiled({ field });
  },
  validEmail: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_005);

    return compiled({ field });
  },
  notEmoji: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_010);

    return compiled({ field });
  },
  sameAs: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_009);

    return compiled({ field });
  },
  requiredSelect: ({ label }: any) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_002);

    return compiled({ field });
  },
  isValidDate: ({ label }: any) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_039);

    return compiled({ field });
  },
  onlyHiragana: ({ label }: any) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_032);

    return compiled({ field });
  },
  maxPresent: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_030);

    return compiled({ field });
  },
  isValidPhoneNumber: ({ label }: { label: string }) => {
    const field = getValue(LABEL, label);
    const compiled = template(MESSAGES.MSG_PHONE_NUMBER_2);

    return compiled({ field });
  },
  minDate: () => {
    const compiled = template(MESSAGES.MSG_043);

    return compiled();
  },
};

 const defaultMessage = {
  mixed: {
    required: ({ label }: { label: string }) => {
      const field = getValue(LABEL, label);
      const compiled = template(MESSAGES.MSG_001);

      return compiled({ field });
    },
  },
  string: {
    min: ({ label, min }: { label: string; min: number }) => {
      const field = getValue(LABEL, label);
      const compiled = template(MESSAGES.MSG_004);

      return compiled({ field, min });
    },
    max: ({
      label,
      max,
      errorMsg,
    }: {
      label: string;
      max: number;
      errorMsg?: string;
    }) => {
      const field = getValue(LABEL, label);
      const compiled = template(errorMsg || MESSAGES.MSG_003);

      return compiled({ field, max });
    },
    email: ({ label }: { label: string }) => {
      const field = getValue(LABEL, label);
      const compiled = template(MESSAGES.MSG_005);

      return compiled({ field });
    },
  },
  array: {
    min: ({ label, min }: { label: string; min: number }) => {
      if (!label) return MESSAGES.MSG_007;
      const field = getValue(LABEL, label);
      const compiled = template(MESSAGES.MSG_004);

      return compiled({ field, min });
    },
    max: ({ label, max }: { label: string; max: number }) => {
      const field = getValue(LABEL, label);
      const compiled = template(MESSAGES.MSG_003);

      return compiled({ field, max });
    },
  },
};
yup.setLocale(defaultMessage);
export default yup;
