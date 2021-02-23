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
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

      const type = $resizer.data.resize;
      console.log("resize type:", type);

      document.onmousemove = (e) => {
        if (type === "col") {
          console.log("mousemove");
          const delta = e.pageX - coords.right;
          const value = Math.floor(coords.width + delta);
          console.log("col value:", value);
          $parent.css({ width: value + "px" });
          cells.forEach((el) => (el.style.width = value + "px"));
        } else {
          const delta = e.pageY - coords.bottom;
          const value = Math.floor(coords.height + delta);
          console.log("row value:", value);
          $parent.css({ height: value + "px" });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };

      console.log(event.target.parentNode.offsetWidth);
      console.log("Start resize", event.target.dataset.resize);
    }
  }
}

//             612 ms  Scripting
// !            2781 ms  Rendering
//             511 ms  Painting
//             629 ms  System
