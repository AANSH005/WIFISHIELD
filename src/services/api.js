import {
  mockNetworks,
  mockHeatmap,
  mockAlerts,
  mockChannels,
  mockTrustedAP,
} from "../data/mockData";

export async function getNetworks() {
  return mockNetworks;
}

export async function getHeatmap() {
  return mockHeatmap;
}

export async function getAlerts() {
  return mockAlerts;
}

export async function getChannels() {
  return mockChannels;
}

export async function getTrustedAP() {
  return mockTrustedAP;
}