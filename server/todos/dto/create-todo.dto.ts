import { IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly _id: string;

  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly completed: boolean;
}
