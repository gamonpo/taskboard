import React, {
  createContext, useContext, ReactNode, useState,
} from 'react';

interface BoardProps {
  children: ReactNode;
}

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

export interface ProjectProps {
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
  project: ProjectProps;
  setProject: React.Dispatch<React.SetStateAction<ProjectProps>>;
}

const BoardContext = createContext({} as IBoardContextData);

function BoardProvider({ children }: BoardProps) {
  const [board, setBoard] = useState<ProjectProps[]>([]);
  const [project, setProject] = useState<ProjectProps>();
  const dataKey = '@taskboard:boards';

  return (
    <BoardContext.Provider value={{
      board, setBoard, dataKey, project, setProject,
    }}
    >
      { children }
    </BoardContext.Provider>
  );
}

function useBoard(): IBoardContextData {
  const context = useContext(BoardContext);

  return context;
}

export { BoardProvider, useBoard };
