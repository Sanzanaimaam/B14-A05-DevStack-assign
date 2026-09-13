import { use, useState } from 'react';
import type { Itechnology } from '../../types/techType';
import AvailableTech from './AvailableTech';
import StackPage from "./StackPage";

interface TechProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechProps) => {

  const tech = use(technologiesPromise);
  const [myStack, setMyStack] = useState<Itechnology[]>([]);

  return (
    <div className="max-w-7xl mx-auto">

      <div>
        <strong className="text-[30px] font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </strong>

        <p className="text-[16px] font-normal text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex gap-6 mt-6">

        {/* RIGHT SIDE */}
        <div className="w-2/3">
          <AvailableTech 
          tech={tech}
         myStack={myStack}
         setMyStack={setMyStack}/>
        </div>

         {/* LEFT SIDE */}
        <div className="w-1/3">
          <StackPage 
           myStack={myStack}
           setMyStack={setMyStack}/>
        </div>

      </div>

    </div>
  );
};

export default Technologies;