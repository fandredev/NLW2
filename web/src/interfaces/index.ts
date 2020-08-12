import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}
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
}
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
export interface TeacherListProps<S> {
  subject: S;
  week_day: S;
  time: S;
}
export interface PageHeaderProps<S> {
  title: S;
  description?: S;
}
