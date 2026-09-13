import { toast } from 'react-toastify';
import type { Dispatch, SetStateAction } from 'react';
import type { Itechnology } from '../../types/techType';
import { FaCheck } from 'react-icons/fa';


interface TechCardProps {
  eachTech: Itechnology;
  myStack: Itechnology[];
  setMyStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechCard = ({
  eachTech,
  myStack,
  setMyStack,
}: TechCardProps) => {

  // CHANGED
  const isSelected = myStack.some((tech) => tech.id === eachTech.id);

  const handleAddToStack = () => {

    // CHANGED
    setMyStack([...myStack, eachTech]);

    toast.success(`${eachTech.name} successfully added to your stack!`);
  };

  return (
    <div
      key={eachTech.id}
     className={`card bg-base-100 w-full h-70 rounded-lg border-2 shadow-md ${
  isSelected ? "border-pink-500" : "border-gray-300"
}`}
    >
      <div className="card-body p-4 flex flex-col h-full">

        <div className="flex items-start justify-between">
          <img
            src={eachTech.icon}
            alt="Logo"
            className="w-10 h-10 rounded-lg object-cover"
          />

          <button className="btn btn-xs rounded-md bg-gray-100 border border-gray-300 text-gray-700 px-3">
            {eachTech.category}
          </button>
        </div>

        <h2 className="card-title text-base font-bold mt-3">
          {eachTech.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1 leading-snug">
          {eachTech.description}
        </p>

        <div className="flex justify-between items-center gap-2 text-xs text-gray-600 mt-3">
          <span className="px-2 py-0.5 bg-gray-100 rounded">
            Frontend
          </span>

          <span className="px-2 py-0.5 bg-gray-100 rounded">
            Beginner-Friendly
          </span>
          <span className="text-amber-500 font-medium">
            ★{eachTech.rating}
          </span>
        </div>

        <div className="card-actions mt-auto">
          <button
  onClick={handleAddToStack}
  disabled={isSelected}
  className={`btn border-0 w-full rounded-lg flex items-center justify-center gap-2 ${
    isSelected
      ? "bg-pink-100 text-pink-700 cursor-not-allowed"
      : "bg-black text-white"
  }`}
>
  {isSelected ? (
    <>
      <FaCheck size={14} /> Added
    </>
  ) : (
    "Add to Stack"
  )}
</button>
        </div>

      </div>
    </div>
  );
};

export default TechCard;