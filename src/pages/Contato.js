import { Link } from 'react-router-dom';
import img from '../imgs/contact.svg';
import ContactSidebar from '../components/ContactSidebar';
import ContactForm from '../components/ContactForm';

const Contato = () => {
  return (
    <main className='w-100 h-100 d-flex position-relative'>
      <section className='container'>
        <ContactForm />
      </section>
      <section
        id='contactSidebar'
        className='sidebar position-absolute start-50 top-50'
      >
        <ContactSidebar />
      </section>
    </main>
  );
};

export default Contato;
