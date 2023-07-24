import { ReactNode } from "react"
import Modal from "react-modal"
import Image from 'next/image'

import closeImg from "../../assets/images/close.svg"

interface Props {
  isOpen: boolean;
  onClose: () => void;

  children?: ReactNode;
}

export const NewModal = ({isOpen, onClose, children}: Props) =>(
  <Modal
    isOpen={isOpen}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button"
      onClick={onClose}
      className="react-modal-close"
    >
      <Image src={closeImg} alt="Fechar modal" />
    </button>

    {children}
  </Modal>
)
