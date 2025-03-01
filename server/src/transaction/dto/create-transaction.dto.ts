import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTransactionDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsString()
    @MinLength(6)
    type: 'expense' | 'income';

    @IsNotEmpty()
    category: { id: number }; // Изменено на объект с id

    @IsOptional()
    user?: { id: number }; // Опционально, для передачи только id пользователя
}
