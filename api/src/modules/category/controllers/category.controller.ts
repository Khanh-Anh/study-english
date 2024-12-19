import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../entities/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  // GET /categories
  @Get()
  getHello(): Promise<Category[]> {
    return this.categoryService.findAll().then((categories) => {
      console.log(categories);
      return categories;
    });
  }
}
