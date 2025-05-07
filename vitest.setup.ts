import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

import { Language } from "~/types";
import { server } from "~/utils/mockServer";

beforeAll(() => {
  server.listen();

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

vi.mock("react-i18next", async (importOriginal) => {
  const original: object = await importOriginal();
  return {
    ...original,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        language: Language.English,
      },
    }),
  };
});
