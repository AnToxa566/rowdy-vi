"use client";

import { Provider } from "react-redux";
import { ReactNode, createContext, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";

import { store } from "@/store";

export interface ModalOptions {
  content: ReactNode;
}

export const ModalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onOpenChange: () => {},
  isControlled: false,
  handleModal: (options: ModalOptions) => {},
  getButtonProps: (props?: any) => {},
  getDisclosureProps: (props?: any) => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const disclosure = useDisclosure();

  const [modalContent, setModalContent] = useState<ReactNode>("");

  const handleModal = (options: ModalOptions) => {
    setModalContent(options.content);
    disclosure.onOpen();
  };

  return (
    <Provider store={store}>
      <NextUIProvider>
        <ModalContext.Provider value={{ ...disclosure, handleModal }}>
          {children}

          <Modal
            isOpen={disclosure.isOpen}
            onOpenChange={disclosure.onOpenChange}
          >
            <ModalContent>
              <>
                <ModalBody className="py-6">{modalContent}</ModalBody>
              </>
            </ModalContent>
          </Modal>
        </ModalContext.Provider>
      </NextUIProvider>
    </Provider>
  );
}
