export interface Display {
  displayName: string,
  images:string,
 
}

export interface Content {
  description: string;
  details: string;
  directionsUrl: string;
}

export interface Feed {
  display: Display,
  content: Content,
}

export interface FetchFeedsResponse {
  feed: Feed[];
}
