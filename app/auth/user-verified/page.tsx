
import React from 'react';
import Link from 'next/link';

const UserVerifiedPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-3xl mb-4">Code Verified Successfully!</h1>
      <p>You can now proceed to login:</p>
      <Link href="./signin">
        <div className="text-blue-500">Go to Login</div>
      </Link>
    </div>
  );
};

export default UserVerifiedPage;
