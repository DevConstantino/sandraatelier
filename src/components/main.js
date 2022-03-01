import Sidebar from '../components/sidebar';
import CarouselWrapper from './CarouselWrapper';

function Main() {
  return (
    <main className='w-100 h-100 d-flex'>
      <section className='container pt-3'>
        <CarouselWrapper />
      </section>
      <section className='ms-auto sidebar pt-3'>
        <Sidebar />
      </section>
    </main>
  );
}

export default Main;
