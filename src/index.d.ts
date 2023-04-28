declare global {
  module "solid-js" {
    import { Signal } from "solid-js";
    namespace JSX {
      // interface HTMLAttributes<T> extends IntrinsicElements{}
      // interface IntrinsicElements {
      //     any: any;
      // }

      interface Directives {
        // eslint-disable-next-line no-undef
        droppable: Signal<Droppable$1>;
        // eslint-disable-next-line no-undef
        draggable: Signal<Draggable$1>;
      }
    }
  }
}
