import { describe, it, expect } from "vitest";
import { formatDate } from "../utils/formatDate";

describe("formatDate", () => {

  it("restituisce una stringa", () => {
    const result = formatDate(1700000000);
    expect(typeof result).toBe("string");
  });

  it("formatta una data valida", () => {
    const result = formatDate(1700000000);

    expect(result.length).toBeGreaterThan(0);
  });

  it("gestisce valori null", () => {
    const result = formatDate(null);

    expect(result).toBeDefined();
  });

});