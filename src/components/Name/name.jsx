import { Formik, Field, ErrorMessage } from 'formik';
import { Container } from './name.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Phonebook = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {}}
      >
        <Container>
          <label htmlFor="firstName">
            Name
            <Field name="name" />
            <ErrorMessage name="name" />
          </label>

          <label htmlFor="email">
            Number
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
          <h3>
            Contacts
            <li></li>
            <li></li>
            <li></li>
          </h3>
        </Container>
      </Formik>
    </>
  );
};
