'use client';

import React from 'react';
import { DeleteUserForm } from '../../components/organisms/DeleteUserForm';

export const DeleteUserPage: React.FC = () => {
  return (
    <main className="mt-12 flex grow items-center justify-center px-4 py-20">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="bg-primary/5 absolute right-[-10%] bottom-[10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
      </div>
      <DeleteUserForm />
    </main>
  );
};

export default DeleteUserPage;
