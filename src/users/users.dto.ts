import { IsString, MinLength } from 'class-validator'

export class UsersDto {
	id: number

	@IsString()
	username: string

	isTeacher: boolean

	@IsString()
	firstSubject: string

	secondSubject?: string

	@MinLength(6, { message: 'Password cannot be less than 6 characters!' })
	@IsString()
	password: string
}
