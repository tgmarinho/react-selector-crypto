import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Modal } from './Modal';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="mt-10 bg-yellow-200 p-5 rounded-md">
      {children || `the snozzberries taste like snozzberries`}
      <Modal />
    </div>
  );
};
