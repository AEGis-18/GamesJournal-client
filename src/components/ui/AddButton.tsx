import { Button } from "./button";

type AddButtonProps = {
  className: string;
  size:
    | "default"
    | "sm"
    | "lg"
    | "icon"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  onClick: () => void;
};

export default function AddButton({
  className,
  size,
  onClick,
}: AddButtonProps) {
  return (
    <div className="-skew-x-12 hover:scale-[115%] transform transition-transform">
      <Button
        onClick={onClick}
        size={size}
        className={`bg-green-700 rounded-none  ${className}`}
      >
        <h3 className="skew-x-12"> Add</h3>
      </Button>
    </div>
  );
}
