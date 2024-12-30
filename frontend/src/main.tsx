import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import "@/index.css";

import QueryProvider from "@/components/providers";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<QueryProvider>
				<RouterProvider router={router} />
				<Toaster />
			</QueryProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
