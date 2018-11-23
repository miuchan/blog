import { Body, Delete, Get, JsonController, Param, Post, Put, QueryParam } from "routing-controllers";
import { getRepository } from "typeorm";
import Article from '../entity/Article'

const articleRepository = getRepository(Article);

@JsonController()
export class UserController {

    @Get("/articles")
    async getByPage(@QueryParam('page') page: number) {
      return await articleRepository.find({
        skip: 20 * (page || 0),
        take: 10,
      });
    }

    @Get("/articles/:id")
    async getOne(@Param("id") id: number) {
      return await articleRepository.findOne(id);
    }

    @Post("/articles")
    async post(@Body() article: Article) {
      return await articleRepository.insert(article);
    }

    @Put("/articles/:id")
    async put(@Param("id") id: number, @Body() article: Article) {
      return await articleRepository.update(id, article)
    }

    @Delete("/articles/:id")
    async delete(@Param("id") id: number) {
      return await articleRepository.delete(id);
    }
}