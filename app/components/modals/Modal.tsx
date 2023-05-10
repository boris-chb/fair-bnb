'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../ui/Button';

interface ModalProps {
  actionLabel: string;
  onClose: () => void;
  onSubmit: () => void;
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  closeTimeoutMs?: number;
}

const Modal: React.FC<ModalProps> = ({
  actionLabel,
  footer,
  onClose,
  onSubmit,
  body,
  disabled,
  isOpen,
  secondaryAction,
  secondaryActionLabel,
  title,
  closeTimeoutMs = 300,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => onClose(), closeTimeoutMs);
    // eslint-disable-next-line
  }, [disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-neutral-800/70 focus:outline-none'>
        <div className='relative w-full h-full mx-auto my-6 md:h-full md:w-4/6 lg:h-full lg:w-3/6 xl:w-2/5'>
          {/* CONTENT */}
          <div
            className={`translate duration-${closeTimeoutMs} h-full 
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className='relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate focus:outline-none md:h-auto lg:h-auto'>
              {/* HEADER */}
              <div className='relative flex items-center justify-center rounded-t border-b-[1px] p-6'>
                <button
                  onClick={handleClose}
                  className='absolute p-1 transition border-0 left-9 hover:opacity-70'
                >
                  <IoMdClose size={18} />
                </button>
                <div className='text-lg font-semibold'>{title}</div>
              </div>
              {/* BODY */}
              <div className='relative flex-auto p-6'>{body}</div>
              {/* FOOTER */}
              <div className='flex flex-col gap-2 p-6'>
                <div className='flex flex-row items-center w-full gap-4'>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                      label={secondaryActionLabel}
                    />
                  )}
                  <Button
                    onClick={onSubmit}
                    label={actionLabel}
                    disabled={disabled}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
