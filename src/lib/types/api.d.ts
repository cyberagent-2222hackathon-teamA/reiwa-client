interface twitterUser {
  name: string;
  profile_image_url: string;
}

interface TimeLineContributes {
  date: string;
  post_count: number;
  reaction_count: number;
  user: twitterUser[];
}

declare interface TimeLine {
  total_page: number;
  page: number;
  limit: number;
  contributes: TimeLineContributes[];
}

interface UserContributes {
  post_count: number;
  reaction_count: number;
  date: string;
}

declare interface User {
  id: number;
  name: string;
  twitter_profile_image: string;
  contributes: UserContributes[];
}

declare interface URL {
  url: string;
}

declare interface Token {
  token: string;
}
