declare interface TwitterUser {
  name: string;
  profile_image_url: string;
}

declare interface TimeLineContributes {
  date: string;
  post_count: number;
  reaction_count: number;
  user: TwitterUser;
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
