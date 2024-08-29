import { useState } from 'react';

const RegisterationForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsername({...username, [name]: value});
    setPassword({...password, [name]: value});
    setEmail({...email, [name]: value});
    
  }

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(username, password, email); 

  // Basic Validation
  if (!username || !password || !email) {
    setError('All fields are required');
    return
  }

  setError('');
  console.log('Form Submitted', username, password, email);

}

return (
  <form onSubmit={handleSubmit}>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <input
      type='text'
      name='username'
      value={username}
      onChange={handleChange}
    />

    <input
      type='email'
      name='email'
      value={email}
      onChange={handleChange}
    />

    <input
      type='password'
      name='password'
      value={password}
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
  </form>

)
}
export default RegisterationForm;