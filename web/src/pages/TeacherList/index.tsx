import { Formik } from 'formik';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import { EnumFilters, PadronizationToast } from '../../enuns';
import { Teacher, TeacherListProps } from '../../interfaces';
import api from '../../services/api';
import './styles.css';
import { schema } from './validations';



const TeacherList: React.FC<{}> = () => {
  const initialValues: TeacherListProps<string> = {
    subject: '',
    week_day: '',
    time: '',
  };
  const [teachers, setTeachers] = useState([]);
  async function handleSearchTeachers(values: TeacherListProps<string>) {
    const { subject, week_day, time } = values;
    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });
      toast.success(EnumFilters.Success, {
        autoClose: PadronizationToast.Seconds,
      });
      setTeachers(response.data);
    } catch (error) {
      toast.error(EnumFilters.Error, { autoClose: PadronizationToast.Seconds });
    }
  }
  return (
    <div id="page-teacher-list" className="container">
      <ToastContainer />
      <PageHeader title="Estes são os proffys disponíveis.">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => handleSearchTeachers(values)}
          render={({ handleSubmit, values, handleChange, errors, touched }) => (
            <form id="search-teachers" onSubmit={handleSubmit}>
              <Select
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
                ]}
                name="subject"
                value={values.subject}
                onChange={handleChange}
                label="Matéria"
              />

              {errors.subject && touched.subject ? <span>Campo obrigatório</span> : null}
              <Select
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sabado' },
                ]}
                name="week_day"
                value={values.week_day}
                onChange={handleChange}
                label="Dia da semana"
              />
              {errors.week_day && touched.week_day ? <span>Campo obrigatório</span> : null}
              <Input value={values.time} type="time" name="time" label="Hora" onChange={handleChange} />
              {errors.time && touched.time ? <span>Campo obrigatório</span> : null}
              <button type="submit">Buscar</button>
            </form>
          )}
        />
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher<string, number>) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};
export default TeacherList;
