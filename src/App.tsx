import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';

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

const Card = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDrageEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((prev) => {
      const toDosCopy = [...prev];
      // 1) Delete item on source.index
      console.log('Delete item on', source.index);
      console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      console.log('Deleted item');
      console.log(toDosCopy);
      // 2) Put back the item on the destination.index
      console.log('Put back', draggableId, 'on ', destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId);
      console.log(toDosCopy);
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
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
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
