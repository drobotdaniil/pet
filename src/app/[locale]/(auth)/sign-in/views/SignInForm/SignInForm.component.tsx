"use client";

import { useActionState, useEffect, useTransition } from "react";

import { Button, Divider, Stack, TextField, Typography } from "@mui/material";

import { Link, useRouter } from "../../../../../../i18n/navigation";
import { Form, useForm } from "../../../../components/Form";
import { pages } from "../../../../constants/pages";
import { signInEmail, signInSocial, type Social } from "../../../actions/auth";
import { signInFormSchema } from "./SignInForm.utils";

// action state + client side validation + server action call
export function SignInForm() {
  const router = useRouter();
  const [pendingTransition, startTransition] = useTransition();

  const [state, action, pending] = useActionState(signInEmail, {
    values: {
      email: "",
      password: "",
    },
    error: "",
    success: false,
  });

  const isPending = pending || pendingTransition;

  const form = useForm({
    initialValues: state.values,
    validationSchema: signInFormSchema,
    onSubmit: (values) => {
      startTransition(async () => {
        const submissionData = new FormData();
        submissionData.append("email", values.email);
        submissionData.append("password", values.password);

        action(submissionData);
      });
    },
  });

  const handleLoginSocial = async (provider: Social) => {
    await signInSocial(provider);
  };

  useEffect(() => {
    if (state.success) {
      router.push(pages.root);
    }
  }, [state.success, router]);

  return (
    <>
      <Typography>Continue with socials</Typography>

      <Stack gap={2}>
        <Button
          onClick={() => handleLoginSocial("google")}
          sx={{
            minWidth: "360px",
          }}
        >
          Continue with Google
        </Button>

        <Button
          onClick={() => handleLoginSocial("github")}
          sx={{
            minWidth: "360px",
          }}
        >
          Continue with GitHub
        </Button>
      </Stack>

      <Divider
        sx={{
          width: "100%",
        }}
      />

      <Stack gap={3} minWidth="360px">
        <Typography textAlign="center">Or continue with</Typography>

        <Form form={form}>
          <Stack gap={2}>
            <TextField
              label="Email"
              placeholder="Enter your email"
              {...form.register("email")}
              {...form.getErrorProps("email")}
              fullWidth
            />

            <TextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...form.register("password")}
              {...form.getErrorProps("password")}
            />

            <Button type="submit" disabled={isPending} fullWidth>
              Sign In
            </Button>

            <Typography color="error" textAlign="center">
              {state.error}
            </Typography>
          </Stack>
        </Form>

        <Typography component={Link} href={pages.signUp} textAlign="center">
          Don&apos;t have an account? Sign up
        </Typography>
      </Stack>
    </>
  );
}
