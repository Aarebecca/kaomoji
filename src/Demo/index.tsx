import React, { useEffect } from 'react';
import { execute } from '../runtime/execute';

export default ({ code }: { code: string }) => {
  useEffect(() => {
    execute(code);
  }, []);

  return (
    <div>
      <div>{code}</div>
      <div></div>
    </div>
  );
};
