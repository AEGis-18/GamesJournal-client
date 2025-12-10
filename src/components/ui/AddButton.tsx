import { useState } from "react";
import { Button } from "./button";
import { Modal } from "./Modal";
import AddToJournalForm from "../AddToJournalForm";

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
  // onClick: () => void;
  gameTitle: string;
  gameCoverUrl: string;
};

export default function AddButton({
  className,
  size,
  // onClick,
  gameTitle,
  gameCoverUrl,
}: AddButtonProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    return setOpen(true);
  }

  function handleClose() {
    return setOpen(false);
  }

  return (
    <>
      <div className=" hover:scale-[115%] transform transition-transform">
        <Button
          onClick={handleOpen}
          size={size}
          className={`bg-green-700 rounded-none -skew-x-12 ${className}`}
        >
          <h3 className="skew-x-12"> Add</h3>
        </Button>
      </div>
      <Modal isOpen={open} onClose={handleClose}>
        <AddToJournalForm title={gameTitle} url={gameCoverUrl} />
      </Modal>
    </>
  );
}
