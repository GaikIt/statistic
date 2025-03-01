import { BadRequestException, CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import { TransactionService } from "src/transaction/transaction.service";

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly categoryService: CategoryService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id } = request.params; // Предполагаем, что передается только id сущности
    const entityType = request.route.path.includes('transactions') ? 'transaction' : 'category';
    let entity;

    // Определяем тип сущности: транзакция или категория
    if (entityType === 'transaction') {
      entity = await this.transactionService.findOne(id);
    } else if (entityType === 'category') {
      entity = await this.categoryService.findOne(id);
    }

    if (!entity) {
      throw new NotFoundException('Entity not found');
    }

    const user = request.user;

    // Проверка на принадлежность пользователя
    if (entity.user.id !== user.id) {
      throw new BadRequestException('Access denied: you are not the owner');
    }

    return true; // Разрешаем доступ
  }
}
