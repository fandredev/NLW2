import React, { useState, FormEvent } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

interface FormProps<S> {
  subject: S;
  week_day: S;
  time: S;
}
interface InitialForms<S> {
  initialWeekDay: S;
  initialSubject: S;
  initialTime: S;
}
export const TeacherList = (props: FormikProps<FormProps<string>>) => {
  const { errors, touched, values, handleChange, handleSubmit } = props;

  const [teachers, setTeachers] = useState([]);
  const [subject] = useState("");
  const [week_day] = useState("");
  const [time] = useState("");

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSubmit}>
          <Select
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
            name="subject"
            value={values.subject}
            onChange={handleChange}
            label="Matéria"
          />
          {errors.subject && touched.subject ? (
            <span style={{ color: "red" }}>Campo obrigatório</span>
          ) : null}
          <Select
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sabado" },
            ]}
            name="week_day"
            value={values.week_day}
            onChange={handleChange}
            label="Dia da semana"
          />
          {errors.week_day && touched.week_day ? (
            <span style={{ color: "red" }}>Campo obrigatório</span>
          ) : null}
          <Input
            value={values.time}
            type="time"
            name="time"
            label="Hora"
            onChange={handleChange}
          />
          {errors.time && touched.time ? (
            <span style={{ color: "red" }}>Campo obrigatório</span>
          ) : null}
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher<string, number>) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};
const FormFinished = withFormik<InitialForms<string>, FormProps<string>>({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    subject: props.initialSubject || "",
    week_day: props.initialWeekDay || "",
    time: props.initialTime || "",
  }),

  validationSchema: Yup.object().shape({
    subject: Yup.string().required("Preencha o campo obrigatório"),
    week_day: Yup.string().required("Preencha o campo obrigatório"),
    time: Yup.string().required("Preencha o campo obrigatório"),
  }),
  handleSubmit: async (
    { subject, week_day, time },
    { resetForm, setSubmitting }
  ) => {
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    console.log(response);
    // Não consegui fazer o setTeachers(response.data) =(
    resetForm();
    setSubmitting(false);
  },
})(TeacherList);

export default FormFinished;
