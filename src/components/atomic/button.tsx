/** @format */

export default function Button({
  label,
  rounded = false,
}: {
  label: string;
  rounded?: boolean;
}) {
  return (
    <button
      className={`bg-white text-black  px-4 py-1 font-[600] cursor-pointer ${
        rounded ? "rounded-full" : "rounded-md"
      }`}
      type="button"
    >
      {label}
    </button>
  );
}
