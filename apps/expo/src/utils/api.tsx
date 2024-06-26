import React from "react";
import Constants from "expo-constants";
import { useAuth } from "@clerk/clerk-expo";
import { type AppRouter } from "@repo/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { httpBatchLink } from "@trpc/client";
import { createWSClient, wsLink } from "@trpc/client/links/wsLink";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";





/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
const getBaseUrl = () => {
  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   *
   * **NOTE**: This is only for development. In production, you'll want to set the
   * baseUrl to your production API URL.
   */


  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(":")[0];
  if (!localhost) {
    return ` https://nane-nane.vercel.app/`;
    // throw new Err or(
    //   "Failed to get localhost. Please point to your production server.",
    // );
  }
  return `http://${localhost}:3000`;
};

/**
 * function to get the end links for the client
 */

const url = `${getBaseUrl()}/api/trpc`;
function getEndingLink() {
  if (typeof window === "undefined") {
    return httpBatchLink({
      url,
    });
  }
  const client = createWSClient({
    url: process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3011",
  });

  return wsLink({ client });
}

/**
 * A set of typesafe hooks for consuming your API.
 */
export const api = createTRPCReact<AppRouter>();
export { type RouterInputs, type RouterOutputs } from "@repo/api";

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in _app.tsx
 */

export const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    api.createClient({
      transformer: superjson,
      // links: [
      //   httpBatchLink({
      //     async headers() {
      //       const authToken = await getToken();
      //       return {
      //         Authorization: authToken ?? undefined,
      //       };
      //     },
      //     url: `${getBaseUrl()}/api/trpc`,
      //   }),
      // ],
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  );
};