import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  //GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  //Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
}
