import React, {
  createContext, useContext, ReactNode, useState,
} from 'react';

interface BoardProps {
  children: ReactNode;
}

interface TaskProps {
  title: string;
  description: string;
}

interface ProjectProps {
  id: string;
  title: string;
  todo: TaskProps[];
  doing: TaskProps[];
  done: TaskProps[];
}

interface IBoardContextData {
  board: ProjectProps[];
  setBoard: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
  dataKey: string;
}

const BoardContext = createContext({} as IBoardContextData);

function BoardProvider({ children }: BoardProps) {
  const [board, setBoard] = useState<ProjectProps[]>([]);
  const dataKey = '@taskboard:boards';

  return (
    <BoardContext.Provider value={{ board, setBoard, dataKey }}>
      { children }
    </BoardContext.Provider>
  );
}

function useBoard(): IBoardContextData {
  const context = useContext(BoardContext);

  return context;
}

export { BoardProvider, useBoard };
