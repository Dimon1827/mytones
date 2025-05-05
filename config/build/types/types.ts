export interface buildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
  port: number;
  paths: buildPaths;
  mode: BuildMode;
  analyzer?: boolean;
}
