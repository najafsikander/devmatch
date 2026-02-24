import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
      description: 'Software Engineer',
    },
    {
      id: randomUUID(),
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      age: 25,
      description: 'Data Scientist',
    },
    {
      id: randomUUID(),
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      age: 28,
      description: 'UX Designer',
    },
  ];

  findAll() {
    return this.profiles;
  }
}
