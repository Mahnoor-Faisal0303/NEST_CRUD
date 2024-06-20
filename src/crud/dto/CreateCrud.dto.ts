import { IsNotEmpty, Length } from "class-validator"

export class CreateTaskDTO {
    @IsNotEmpty({message:'The quiz should have a title'})
    @Length(1,255)
    title: string

    @IsNotEmpty({message:'The quiz should have a description'})
    @Length(3,255)
    description: string
}