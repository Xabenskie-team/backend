import { IsBoolean, IsNumber, IsString, MinLength } from 'class-validator'

export class UsersDto {
	@IsNumber()
	id: number

	@IsString()
	username: string

	@IsBoolean()
	isTeacher: boolean

	@IsString()
	name: string

	@MinLength(6, { message: 'Password cannot be less than 6 characters!' })
	@IsString()
	password: string
}
