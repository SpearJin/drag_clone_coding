import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
  const onDrageEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDrageEnd}>
      <div>
        <Droppable droppableId='one'>
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId='first' index={0}>
                {(magic) => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>🔥</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId='second' index={1}>
                {(magic) => (
                  <li ref={magic.innerRef} {...magic.draggableProps}>
                    <span {...magic.dragHandleProps}>🔥</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
