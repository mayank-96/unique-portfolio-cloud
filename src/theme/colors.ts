// Editorial palette — warm near-black + single electric accent.
// Kept as a single exported object so any leftover imports keep compiling.

export const palette = {
  bg: "#0A0908",
  surface: "#14120F",
  surfaceElevated: "#1C1915",
  text: "#F5F1E8",
  textMuted: "#8A847A",
  textDim: "#55514A",
  border: "#2A2722",
  accent: "#C6FF3D",
  accentSoft: "rgba(198, 255, 61, 0.12)",
};

// Legacy export — every section now resolves to the same accent so the
// rainbow goes away without having to touch every import at once.
export const sectionColors = new Proxy({} as Record<string, string>, {
  get: () => palette.accent,
});
