import { $ } from "../../core/Dom";
import { Table } from "./Table";

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
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

    document.onmousemove = (e) => {
      if (type === "col") {
        const delta = e.pageX - coords.right;
        value = Math.floor(coords.width + delta);
        $resizer.css({ right: -delta + "px" });
      } else {
        const delta = e.pageY - coords.bottom;
        value = Math.floor(coords.height + delta);
        $resizer.css({ bottom: -delta + "px" });
      }
    };

    document.onmouseup = () => {
      if (type === "col") {
        $parent.css({ width: value + "px" });
        $root
          .findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => (el.style.width = value + "px"));
        $resizer.css({ right: "" });
      } else {
        $parent.css({ height: value + "px" });
        $resizer.css({ bottom: "" });
      }

      resolve({
        value,
        type,
        id: $parent.data[type],
      });

      $resizer.css({
        [sideProp]: "",
      });

      document.onmousemove = null;
      document.onmouseup = null;
    };
  });
}
