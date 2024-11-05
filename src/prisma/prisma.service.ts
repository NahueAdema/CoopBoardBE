import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({ log: ['query', 'info', 'warn', 'error'] });
  }
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }

  async CleanDatabase() {
    if (process.env.NODE_ENV === 'production') return;
    const modelNames = Object.keys(this._dmmf.modelMap);
    return Promise.all(
      modelNames.map((modelName) => this[modelName].deleteMany()),
    );
  }
}
