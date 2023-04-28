declare global {
    module "solid-js" {
        import {Signal} from "solid-js";
        namespace JSX {

            // interface HTMLAttributes<T> extends IntrinsicElements{}
            // interface IntrinsicElements {
            //     any: any;
            // }

            interface Directives {  // use:model
                droppable: Signal<boolean>;
            }
        }
    }
}
