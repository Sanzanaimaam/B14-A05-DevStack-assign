import { FiTrash } from 'react-icons/fi';
import type { Itechnology } from '../../types/techType';

interface StackPageProps {
  myStack: Itechnology[];
  setMyStack: React.Dispatch<React.SetStateAction<Itechnology[]>>;
}

const StackPage = ({ myStack, setMyStack }: StackPageProps) => {

  const handleRemove = (id: string) => {
    setMyStack(myStack.filter((tech) => tech.id !== id));
  };

  return (
    <div className="card bg-base-100 w-full min-h-50 rounded-lg border border-gray-300 shadow-md">

      <div className="card-body p-4 flex flex-col h-full">

       
        <div >
          <h2 className="card-title text-base font-bold">
            Your Stack
          </h2>

          {myStack.length > 0 && (
            <span className="text-sm text-gray-500">
              {myStack.length}{' '}
              {myStack.length === 1 ? 'technology' : 'technologies'} selected
            </span>
          )}
        </div>

  
        {myStack.length === 0 ? (
          <>
            <p className="text-sm text-gray-500 mt-2">
              No technologies selected yet.
            </p>

            <div className="flex items-center justify-center border border-dashed border-gray-300 rounded-md mt-3 min-h-25">
              <span className="text-gray-400 text-sm">
                Your stack is empty
              </span>
            </div>
          </>
        ) : (

          <div className="flex flex-col flex-1 gap-3 mt-3">

            <div className="flex flex-col gap-2">

              {myStack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center h-14 px-3 border border-gray-300 rounded-md shadow-sm bg-white"
                >

                  <img
  src={tech.icon}
  alt={tech.name}
  className="w-8 h-8 rounded object-cover mr-3"
/>

              
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">
                      {tech.name}
                    </span>

                    <span className="text-xs text-gray-500">
                      {tech.category}
                    </span>
                  </div>

            
                  <button
                         onClick={() => handleRemove(tech.id)}
                            className="ml-auto text-gray-400 hover:text-red-500 text-lg"
                           >
                           <FiTrash />
                          </button>

                </div>
              ))}

            </div>

        
            <button
              onClick={() => setMyStack([])}
              className="btn bg-white text-red-700 w-full mt-auto font-bold border-red-700"
            >
              Remove All
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default StackPage;