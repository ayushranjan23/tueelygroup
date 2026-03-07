import { Redis } from "@upstash/redis";

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

const url = readEnv("UPSTASH_REDIS_REST_URL") ?? readEnv("KV_REST_API_URL");
const token =
  readEnv("UPSTASH_REDIS_REST_TOKEN") ?? readEnv("KV_REST_API_TOKEN");

const hasValidConfig = Boolean(url && token && isValidUrl(url));

export const redis = hasValidConfig
  ? new Redis({
      url: url!,
      token: token!,
    })
  : null;
