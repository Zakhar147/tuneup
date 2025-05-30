import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  //TODO: когда добавляешь много элементов то высота не меняется
  //TODO: сделать чтобы как-то минимальная ширина была
  //TODO: создать отдельную ветку

  return (
    <div className="relative bg-light-bgColor dark:bg-dark-bgColor w-full overflow-hidden">
      <div
        className="absolute
        w-[340px] h-[340px]
        bg-accent opacity-56
        dark:opacity-8 rounded-30
        -rotate-56 top-[100px] left-[-150px] blur-2
        max-md:w-[240px] max-sm:h-[240px]"
      />
      <div
        className="absolute
       w-[556px] h-[556px]
       bg-accent
       opacity-56 dark:opacity-8
       rounded-30 -rotate-73 top-[710px] left-[-150px]
       blur-2
       max-md:w-[356px] max-sm:h-[356px]
       "
      />

      <div className="
      absolute 
      w-[376px] h-[376px] 
      bg-accent  
      opacity-56 dark:opacity-8 
      rounded-30 -rotate-56 top-[100px] right-[-150px] 
      blur-2
      max-md:w-[256px] max-sm:h-[256px]
      " />
      <div className="absolute 
      w-[556px] 
      h-[556px] 
      bg-accent  
      opacity-56 dark:opacity-8 
      rounded-30 -rotate-68 top-[710px] right-[-100px] 
      blur-2
      max-md:w-[356px] max-sm:h-[356px]
      " />

      <div className="relative z-10 min-h-screen flex flex-col">{children}</div>
    </div>
  );
};

export default Background;
