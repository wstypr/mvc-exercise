export type UserType = {
  name: string;
  password: string;
};

export type ThreadType = {
  title: string;
  content: string;
  author: string;
};

export type ReplyType = {
  respondent: string;
  message: string;
  thread: string;
};
