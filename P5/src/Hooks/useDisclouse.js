import {useState} from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }
  return { onOpen, isOpen, onClose }
}

export default useDisclouse