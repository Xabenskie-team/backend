import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService){}

    async getAll(userId: string) {
        return this.prisma.task.findMany({
            where: {
                userId
            }
        })
    }

    async create(dto: TaskDto, UserId: string) {
        return this.prisma.task.create({
            data: {
                ...dto,
                user: {
                    connect: {
                        id: UserId,
                    },
                },
            },
        });
    }

     async update(dto: Partial<TaskDto>, TaskId: string, userId: string) {
        return this.prisma.task.update({
           where: {
            userId,
            id: TaskId
           },
           data: dto
        })
    }

    async delete(taskId: string) {
        return this.prisma.task.delete({
            where: {
                id: taskId,
            }
        })
    }

}
