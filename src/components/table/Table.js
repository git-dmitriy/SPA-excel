import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../core/Dom";

export class Table extends ExcelComponent {
  static className = "table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(31);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const parent = $resizer.$el.parentNode;  //!   it's bad practice
      // const parent = $resizer.$el.closest('.column'); //!  it's bad too.

      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();

      console.log(coords);

      document.onmousemove = (e) => {
        const delta = Math.floor(e.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + "px";

        console.log(delta);
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };

      console.log(event.target.parentNode.offsetWidth);
      console.log("Start resize", event.target.dataset.resize);
    }
  }
}
