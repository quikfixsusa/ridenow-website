'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white">
      {children}
      <ToastContainer position="bottom-center" hideProgressBar />
    </div>
  );
};

export default FaceLayout;
