import React, { useState, useEffect } from 'react'
import Header from '../../components/Headers'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import TodosList from './TodosList'
import './todos.css'

const defaultTodos = []

const Todos = () => {
  const [todos, setTodos] = useState(defaultTodos)
  const [completedList, setCompletedList] = useState([])
  const [text, setText] = useState('')

  const obtenerDatos = () => {
    const data = localStorage.getItem('todos') || '[]'
    setTodos(JSON.parse(data))
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed === true)
    setCompletedList(completed)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleCompleted = (item) => {
    const newItem = { ...item, completed: !item.completed }
    const newTodos = todos.map((todoItem) => {
      if (newItem.id === todoItem.id) {
        todoItem = newItem
      }
      return todoItem
    })
    setTodos(newTodos)
  }

  const handleLimpiar = (e) => {
    const newList = todos.filter((todo) => !todo.completed)
    setTodos(newList)
  }

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: todos.length,
      name: text
    }
    const newList = [...todos, newTodo]
    setTodos(newList)
    setText('')
  }

  const textChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <Header title="Todos" />

      <form onSubmit={addTodo}>
        <InputText
          onChange={textChange}
          value={text}
          placeholder="Ingrese tarea"
        />
      </form>

      <Button
        disabled={completedList.length === 0}
        onClick={handleLimpiar}
        label="fa fa-bitbucket"
      />

      <TodosList todos={todos} onClick={handleCompleted} />
    </>
  )
}

export default Todos
