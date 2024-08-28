import {useState} from 'react';

const registerationForm = () => {
    const [formData, setFormData] = useState( {name: '', email: '', password: ''});

     const handleChange = (e) => {
        const {name, email, password} = e.target;
        setFormData( prevState => ({...prevState, [name]: value}));
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

     }
  
    return(
        <Form  onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type='text'
              name='email'
              value={formData.email}
            />

            <input
              type='password'
              name='password'
              value={formData.password}
            />

            <button type='submit'>Submit</button>
        </Form>

    )
}