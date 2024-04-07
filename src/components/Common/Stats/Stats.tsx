interface StatItemProps {
  label: string;
  value: string;
}

function Stats() {
  return (
    <div className="bg-white rounded-xl shadow-lg py-5 flex justify-between w-full">
      <StatItem label="Machines" value="6" />
      <StatItem label="Customers" value="28" />
      <StatItem label="Drinks" value="28" />
      <StatItem label="Total Amount" value="₹ 25,999" />
      <StatItem label="Refunds Initiated" value="3" />
    </div>
  );
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-600">
      <span className="text-gray-600 text-[12px]">{label}:</span>{" "}
      <span className="text-[12px] text-gray-700">{value}</span>
    </p>
  );
}

export default Stats;
