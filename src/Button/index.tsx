import React, { ReactNode } from 'react';
import { Button as AntdButton, Descriptions } from 'antd';

export interface ButtonProps {
  /**
   *
   * @description 这是一个按钮包含的内容
   *
   * @default ''

  */
  children?: ReactNode;
  /**
   * @description 按钮大小
   * @default middle
   */
  size?: 'small' | 'middle' | 'large' | undefined;
  /**
   * @description 按钮类型
   * @default primary
   */
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <AntdButton {...props}>{props?.children}</AntdButton>;
};

export default Button;
