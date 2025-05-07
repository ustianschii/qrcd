export enum ExampleFeatureEndpoint {
  getAllItems = "getAllItems",
}

export enum ExampleFeatureApiPath {
  getAllItems = "/get-all-items",
}

export type ExampleFeatureRequest = {
  q: string;
};

export type ExampleFeatureResponse = {
  items: object[];
  total: number;
};
