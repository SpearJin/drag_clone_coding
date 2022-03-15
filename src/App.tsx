import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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

const toDos = ['a', 'b', 'c', 'd', 'e', 'f'];

function App() {
  const onDrageEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDrageEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId='one'>
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index}>
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
