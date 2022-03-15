import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DragablleCard from './components/DragablleCard';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  min-height: 200px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDrageEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((prev) => {
      const toDosCopy = [...prev];
      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDrageEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragablleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
