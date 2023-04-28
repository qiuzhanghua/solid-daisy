import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";
import { Component, createSignal, Show } from "solid-js";

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div use:draggable class="draggable">
      <button class="btn btn-primary">Draggable</button>
    </div>
  );
};

const Droppable = (props) => {
  const droppable = createDroppable(1);
  return (
    <div
      use:droppable
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
