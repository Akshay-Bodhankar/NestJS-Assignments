import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
    },
  ];

  findAll(role?: string) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return { message: 'User created successfully', user: newUser };
  }
}
