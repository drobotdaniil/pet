"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "../auth";
import { SignInFormValues } from "../sign-in/views";
import { SignUpFormValues } from "../sign-up/views";

export type Social = "github" | "google";

export async function signUpEmail(values: SignUpFormValues) {
  try {
    const result = await auth.api.signUpEmail({
      body: { ...values },
    });

    if (!result.user) throw new Error("User can't be created");
  } catch (error) {
    throw error;
  }
}

type FormState = {
  values: SignInFormValues;
  success: boolean;
  error: string;
};

export async function signInEmail(_: FormState, formData: FormData) {
  const entries = Object.fromEntries(formData.entries());

  const values = {
    email: String(entries.email),
    password: String(entries.password),
  };

  try {
    await auth.api.signInEmail({
      body: {
        email: values.email,
        password: values.password,
        callbackURL: "/",
      },
    });
  } catch (err) {
    const error = err as Error;
    return {
      values,
      error: error.message,
      success: false,
    };
  }

  return {
    values,
    error: "",
    success: true,
  };
}

export const signInSocial = async (provider: Social) => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: "/",
    },
  });

  if (url) {
    redirect(url);
  }
};

export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};
