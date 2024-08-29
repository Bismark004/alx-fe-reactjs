import { Formik, Form, Field, ErrorMessage} from "formik";
import Yup from 'yup';

const validationSchema = Yup.oobject ({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().password('Invalid password').required('Password is required')
});

const FormikForm = () => (
    <Formik
       initialValues={{name: '', email: '', password: ''}}
       validationSchema={validationSchema}
       onSubmit={(values) => {
         console.log(values);
       }}
    >

        {() => (
            <Form>
                <Field type="text" name="name"/>
                <ErrorMessage name="name" component='div'/>
                <Field type='email' name='email'/>
                <ErrorMessage name="email" component='div'/>
                <Field type='password' name='password'/>
                <ErrorMessage name='password' component='div'/>
            </Form>
        )}

    </Formik>
);
export default FormikForm