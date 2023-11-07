import React, { useState, useRef } from "react"; // import do react, sempre necessário importar e do React Hook, useState.
import {
  Container,
  H1,
  Image,
  InputContainer,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles.js";
import MainImage from "./assets/image1.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

// import "./styles.css" // import do CSS

// JSX - Mistura HTML e JavaScript.
const App = () => {
  //criação da App que será exportada.

  const [users, setUsers] = useState([]); // Isso cria um estado chamado users com um valor inicial de uma matriz vazia. Esse estado será usado para armazenar informações sobre os usuários.
  const inputName = useRef();
  const inputAge = useRef();
  // const [name, setName] = useState(); //  Isso cria um estado chamado name sem um valor inicial. Esse estado será usado para rastrear o nome do usuário.
  // const [age, setAge] = useState(); // Isso cria um estado chamado age sem um valor inicial. Esse estado será usado para rastrear a idade do usuário.

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]); //O spread operator criar cópias de arrays, objetos e outros tipos de coleções de dados. Ele é frequentemente usado para evitar a mutação do estado atual ou da coleção original.
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  // function inputChangeName(event) {
  //   setName(event.target.value);
  // }

  // function inputChangeAge(event) {
  //   setAge(event.target.value);
  // }

  return (
    // uso de () para retornar um código HTML

    <Container className="container">
      <Image alt="people-image-logo" src={MainImage}></Image>

      <InputContainer>
        <H1>{`Hello there!`}</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Type your name"></Input>

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Type your age"></Input>

        <Button onClick={addNewUser}>
          Confirm <img alt="arrow-icon" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age} y/o</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash-icon-delete" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </InputContainer>
    </Container> // uso de {} para retornar JavaScript no meio de um HTML.
  );
};

export default App; // Exportação da App.
