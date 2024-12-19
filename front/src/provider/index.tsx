"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material";

const queryClient = new QueryClient();
const Provider = ({ children }: {
    children: ReactNode;
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StyledEngineProvider injectFirst>
                <SessionProvider refetchInterval={10 * 60} refetchOnWindowFocus>
                    {children}
                </SessionProvider>
            </StyledEngineProvider>
        </QueryClientProvider>
    );
};

export default Provider;
