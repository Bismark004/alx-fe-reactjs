import {useState} from 'react';

const RegisterationForm = () => {
    const [formData, setFormData] = useState( {username: '', email: '', password: ''});
    const [error, setError] = useState('');

     const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData,
           [name]: value});
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Basic Validation
        if (!formData.username || !formData.password || !formData.email) {
          setError('All fields are required');
          return
        }

        setError('');
        console.log('Form Submitted', formData);

     }
  
    return(
        <form  onSubmit={handleSubmit}>
             {error && <p style={{color: 'red'}}>{error}</p>}
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />

            <button type='submit'>Submit</button>
        </form>

    )
}
export default RegisterationForm;