"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(), // userId
      email, // email
      password, // password
      `${firstName} ${lastName}` // name
    );

    const session = await account.createEmailPasswordSession({
      email,
      password,
    });

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // Return plain JSON
    return {
      user: parseStringify(newUserAccount),
      session: parseStringify(session),
    };
  } catch (error: any) {
    console.error("Error creating user:", error);

    if (error?.code === 409) {
      return { error: "User with this email already exists." };
    }

    return { error: "Internal server error" };
  }
};

// ... (imports remain the same)

export const signIn = async (email: string, password: string) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession({
      email,
      password,
    });

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getLoggedInUser();

    return { session: parseStringify(session), user: parseStringify(user) };
  } catch (error: any) {
    console.error("Error signing in:", error);
    return { error: error?.message || "Sign-in failed" };
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const {account} = await createSessionClient()

    cookies().delete('appwrite-session');

    await account.deleteSession('current')
  } catch (error) {
    
  }
}