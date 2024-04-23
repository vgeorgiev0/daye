import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface SideMenuContainerProps {
  isVisible: boolean;
  handleCloseMenu: () => void;
  children: React.ReactNode;
}

const SideMenuContainer: React.FC<SideMenuContainerProps> = ({
  handleCloseMenu,
  isVisible,
  children,
}) => {
  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50 overflow-hidden'
        onClose={handleCloseMenu}
      >
        <Transition.Child
          as={Fragment}
          enter=' duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave=' duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black/60' />
        </Transition.Child>
        <div className='fixed inset-0'>
          <div className='flex justify-end min-h-full '>
            <Transition.Child
              as={Fragment}
              enter='transition duration-100 transform'
              enterFrom='opacity-0 translate-x-56'
              enterTo='opacity-100 translate-x-0'
              leave='transition duration-150 transform'
              leaveFrom='opacity-100 translate-x-0'
              leaveTo='opacity-0 translate-x-56'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden transition-all '>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideMenuContainer;
