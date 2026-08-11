"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_STYLE,
  STYLE_STORAGE_KEY,
  normalizeStyleId,
  type StyleId,
} from "../lib/styles";

type StyleContextValue = {
  style: StyleId;
  setStyle: (next: StyleId) => void;
};

const StyleContext = createContext<StyleContextValue | null>(null);

function applyStyle(style: StyleId) {
  document.documentElement.setAttribute("data-style", style);
}

export function StyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyleState] = useState<StyleId>(DEFAULT_STYLE);

  useEffect(() => {
    const next = normalizeStyleId(localStorage.getItem(STYLE_STORAGE_KEY));
    setStyleState(next);
    applyStyle(next);
    localStorage.setItem(STYLE_STORAGE_KEY, next);
  }, []);

  const setStyle = useCallback((next: StyleId) => {
    setStyleState(next);
    applyStyle(next);
    localStorage.setItem(STYLE_STORAGE_KEY, next);
  }, []);

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const ctx = useContext(StyleContext);
  if (!ctx) {
    throw new Error("useStyle must be used within StyleProvider");
  }
  return ctx;
}
