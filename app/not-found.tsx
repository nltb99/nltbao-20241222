'use client';

import { Button, Result } from 'antd';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Page Not Found!"
      extra={
        <Button
          className="h-10 w-40 bg-black font-semibold text-white"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      }
    />
  );
}
