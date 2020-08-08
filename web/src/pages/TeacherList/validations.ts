import * as Yup from "yup";

export const schema = Yup.object().shape({
  subject: Yup.string().required("O campo máteria precisa ser preenchido"),
  week_day: Yup.string().required(
    "O campo dia da semana precisa ser preenchido"
  ),
  time: Yup.string().required("O campo hora precisa ser preenchido"),
});
