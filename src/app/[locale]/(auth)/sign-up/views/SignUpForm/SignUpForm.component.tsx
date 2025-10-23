"use client";

import { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";

import { useRouter } from "../../../../../../i18n/navigation";
import { useForm, Form } from "../../../../components/Form";
import { pages } from "../../../../constants/pages";
import { signUpEmail } from "../../../actions/auth";
import { signUpFormSchema } from "./SignUpForm.utils";

// client side validation + direct server action call
export function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm({
    validationSchema: signUpFormSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await signUpEmail(values);
        router.push(pages.root);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      }
    },
  });

  return (
    <Form form={form} sx={{ gap: 2, display: "flex", maxWidth: 360, width: "100%" }}>
      <TextField
        label="Name"
        placeholder="Enter your name"
        {...form.register("name")}
        {...form.getErrorProps("name")}
      />

      <TextField
        label="Email"
        placeholder="Enter your email"
        {...form.register("email")}
        {...form.getErrorProps("email")}
      />

      <TextField
        label="Password"
        placeholder="Enter your password"
        type="password"
        {...form.register("password")}
        {...form.getErrorProps("password")}
      />

      <Button loading={form.formState.isSubmitting} type="submit" fullWidth>
        Create an Account
      </Button>

      {error && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}
    </Form>
  );
}
