interface ICustomCheckbox {
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
  label?: string;
  status: string;
}

const CustomCheckbox = ({ value, setValue, label, status }: ICustomCheckbox) => {
  const toggleCheckbox = () => {
    setValue((prev: string[]) => (prev.includes(status) ? prev.filter((el) => el !== status) : [...prev, status]));
  };
  return (
    <label className="flex items-center space-x-2 cursor-pointer mb-2">
      <input
        type="checkbox"
        checked={value.includes(status)}
        onChange={toggleCheckbox}
        className="hidden" 
      />
      <div
        className={`size-5 border-2  transition-all duration-300 
              ${value.includes(status) ? "bg-black border-black" : "bg-white border-gray-400"} 
              flex justify-center items-center`}
      >
        {value.includes(status) && (
          <div className="size-3.5  flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      {label && <span className="capitalize">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
