'use client';

import { Button } from 'antd';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body>
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2>Something went wrong!</h2>
          <code>{error.message}</code>
          <Button danger onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
