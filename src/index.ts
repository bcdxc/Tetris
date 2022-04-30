import { IViewer } from "./common/types";
import Square from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery"
import SquareGroup from "./core/SquareGroup";
import { createTetris, LShape } from "./core/Tetris";

// const sq = new Square({ x: 0, y: 0 }, "red");
// sq.viewer = new SquarePageViewer(sq, $("#root"));
// sq.viewer.show();


const tetris = createTetris({ x: 5, y: 5 });

tetris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $("#root"));
    sq.viewer.show();
})


$("#btnDown").click(() => {
    // sq.point = {
    //     x: sq.point.x,
    //     y: sq.point.y + 1
    // }
    tetris.centerPoint = {
        x: tetris.centerPoint.x,
        y: tetris.centerPoint.y + 1
    }
})

// $("#btnRemove").click(() => {
//     sq.viewer?.remove();
// })