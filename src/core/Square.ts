import { IViewer, Point } from "../common/types"

/**
 * 小方块
 */
export default class Square {

    // 属性：显示者
    private _viewer?: IViewer

    /**
     * 
     * @param _point 逻辑坐标 x y
     * @param _color 只读，不能修改
     */
    constructor(private _point: Point, private _color: string) { }

    public get point() {
        return this._point;
    }

    public set point(val) {
        this._point = val;
        // 完成显示
        this._viewer?.show();
    }

    get color() {
        return this._color;
    }

    get viewer() {
        return this._viewer;
    }

    set viewer(val) {
        this._viewer = val;
    }
}