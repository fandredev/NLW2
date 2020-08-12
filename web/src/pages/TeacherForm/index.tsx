import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import api from '../../services/api';
import './styles.css';

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItens, setScheduleItens] = useState([
    {
      week_day: '0',
      from: '',
      to: '',
    },
  ]);

  const history = useHistory();

  function addNewScheduleItem() {
    setScheduleItens([
      ...scheduleItens,
      {
        week_day: '0',
        from: '',
        to: '',
      },
    ]);
  }
  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItens,
    };

    Object.freeze(data);
    await api
      .post('classes', data)
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        history.push('/');
      })
      .catch(() => {
        alert('Erro ao realizar cadastro');
      });
  }
  function setScheduleValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItens.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItens(updatedScheduleItems);
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" value={name} onChange={(e) => setName(e.target.value)} label="Nome completo" />
            <Input name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} label="Avatar" />
            <Input name="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} label="Whatsapp" />
            <TextArea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} label="Biografia" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
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
              label="Matéria"
            />
            <Input
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              label="Custo da sua hora por aula"
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItens.map((item, position) => {
              return (
                <div className="schedule-item" key={item.week_day}>
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
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={(e) => setScheduleValue(position, 'week_day', e.target.value)}
                  />
                  <Input
                    value={item.from}
                    onChange={(e) => setScheduleValue(position, 'from', e.target.value)}
                    name="from"
                    label="Das"
                    type="time"
                  />
                  <Input
                    value={item.to}
                    name="to"
                    onChange={(e) => setScheduleValue(position, 'to', e.target.value)}
                    label="Até"
                    type="time"
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante<br></br>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
export default TeacherForm;
