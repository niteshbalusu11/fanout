export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
  getInfo: (testnet: string) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
