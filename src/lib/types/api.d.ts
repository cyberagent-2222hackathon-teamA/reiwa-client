declare interface User {
  id: number;
  name: string;
  twitter_profile_image: string;
  contributes: Contributes[];
}

declare interface Contributes {
  post_count: number;
  reaction_count: number;
  date: string;
}

declare interface URL {
  url: string;
}

declare interface Token {
  token: string;
}
