import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UsersDto } from './users.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async getUsers() {
		return this.usersService.getAll()
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: UsersDto) {
		return this.usersService.create(dto)
	}

	@Delete()
	@UsePipes(new ValidationPipe())
	async delete(@Body() dto: UsersDto) {
		return this.usersService.delete(dto)
	}
}
