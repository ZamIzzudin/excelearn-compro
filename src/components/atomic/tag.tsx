/** @format */

export default function Tag({
  label,
  color = "#D0229F",
}: {
  label: string;
  color?: string;
}) {
  return (
    <span
      className={`bg-[#D0229F] text-white px-3 py-1 rounded-full text-[12px]`}
    >
      {label}
    </span>
  );
}
