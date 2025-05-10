import React, { Suspense } from 'react';

const Entrevistas = React.lazy(() => import('./Entrevistas'));
const Fotografias = React.lazy(() => import('./Fotografias'));


const LoadingComponent = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Galeria = () => {
  return (
    <div className='flex flex-col gap-6 mx-auto max-w-6xl py-6 sm:px-6 lg:px-8 w-full -mt-5'>
      <label className='text-2xl font-semibold -mb-3'>Galería</label>
      <p className="text-gray-600 text-lg max-w-3xl">
        Sumergete en Bernardo Polo.
      </p>
      
      <Suspense fallback={<LoadingComponent />}>
        <Entrevistas />
      </Suspense>
      
      <Suspense fallback={<LoadingComponent />}>
        <Fotografias />
      </Suspense>
    </div>
  );
};

export default Galeria;