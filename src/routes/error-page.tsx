import { Header } from '@/components/Header';

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="py-6">Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{'Error'}</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
