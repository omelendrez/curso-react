import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from '../../components/Headers'
import Button from '../../components/Button'
import InputText from '../../components/InputText'

const ContactoForm = (props) => {
  const initForm = {
    id: uuidv4(),
    name: '',
    phone: '',
    email: '',
    age: '',
    birthday: ''
  }

  useEffect(() => {
    if (props.location.state.name) {
      setForm(props.location.state)
    }
  }, [props])

  const [form, setForm] = useState(initForm)
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.id]: e.target.value }
    setForm(newForm)
  }

  const saveContacto = (e) => {
    e.preventDefault()
    let contactos = JSON.parse(localStorage.getItem('contactos') || '[]')
    if (contactos.find((contacto) => contacto.id === form.id)) {
      contactos = contactos.map((contacto) =>
        contacto.id === form.id ? form : contacto
      )
    } else {
      contactos.push(form)
    }
    localStorage.setItem('contactos', JSON.stringify(contactos))
    setRedirect(true)
  }

  const cancelForm = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/contactos" />
  }

  return (
    <>
      <Header title="Nuevo contacto" />
      <form className="contacto-form" onSubmit={saveContacto}>
        <InputText
          id="name"
          type="text"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <InputText
          id="phone"
          type="text"
          placeholder="celular"
          onChange={handleChange}
          value={form.phone}
        />
        <InputText
          id="email"
          type="email"
          placeholder="e-mail"
          onChange={handleChange}
          value={form.email}
        />
        <InputText
          id="age"
          type="number"
          placeholder="edad"
          onChange={handleChange}
          value={form.age}
        />
        <InputText
          id="birthday"
          type="date"
          placeholder="cumple"
          onChange={handleChange}
          value={form.birthday}
        />
        <div className="buttons">
          <Button label="fa fa-save" onClick={saveContacto} type="submit" />
          <Button label="fa fa-chevron-left" onClick={cancelForm} />
        </div>
      </form>
    </>
  )
}

export default ContactoForm
