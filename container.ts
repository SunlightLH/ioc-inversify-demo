import {Container} from "inversify";
import {StudentInterface,TeacherInterface,ClassRoomInterface} from "./interfaces";
import {Student,Teacher,ClassRoom} from "./services";
import types from "./types";

const container = new Container();

container.bind<StudentInterface>(types.StudentConst).to(Student);
container.bind<TeacherInterface>(types.TeacherConst).to(Teacher);
container.bind<ClassRoomInterface>(types.ClassRoomConst).to(ClassRoom);

export default container;