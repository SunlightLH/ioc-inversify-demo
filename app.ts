import container from "./container";
import {ClassRoomInterface} from "./interfaces";
import types from "./types";

const classroom = container.get<ClassRoomInterface>(types.ClassRoomConst);
const classroom2 = container.get<ClassRoomInterface>(types.ClassRoomConst);

console.log(classroom.study());
console.log(classroom2.study());