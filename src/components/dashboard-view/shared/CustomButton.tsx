interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "outline" | "grey";
  size?: "sm" | "md" | "lg" | "custom";
  children: React.ReactNode;
}

const CustomButton = ({ children, variant = "black", size = "md", className, onClick, ...props }: ICustomButton) => {
  const baseStyles = "px-4 py-2 font-medium transition-all focus:outline-none";

  const variantStyles = {
    black: "bg-[#131316] text-white hover:bg-[#000000] border border-[#131316]",
    outline: "border border-[#EFF1F6] text-[#131316] hover:bg-gray-100",
    grey: "bg-[#EFF1F6] border border-[#EFF1F6] text-[#131316]",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
    custom: "",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
