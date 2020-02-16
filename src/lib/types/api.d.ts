declare interface User {
  id: number;
  name: string;
  channel_id: number;
  contributes: {
    count: number;
    date: string;
  };
}

declare interface URL {
  url: string;
}
