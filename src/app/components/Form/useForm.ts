import { useMemo } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import objectPath from "object-path";
import {
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type UseFormProps,
  useForm as useRHFForm,
} from "react-hook-form";
import type { ZodType } from "zod";

import type { CustomForm } from "./Form.types";

export type FormInit<FormValues extends FieldValues> = {
  initialValues: UseFormProps<FormValues>["defaultValues"];
  onSubmit: (values: FormValues) => void | Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: ZodType<FormValues, any, any>;
  onError?: (errors: FieldErrors<FormValues>) => void;
} & Omit<UseFormProps<FormValues>, "resolve" | "defaultValues">;

export function useForm<FormValues extends FieldValues>(params: FormInit<FormValues>) {
  const { onSubmit, validationSchema, initialValues, onError, ...restFormParams } = params;

  const form = useRHFForm<FormValues>({
    defaultValues: initialValues,
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: false,
    ...restFormParams,
  });

  return useMemo(() => {
    return {
      ...form,
      validationSchema,
      setValue: (fieldPath, value, options) => {
        form.setValue(fieldPath, value, {
          shouldDirty: options?.shouldDirty ?? true,
          shouldTouch: options?.shouldTouch ?? true,
          shouldValidate: options?.shouldValidate ?? false,
        });
      },
      submitForm: form.handleSubmit(onSubmit, onError),
      getErrorProps: (fieldPath) => {
        const error = objectPath.get(form.formState.errors, fieldPath) as FieldError;
        const helperText = error?.message;

        return { error: !!error, helperText };
      },
    } as CustomForm<FormValues>;
    // Omitted onSubmit from dependencies to avoid re-creating customForm on every render
    // could potentially cause issues
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, form.formState]);
}
