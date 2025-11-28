
import "./styles.css";
import { RootLayoutProps } from "@akanjs/client";
import { System } from "@akanjs/ui";
import { env } from "@koyo/env/env.client";
import { fetch } from "@koyo/client";


export const metadata = { title: "koyo" };

export default function Layout({ children, params }: RootLayoutProps) {
  return (
    <System.Provider
      of={Layout}
      appName="koyo"
      params={params}
      head={<link rel="icon" href="/favicon.ico" />}
      // className="bg-base-100"
      env={env}
    >
      {children}
    </System.Provider>
  );
}
  