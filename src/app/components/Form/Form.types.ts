import type { FieldPath, UseFormReturn } from "react-hook-form";
import type { ZodSchema } from "zod";

export type ErrorProps = {
  error: boolean;
  helperText?: string;
};

export type CustomForm<FormValues extends Record<string, unknown>> = UseFormReturn<FormValues> & {
  submitForm: (event?: React.FormEvent<HTMLFormElement>) => Promise<void> | void;
  getErrorProps: <FieldName extends FieldPath<FormValues>>(name: FieldName) => ErrorProps;
  validationSchema?: ZodSchema<FormValues>;
};
