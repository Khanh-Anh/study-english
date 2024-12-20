/* eslint-disable react/prop-types */
"use client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Router } from "@toolpad/core";
import { useRouter } from "next/navigation";
import { NAVIGATION } from "@/constants";
import Image from "next/image";


const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default function DashboardLayoutBasic(props: {
    children: React.ReactNode;
    window?: () => Window;
}) {
    const { window, children } = props;
    const router = useRouter();

    const [pathname, setPathname] = React.useState("/home");

    const routerMui = React.useMemo<Router>(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                setPathname(String(path));
                router.push(pathname);
            },
        };
    }, [pathname]);
    
    const Window = window !== undefined ? window() : undefined;

    return (
        <AppProvider navigation={NAVIGATION} theme={theme} router={routerMui} window={Window} branding={{
            logo: <Image src="https://img.freepik.com/free-vector/flat-design-creative-nerd-logo-template_23-2149194992.jpg" alt="Study" width={70} height={70} />,
            title: 'Study',
        }}>
            <DashboardLayout >
                {children}
            </DashboardLayout>
        </AppProvider>
    );
}
