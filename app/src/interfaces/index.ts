import { ReactNode } from "react";
export interface Teacher<S, N> {
  avatar: S;
  bio: S;
  cost: N;
  id: N;
  name: S;
  subject: S;
  whatsapp: S;
}
export interface TeacherItemProps {
  teacher: Teacher<string, number>;
  favorited: boolean;
}
export interface PageHeaderProps<S> {
  title: S;
  headerRight?: ReactNode;
}
