declare interface TwitterUser {
  name: string;
  profile_image_url: string;
}

declare interface TimeLineContributes {
  id: number;
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
  id: number;
  post_count: number;
  reaction_count: number;
  date: string;
}

declare interface User {
  id: number;
  name: string;
  profile_image_url: string;
  contributes: UserContributes[];
}

declare interface Users {
  id: number;
  name: string;
  profile_image_url: string;
  contributes: UserContributes[];
  is_setting_completed: boolean;
}

declare interface SlackUsers {
  id: number;
  name: string;
}

declare interface SlackStatus {
  status: string;
}

declare interface URL {
  url: string;
}

declare interface Token {
  token: string;
}

declare interface Stamp {
  name: string;
  count: number;
}

declare interface Reactions {
  id: number;
  message: string;
  reactions: Stamp[];
  replies: Reactions[];
}

declare interface Values {
  date: string;
  postCount: number;
}
