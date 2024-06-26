import { Exclude, Expose } from "class-transformer";
import { IsArray, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    nombre: string;

    @MinLength(6)
    password: string;

    @IsArray()
    rolList : number[];

}

export class UserResponseDto {
    @Expose()
    nombre: string;
  
    @Expose()
    email: string;
  
    @Exclude()
    password: string;
  
    constructor(partial: Partial<UserResponseDto>) {
      Object.assign(this, partial);
    }
  }