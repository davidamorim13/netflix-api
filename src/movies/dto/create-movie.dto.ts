import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
    
    @IsString()
    title: string

    @IsString()
    category: string

    @IsString()
    image: string

    @IsNumber()
    year: number

    @IsNumber()
    duration: number

    @IsString()
    sinopse: string

    @IsInt()
    @Type(() => Number )
    classification: number
}

