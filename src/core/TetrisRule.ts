import { MoveDirection, Point, Shape } from "../common/types";
import GameConfig from "./GameConfig";
import SquareGroup from "./SquareGroup";

// 类型保护函数
function isPoint(obj: any): obj is Point {
    if (typeof obj.x === "undefined") {
        return false;
    }
    return true;
}

/**
 * 该类中提供了一系列的函数，根据游戏规则判断各种情况
 */
export class TetrisRule {
    /**
     * 判断某个形状的方块，是否能够移动到目标位置上
     * @param params 
     * @returns 
     */
    static canImove(shape: Shape, targetPoint: Point): boolean {
        // 判断边界
        // 假设，中心点的坐标已经移动到了目标位置，算出每个小方块的坐标。
        const targetSquarePoints: Point[] = shape.map(sq => ({
            x: sq.x + targetPoint.x,
            y: sq.y + targetPoint.y
        }))

        const result = targetSquarePoints.some(p => {
            return p.x < 0 || p.x > GameConfig.panelSize.width - 1 || p.y < 0 || p.y > GameConfig.panelSize.height - 1
        })
        if (result)
            return false;

        return true;
    }

    static move(tetris: SquareGroup, targetPoint: Point): boolean;
    static move(tetris: SquareGroup, direction: MoveDirection): boolean;
    static move(tetris: SquareGroup, targetPointOrDirection: Point | MoveDirection): boolean {
        if (isPoint(targetPointOrDirection)) {
            if (this.canImove(tetris.shape, targetPointOrDirection)) {
                tetris.centerPoint = targetPointOrDirection;
                return true;
            }
            return false;
        } else {
            const direction = targetPointOrDirection;
            let targetPoint: Point;
            if (direction === MoveDirection.down) {
                targetPoint = {
                    x: tetris.centerPoint.x,
                    y: tetris.centerPoint.y + 1
                }
            } else if (direction === MoveDirection.left) {
                targetPoint = {
                    x: tetris.centerPoint.x - 1,
                    y: tetris.centerPoint.y
                }
            } else {
                targetPoint = {
                    x: tetris.centerPoint.x + 1,
                    y: tetris.centerPoint.y
                }
            }
            return this.move(tetris, targetPoint)
        }

    }

    /**
     * 将当前的方块移动到目标方向的终点
     * @param tetris 
     * @param direction 
     */
    static moveDirectly(tetris: SquareGroup, direction: MoveDirection) {
        while (this.move(tetris, direction)) { }
    }
}