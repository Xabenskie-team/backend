import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UsersDto } from './users.dto'

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.user.findMany()
	}

	async create(dto: UsersDto) {
		return this.prisma.user.create({
			data: dto
		})
	}

	async delete(dto: UsersDto) {
		return this.prisma.user.delete({
			where: {
				id: dto.id
			}
		})
	}

	async findOne(username: string): Promise<UsersDto> {
		return this.prisma.user.findUnique({
			where: {
				username
			}
		})
	}
}
