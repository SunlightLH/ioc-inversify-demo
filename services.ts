import {StudentInterface,TeacherInterface,ClassRoomInterface} from './interfaces';
import {injectable,inject} from "inversify";
import types from "./types";
import "reflect-metadata";

@injectable()
class Student implements StudentInterface{
  learn():string{
    return Math.random()+" 学生在学习";
  }
}

@injectable()
class Teacher implements TeacherInterface{
  teach():string{
    return Math.random()+" 老师在教书";
  }
}

@injectable()
class ClassRoom implements ClassRoomInterface{
  private _student:Student;
  private _teacher:Teacher;
  constructor(@inject(types.StudentConst) student:Student,@inject(types.TeacherConst) teacher:Teacher){
    this._student = student;
    this._teacher = teacher;
  }
  study():string{
    return "教室里，"+this._student.learn()+" 📚📚📚 "+this._teacher.teach();
  }
}

export {Student,Teacher,ClassRoom}