'use client'; // ✅ required in App Router for useRouter to work

import { useRouter } from 'next/navigation'; // ✅ correct router hook for App Router
import { PlusCircleIcon } from 'lucide-react';
import { Button } from './ui/button';

function PlaceholderDocument() {
  const router = useRouter();

  const handleClick = () => {
    //Check if user is FREE tier and if they are ove the file limit, push to the upgrade page
    router.push('/dashboard/upload'); // ✅ navigates in App Router
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-500"
    >
      <div className="scale-[2] mb-4">
        <PlusCircleIcon className="h-10 w-10" />
      </div>
      <p className="text-lg font-medium">Add a Document</p>
    </Button>
  );
}

export default PlaceholderDocument;
