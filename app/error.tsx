'use client';

import { Button } from 'antd';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-7">
      <h1 className="text-3xl font-bold">Ouchh!</h1>
      <h2 className="text-xl ">Something went wrong!</h2>
      <code className="text-xl">{error.message}</code>
      <p className="my-44 animate-bounce text-7xl font-bold">404</p>
      <Button danger onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
