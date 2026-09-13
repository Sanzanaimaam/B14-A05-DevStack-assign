import type { Dispatch, SetStateAction } from 'react';
import type { Itechnology } from '../../types/techType';
import TechCard from './TechCard';

interface AvailableTechProps {
  tech: Itechnology[];
  myStack: Itechnology[];
  setMyStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const AvailableTech = ({
  tech,
  myStack,
  setMyStack,
}: AvailableTechProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {tech.map((eachTech: Itechnology) => (
        <TechCard
          key={eachTech.id}
          eachTech={eachTech}
          myStack={myStack}
          setMyStack={setMyStack}
        />
      ))}
    </div>
  );
};

export default AvailableTech;