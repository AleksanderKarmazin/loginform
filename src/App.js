import React, { useState } from "react";
import "./index.css";

export default function App() {
  // We created state object 
  // После этого ввод текст в форму заблокируется так как 
  // Мы усановили значения в нашем объекте ""
  // Это будет до тех пор пока мы не напишем функции обработчик для каждого поля

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });


  // Hendlers for input form 

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value })
  }

  // Version of hendler #1 

  // const handleFirstNameInputChange = (event) => {
  //   setValues({...values, firstName: event.target.value})
  // }

  // Finale version of the hendler 

  // const handleFirstNameInputChange = (event) => {
  //   event.persist();
  //   setValues((values) => ({
  //     ...values,
  //     firstName: event.target.value,
  //   }));
  // };



  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value })
  }


  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value })
  }

// We created state object 
const [submitted, setSubmitted] = useState(false);

// Для того что бы сообщение не показывалось пока в поля не будет введена информация добавляеме 
const [valid, setValid] = useState(false);



// Hendlers for submit but
const handleSubmit = (event) =>{
  event.preventDefault();
  if (values.firstName && values.lastName && values.email) {
    setValid(true);
  }
  setSubmitted(true);
}

// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	setSubmitted(true);
// };



  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Мы используем тернальный оператор для вывода сообщения об успешной регистрации 
        если true  то сообщене выводится, по умолчанию в объекте state значение false */}
        {submitted && valid?<div class="success-message">Success! Thank you for registering</div>:null}
        
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {/* {submitted && valid? <span id='first-name-error'>Please enter a first name</span>:null}
         */}
        

        {submitted && !values.firstName? <span id='first-name-error'>Please enter a first name</span>:null} 


       
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName? <span id='first-name-error'>Please enter a last name</span>:null}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email? <span id='first-name-error'>Please enter an email address</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
