// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Exercise
  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault()
      const value = event.target.elements[0].value
      onSubmitUsername(value)
    },
    [onSubmitUsername],
  )

  // Extra credit 1
  const inputRef = React.useRef(null)
  const handleSubmitWithRef = React.useCallback(
    event => {
      event.preventDefault()
      const value = inputRef.current.value
      onSubmitUsername(value)
    },
    [onSubmitUsername],
  )

  // Extra credit 2
  const [invalid, setInvalid] = React.useState(false)
  const handleChange = React.useCallback(event => {
    event.preventDefault()
    const value = inputRef.current.value
    setInvalid(value !== value.toLowerCase())
  }, [])

  // Extra credit 3
  const [username, setUsername] = React.useState('')
  const hangleUsernameChange = React.useCallback(event => {
    event.preventDefault()
    const value = inputRef.current.value.toLowerCase()
    setUsername(value)
  }, [])

  return (
    <form
      onSubmit={
        //handleSubmit
        handleSubmitWithRef
      }
    >
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          type="text"
          id="username-input"
          ref={inputRef}
          value={username}
          onChange={
            //handleChange
            hangleUsernameChange
          }
        />
      </div>
      <button type="submit" /*disabled={invalid}*/>Submit</button>
      {/* {invalid && <div role="alert">Username must be lower case</div>} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
