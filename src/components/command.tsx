import React, { forwardRef } from 'react';

const Command = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="command_page">Вміст Command</div>;
});

export default Command;