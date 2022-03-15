import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DragablleCard from './DragablleCard';

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragablleCard key={toDo} index={index} toDo={toDo} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

const Wrapper = styled.div`
  padding: 20px 10px;
  min-height: 200px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;

export default Board;
