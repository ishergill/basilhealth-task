import React from 'react';

interface StatusProps {
  status: string;
}

const statuses: { [key: string]: string } = {
  Success: 'text-[#53A450] ring-[#53A450]',
  Failure: 'text-[#ff5630] ring-[#ff5630]',
  Pending: 'text-[#E2d900] ring-[#E2d900]',
  Sent: 'text-[#e28800] ring-[#e28800]',
  "Refund Initiated": 'text-[#5053a4] ring-[#5053a4]',
  "Refund Completed": 'text-[#9d50a4] ring-[#9d50a4]',
};

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <div className={classNames(
      statuses[status],
      'rounded-full py-1 px-2 text-xs font-semibold ring-1 ring-inset'
    )}>
      {status.toUpperCase()}
    </div>
  );
}

export default Status;
