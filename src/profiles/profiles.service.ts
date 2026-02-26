import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'Software Engineer',
    },
    {
      id: randomUUID(),
      name: 'Jane Doe',
      description: 'Data Scientist',
    },
    {
      id: randomUUID(),
      name: 'Alice Smith',
      description: 'UX Designer',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findById(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) throw new Error(`Profile with ID ${id} not found`);
    return matchingProfile;
  }

  create(profile: { name: string; description: string }) {
    const newProfile = {
      id: randomUUID(),
      ...profile,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, profile: { name: string; description: string }) {
    const _index = this.profiles.findIndex((profile) => profile.id == id);
    if (_index == -1)
      throw new NotFoundException(`Profile with ID ${id} not found`);

    this.profiles[_index] = {
      ...this.profiles[_index],
      ...profile,
    };
    return this.profiles[_index];
  }

  delete(id: string) {
    const _index = this.profiles.findIndex((profile) => profile.id == id);
    if (_index == -1)
      throw new NotFoundException(`Profile with ID ${id} not found`);

    this.profiles.splice(_index, 1);
    return 'Profile was deleted';
  }
}
