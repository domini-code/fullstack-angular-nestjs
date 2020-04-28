import { IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateTodoDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly completed: boolean;
}
