import { ReactElement } from 'react';
import Header from '@/app/features/navigation/components/Header';
import Footer from '@/app/features/navigation/components/Footer';

export default function Settings(): ReactElement {
  return (
    <>
      <div className="grid h-screen grid-cols-12 grid-rows-10 overflow-hidden">
        <div className="row-span-9 w-20">
          <Header />
        </div>
        <div className="col-span-11">2</div>
        <div className="col-span-3 col-start-2 row-span-8 row-start-2">3</div>
        <div className="col-span-8 col-start-5 row-start-2">4</div>
        <div className="col-start-5 row-span-7 row-start-3">5</div>
        <div className="col-span-7 col-start-6 row-span-7 row-start-3">6</div>
        <div className="col-span-12 row-start-10 h-6">
          <Footer />
        </div>
      </div>
    </>
  );
}
