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

  const newErrors = {};

  if (!username) {
    newErrors.username = 'Username is required'
  }

  if (!password) {
    newErrors.password= 'Password is required'
  }

  if (!email) {
    newErrors.email = 'Username is required'
  }

  if (Object.keys(newErrors).length > 0) {
    setError(newErrors);
    return;


  }
 

  setError({});
  console.log('Form Submitted', {username, password, email});

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