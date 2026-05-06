import { describe, it, expect, vi } from "vitest";
import axios from "axios";

vi.mock("axios");

describe("API calls", () => {

  it("recupera lista ID", async () => {
    axios.get.mockResolvedValue({
      data: [1, 2, 3]
    });

    const res = await axios.get("fake-url");

    expect(res.data.length).toBe(3);
  });

  it("recupera dettaglio news", async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        title: "Test news"
      }
    });

    const res = await axios.get("fake-url");

    expect(res.data.title).toBe("Test news");
  });

});