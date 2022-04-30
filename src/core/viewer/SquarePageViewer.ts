import Square from "../Square";
import $ from "jquery";
import { IViewer } from "../../common/types";
import PageConfig from "./PageConfig";

/**
 * 显示一个小方块到页面上
 */
export class SquarePageViewer implements IViewer {

    private dom?: JQuery<HTMLElement>
    private isRemove: boolean = false // dom元素是否已经移除

    constructor(private square: Square, private container: JQuery<HTMLElement>) { }

    show(): void {
        if (this.isRemove) return;
        if (!this.dom) {
            this.dom = $("<div>").css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this.container)
        }
        this.dom.css({
            top: this.square.point.y * PageConfig.SquareSize.height,
            left: this.square.point.x * PageConfig.SquareSize.width,
            background: this.square.color
        })
    }
    
    remove(): void {
        if (this.dom && !this.isRemove) {
            this.dom.remove();
            this.isRemove = true;
        }
    }
}