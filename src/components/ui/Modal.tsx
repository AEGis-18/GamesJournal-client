import { Button } from "./button";

type ModalProps = {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, className, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center   ${className}`}
      onClick={onClose}
    >
      <div className="relative max-w-lg w-full" onClick={handleContentClick}>
        <section>{children}</section>
        <Button
          onClick={onClose}
          className="absolute top-2 -right-4 p-1 text-xl text-white hover:text-red-500 transition-colors scale-200"
          aria-label="Close modal"
        >
          &times;
        </Button>
      </div>
    </div>
  );
}
