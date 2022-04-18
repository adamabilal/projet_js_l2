const LEFT = -1;
const RIGHT = 1;
const NONE = 0;
const UP = -2;
const DOWN = 2;

export default class MoveState {
  static get UP() {
    return UP
  };
  static get DOWN(){
    return DOWN
  };
  static get LEFT() {
    return LEFT
  };
  static get RIGHT() {
    return RIGHT
  };
  static get NONE() {
    return NONE
  };
 
}