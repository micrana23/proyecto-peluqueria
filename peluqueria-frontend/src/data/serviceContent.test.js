import { describe, expect, it } from "vitest";
import { serviceLinks } from "../components/serviceLinks";
import {
  bridalGalleryImages,
  colorGalleryImages,
  hairServices,
  nailContent,
} from "./serviceContent";

describe("contenido de servicios", () => {
  it("mantiene destinos únicos para el menú de servicios", () => {
    expect(serviceLinks).toHaveLength(3);
    expect(new Set(serviceLinks.map((service) => service.to)).size).toBe(3);
    expect(serviceLinks.map((service) => service.to)).toEqual([
      "/servicios/peluqueria",
      "/servicios/novias",
      "/servicios/unas",
    ]);
  });

  it("mantiene contenido visual válido para las páginas de servicios", () => {
    expect(hairServices).toHaveLength(4);
    expect(colorGalleryImages).toHaveLength(6);
    expect(bridalGalleryImages).toHaveLength(4);
    expect(nailContent.filter((item) => item.type === "image")).toHaveLength(3);
    expect(
      [...colorGalleryImages, ...bridalGalleryImages].every((image) =>
        image.endsWith(".webp"),
      ),
    ).toBe(true);
  });
});
