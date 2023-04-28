import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  createDraggable,
  createDroppable,
  transformStyle,
} from "@thisbeyond/solid-dnd";
import { ParentComponent, Component, createSignal, Show } from "solid-js";

const Draggable: Component = () => {
  const draggable = createDraggable(1);

  return (
    <div
      ref={draggable.ref}
      class="draggable"
      style={transformStyle(draggable.transform)}
      {...draggable.dragActivators}
    >
      <button class="btn btn-primary">Draggable</button>
    </div>
  );
};

const Droppable: ParentComponent = (props) => {
  const droppable = createDroppable(1);

  return (
    <div
      ref={droppable.ref}
      class="droppable"
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable.
      {props.children}
    </div>
  );
};

const App: Component = () => {
  const [where, setWhere] = createSignal("outside");

  const onDragEnd: DragEventHandler = ({ droppable }) => {
    if (droppable) {
      setWhere("inside");
    } else {
      setWhere("outside");
    }
  };

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div class="min-h-8">
        <Show when={where() === "outside"}>
          <Draggable />
        </Show>
      </div>
      <Droppable>
        <Show when={where() === "inside"}>
          <Draggable />
        </Show>
      </Droppable>
    </DragDropProvider>
  );
};

export default App;
