import { ScrollRestoration } from "react-router-dom";

export function withScrollRestoration(children: JSX.Element) {
  return (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
}