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
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      const type = $resizer.data.resize;
      const sideProp = type === "col" ? "bottom" : "right";
      const tableRoot = $("." + Table.className);
      let value;
      let resizerLength;

      if (type === "col") {
        resizerLength = Math.floor(tableRoot.getCoords().height);
      } else {
        resizerLength = Math.floor(tableRoot.getCoords().width);
      }

      $resizer.css({
        [sideProp]: -resizerLength + "px",
      });

      console.log("resize type:", type);

      document.onmousemove = (e) => {
        // console.log("Master, mousemove detected!");
        if (type === "col") {
          console.log("mousemove");
          const delta = e.pageX - coords.right;
          value = Math.floor(coords.width + delta);
          // console.log("col value:", value);

          $resizer.css({ right: -delta + "px" });
        } else {
          const delta = e.pageY - coords.bottom;
          value = Math.floor(coords.height + delta);
          // console.log("row value:", value);
          $resizer.css({ bottom: -delta + "px" });
        }
      };

      document.onmouseup = () => {
        if (type === "col") {
          $parent.css({ width: value + "px" });
          this.$root
            .findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => (el.style.width = value + "px"));
          $resizer.css({ right: "" });
        } else {
          // console.log("enter in else block");
          $parent.css({ height: value + "px" });
          $resizer.css({ bottom: "" });
        }
        $resizer.css({
          [sideProp]: "",
        });

        document.onmousemove = null;
        document.onmouseup = null;
      };

      // console.log(event.target.parentNode.offsetWidth);
      // console.log("Start resize", event.target.dataset.resize);
    }
  }
}

//             612 ms  Scripting
// !            2781 ms  Rendering
//             511 ms  Painting
//             629 ms  System
