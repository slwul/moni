import {createContext, useContext, useMemo} from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

const DialogContext = createContext({
  hasModalCloseButton: false,
});
interface DialogProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hasModalCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

function Dialog({
  children,
  isOpen,
  onClose,
  size = 'lg',
  hasModalCloseButton = false,
  closeOnOverlayClick = true,
}: DialogProps): JSX.Element {
  const value = useMemo(() => {
    return {
      hasModalCloseButton,
    };
  }, [hasModalCloseButton]);

  return (
    <DialogContext.Provider value={value}>
      <Modal
        size={size}
        closeOnOverlayClick={closeOnOverlayClick}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        {children}
      </Modal>
    </DialogContext.Provider>
  );
}

function DialogContent({
  children,
}: {
  children: React.ReactNode | string;
}): JSX.Element {
  const {hasModalCloseButton} = useContext(DialogContext);

  return (
    <ModalContent>
      {hasModalCloseButton && <ModalCloseButton />}
      {children}
    </ModalContent>
  );
}

function DialogBody({
  children,
}: {
  children: React.ReactNode | string;
}): JSX.Element {
  return <ModalBody p={6}>{children}</ModalBody>;
}

function DialogFooter({
  children,
}: {
  children: React.ReactNode | string;
}): JSX.Element {
  return <ModalFooter>{children}</ModalFooter>;
}

export {Dialog, DialogContent, DialogBody, DialogFooter};
