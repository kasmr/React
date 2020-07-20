import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState({
    employee: "",
    client: "",
    address: "",
    phoneNumber: "",
    description: "",
    result: "",
    income: "",
  });

  const {
    employee,
    client,
    address,
    phoneNumber,
    description,
    result,
    income,
  } = meeting;

  const onChange = (e) => {
    setMeeting({ ...meeting, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMeetings([...meetings, meeting]);
    setMeeting({
      employee: "",
      client: "",
      address: "",
      phoneNumber: "",
      description: "",
      result: "",
      income: "",
    });
    console.log(meeting);
  };

  return (
    <div>
      <h1>Meetings</h1>
      <form action="" autoComplete="off" onSubmit={onSubmit}>
        <TextField
          variant="filled"
          name="employee"
          value={employee}
          required
          label="Имя сотрудника"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="client"
          value={client}
          required
          multiline
          label="Клиент"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="phoneNumber"
          value={phoneNumber}
          type="number"
          required
          label="Номер телефона"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="address"
          value={address}
          required
          multiline
          label="Адрес"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="description"
          value={description}
          required
          multiline
          label="Описание"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="result"
          value={result}
          required
          multiline
          label="Результат"
          onChange={onChange}
        />
        <TextField
          variant="filled"
          name="income"
          value={income}
          required
          type="number"
          label="Денег получено"
          onChange={onChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<AddCircleIcon />}
        >
          Добавить встречу
        </Button>
      </form>
      {meetings.length > 0 ? (
        meetings.map(
          (singleMeeting) => <h2>{singleMeeting.client}</h2>
          //   <Meeting singleMeeting={singleMeeting} />
        )
      ) : (
        <h3>Нет встреч за сегодня</h3>
      )}
    </div>
  );
};

export default Meetings;
