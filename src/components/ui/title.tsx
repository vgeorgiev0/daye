import React, { HTMLAttributes } from 'react';

interface TitleProps {
  text: string;
  containerClassName?: HTMLAttributes<HTMLDivElement>['className'];
  className?: HTMLAttributes<HTMLHeadingElement>['className'];
}

const Title: React.FC<TitleProps> = ({
  text,
  containerClassName,
  className,
}) => {
  return (
    <div
      className={`bg-background/40 rounded-2xl shadow-xl flex items-center justify-center p-6 w-4/5 md:w-1/2 mb-8 ${containerClassName}`}
    >
      <h1
        className={`font-poppins text-xl lg:text-3xl font-bold text-typography select-none capitalize ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Title;
