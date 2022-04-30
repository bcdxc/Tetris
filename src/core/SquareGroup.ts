import { Point, Shape } from "../common/types";
import Square from "./Square";

export default class SquareGroup {
    private _squares: readonly Square[];
    // private _squares: ReadonlyArray<Square>;

    constructor(private _shape: Shape, private _centerPoint: Point, private _color: string) {
        // 设置小方块的数组：根据形状产生小方块数组
        const tempArr: Square[] = [];
        this._shape.forEach(p => {
            const point: Point = {
                x: p.x + this._centerPoint.x,
                y: p.y + this._centerPoint.y
            }
            const sq = new Square(point, this._color);
            tempArr.push(sq);
        })
        this._squares = tempArr;
    }


    public get squares() {
        return this._squares;
    }


    public get shape() {
        return this._shape;
    }



    public get centerPoint() {
        return this._centerPoint;
    }


    public set centerPoint(v: Point) {
        this._centerPoint = v;
        // 因为其他的小方块相对于中心点定位，所以我们希望只改变中心点位置就可以实现所有小方块的移动
        // 在中心点改变后，同时需要将每个小方块的 point 重新设置，才能触发 viewer

        this._shape.forEach((p, i) => {
            const point: Point = {
                x: p.x + this._centerPoint.x,
                y: p.y + this._centerPoint.y
            }
            this._squares[i].point = point;
        })
    }


}