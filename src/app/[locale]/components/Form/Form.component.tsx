import type { FormEvent } from "react";

import { Stack, type SxProps } from "@mui/material";

import type { CustomForm } from "./Form.types";

type FormProps<FormValues extends Record<string, unknown>> = {
  children: React.ReactNode;
  form: CustomForm<FormValues>;
  sx?: SxProps;
  onBeforeSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

export function Form<FormValues extends Record<string, unknown>>(props: FormProps<FormValues>) {
  const { sx, form, children, onBeforeSubmit } = props;

  return (
    <Stack
      noValidate
      overflow="inherit"
      sx={sx}
      component="form"
      onReset={() => form.reset()}
      onSubmit={async (event) => {
        onBeforeSubmit?.(event);

        await form.submitForm(event);
      }}
    >
      {children}
    </Stack>
  );
}
