/* eslint-disable react-refresh/only-export-components */
import type { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";

/**
 * Renders a component inside i18n + a router whose active route carries a
 * :lang param, so hooks like useLang() and useParams() resolve correctly.
 */
export function renderWithProviders(
  ui: ReactElement,
  { lang = "en", route = "/" }: { lang?: string; route?: string } = {}
) {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter initialEntries={[`/${lang}${route === "/" ? "" : route}`]}>
        <Routes>
          <Route path="/:lang/*" element={ui} />
        </Routes>
      </MemoryRouter>
    </I18nextProvider>
  );
}

export function Providers({
  children,
  lang = "en",
}: {
  children: ReactNode;
  lang?: string;
}) {
  return renderWithProviders(<>{children}</>, { lang });
}
