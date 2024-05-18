import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegDto {
	@IsEmail()
	email: string

    @IsString()
    name: string

	@MinLength(6, { message: 'Password must be at least 6 characters' })
	@IsString()
	password: string
}