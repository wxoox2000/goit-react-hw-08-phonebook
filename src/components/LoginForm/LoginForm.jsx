import { logIn } from 'Redux/auth/operations';
import { selectIsError } from 'Redux/auth/selectors';
import { resetError } from 'Redux/auth/slice';
import {
  AddBtn,
  Error,
  FormItem,
  Input,
  PhonebookForm,
} from 'components/ContactForm/ContactForm.styled';
import { ErrMessage } from 'components/RegForm/RegForm.styled';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

export const LoginForm = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
  });
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError())
    }, 3000);
  }, [error, dispatch])
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          dispatch(
            logIn({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
        }}
      >
        <PhonebookForm style={{ width: 400, margin: '0 auto', marginTop: 50 }}>
          <FormItem>
            Email
            <Input name="email" />
          </FormItem>
          <Error component="span" name="email" />
          <FormItem>
            Password
            <Input type="password" name="password" />
          </FormItem>
          <Error component="span" name="password" />
          {error && (
            <ErrMessage>
              Please check your input data and try again
            </ErrMessage>
          )}
          <AddBtn type="submit">Login</AddBtn>
        </PhonebookForm>
      </Formik>
    </>
  );
};
