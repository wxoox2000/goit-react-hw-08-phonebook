import { useDispatch, useSelector } from 'react-redux';
import { Contact, DeleteBtn, List } from './ContactList.styled';
import { getContacts, getFilter } from 'Redux/selectors';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { deleteContactFromBase, fetchContacts } from 'Redux/operations';
import { TailSpin } from 'react-loader-spinner';

export const ContactList = () => {
  const contactsList = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name
        .concat(contact.number)
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
  };
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsToRender = contactsList(items, filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const onDelete = e => {
    dispatch(deleteContactFromBase(e.target.id));
    Notify.info('Contact deleted!');
  };

  return (
    <List>
      {error && <p>Oops, something went wrong, try again...</p>}
      {isLoading && (
        <TailSpin
          height="100"
          width="100"
          color="#0A433E"
          radius="3"
          wrapperStyle={{ marginLeft: 210 }}
        />
      )}
      {contactsToRender.length === 0 ? (
        <p>No saved contacts...</p>
      ) : (
        contactsToRender.map(contact => {
          return (
            <Contact key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteBtn
                disabled={isLoading}
                id={contact.id}
                onClick={onDelete}
              >
                {isLoading ? (
                  <TailSpin
                    height="18"
                    width="18"
                    color="#0A433E"
                    radius="3"
                    wrapperStyle={{ marginLeft: 15 }}
                  />
                ) : (
                  'Delete'
                )}
              </DeleteBtn>
            </Contact>
          );
        })
      )}
    </List>
  );
};
