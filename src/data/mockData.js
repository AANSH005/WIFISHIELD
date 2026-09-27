export const mockNetworks = [
  {
    ssid: "HomeWiFi",
    bssid: "AA:BB:CC:11:22:33",
    rssi: -45,
    channel: 6,
    security: "WPA2",
    trusted: true,
  },
  {
    ssid: "CollegeWiFi",
    bssid: "11:22:33:44:55:66",
    rssi: -61,
    channel: 11,
    security: "WPA2",
    trusted: false,
  },
  {
    ssid: "HomeWiFi",
    bssid: "91:73:45:12:34:56",
    rssi: -54,
    channel: 1,
    security: "Open",
    trusted: false,
  },
  {
    ssid: "LibraryWiFi",
    bssid: "22:44:66:88:AA:BB",
    rssi: -68,
    channel: 6,
    security: "WPA2",
    trusted: false,
  },
  {
    ssid: "StudentNetwork",
    bssid: "33:55:77:99:CC:DD",
    rssi: -72,
    channel: 11,
    security: "WPA2",
    trusted: false,
  },
];

export const mockHeatmap = [
  [-43, -45, -49, -61, -72],
  [-46, -50, -53, -64, -75],
  [-52, -55, -61, -70, -80],
  [-57, -60, -67, -74, -82],
];

export const mockAlerts = [
  {
    type: "DUPLICATE_SSID",
    ssid: "HomeWiFi",
    bssid: "91:73:45:12:34:56",
    anomalyScore: 74,
    severity: "High",
  },
];

export const mockChannels = [
  { channel: 1, networks: 3 },
  { channel: 6, networks: 7 },
  { channel: 11, networks: 4 },
];

export const mockTrustedAP = {
  ssid: "HomeWiFi",
  bssid: "AA:BB:CC:11:22:33",
  security: "WPA2",
  channel: 6,
};