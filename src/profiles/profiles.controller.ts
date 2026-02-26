import {
  Controller,
  Get,
  Post,
  Put,
  Query,
  Param,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  //GET /profiles
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  //Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.profilesService.findById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.profilesService.delete(id);
  }
}
