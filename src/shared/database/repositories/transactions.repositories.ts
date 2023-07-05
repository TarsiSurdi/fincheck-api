import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTransactionDto: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createTransactionDto);
  }

  findMany(findManyDto: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDto);
  }

  update(updateTransactionDto: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updateTransactionDto);
  }

  delete(delelteTransactionDto: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(delelteTransactionDto);
  }
}
