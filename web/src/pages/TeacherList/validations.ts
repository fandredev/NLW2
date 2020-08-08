import * as Yup from "yup";

export const schema = Yup.object().shape({
  subject: Yup.string().required("Matéria precisa ser obrigatório"),
  week_day: Yup.string().required("Dia da semana precisa ser obrigatório"),
  time: Yup.string().required("Hora precisa ser obrigatório"),
});
