import Header from './components/Header';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import Cities from './components/Cities';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyJoin />
        <Cities />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
