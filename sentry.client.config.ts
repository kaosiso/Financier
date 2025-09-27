"use client"
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b79e163c86e2b684696fd7e6d86b6932@o4510088042577920.ingest.de.sentry.io/4510088044413008",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});