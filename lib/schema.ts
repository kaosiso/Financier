// lib/schema.ts (or lib/utils.ts, wherever you keep your schema)
import { z } from "zod";

// Define your schema
export const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(8),
});

// ✅ Create a reusable type from the schema
export type AuthFormValues = z.infer<typeof authFormSchema>;
