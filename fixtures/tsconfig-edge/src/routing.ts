/**
 * Validates routing-like scenario
 */
export interface GeoData {
  country: string;
  region: string;
  city?: string;
}

export type RegionGroup = "EU" | "US" | "APAC" | "OTHER";

const EU = new Set(["DE", "FR", "IT", "ES", "NL", "BE", "PL", "SE", "AT", "PT"]);
const APAC = new Set(["JP", "KR", "CN", "AU", "SG", "IN", "TH", "MY"]);

export const getRegionGroup = ({ country }: GeoData): RegionGroup => {
  if (EU.has(country)) return "EU";
  if (APAC.has(country)) return "APAC";
  if (country === "US" || country === "CA" || country === "MX") return "US";
  return "OTHER";
};

const REGION_LOCALE: Record<RegionGroup, string> = {
  EU: "en-GB",
  US: "en-US",
  APAC: "en-SG",
  OTHER: "en-US",
};

export const getLocale = (region: RegionGroup): string => REGION_LOCALE[region];
