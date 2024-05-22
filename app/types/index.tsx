export interface IAssets {
  icon: string;
  title: string;
  subTitle: string;
  price: number;
  rate?: number;
  color?: string[];
  intro: string;
  transferType: number;
}

export interface ITokenInfo {
  token1: IAssets;
  token2: IAssets | null;
  board?: string;
}

export interface IAssetCardItem {
  title: string;
  token: IAssets;
  compatibility: string;
  lastPrice: number;
  last24hr: number;
}

export interface IPieData {
  color: string[];
  rate: number;
}
