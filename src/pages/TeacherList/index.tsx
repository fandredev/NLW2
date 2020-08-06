import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { Teacher } from "../../interfaces";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import { Main, Button, FormFindTeachers, Wrapper } from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

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
    <Wrapper className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <FormFindTeachers onSubmit={handleSearchTeachers}>
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label="Matéria"
          />
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
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            label="Dia da semana"
          />
          <Input
            value={time}
            type="time"
            name="time"
            label="Hora"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <Button type="submit">Buscar</Button>
        </FormFindTeachers>
      </PageHeader>
      <Main>
        {teachers.map((teacher: Teacher<string, number>) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </Main>
    </Wrapper>
  );
}
export default TeacherList;
