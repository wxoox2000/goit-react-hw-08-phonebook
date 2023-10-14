import { Formik } from 'formik';
import { FormItem, Input } from './filter.styled';
import { useDispatch } from 'react-redux';
import { filterSearch } from 'Redux/filterSlice';

export const Filter = () =>{
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(filterSearch(e.target.value))
  }
    return (
      <Formik
        initialValues={{
          search: '',
        }}
      >
        <FormItem>
          Find contacts by name or number
          <Input name="search" onInput={handleSubmit} />
        </FormItem>
      </Formik>
    );
}
