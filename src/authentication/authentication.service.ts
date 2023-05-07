import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { User } from './entity/user.entity';
import { SignUpDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signUp(signUp: SignUpDto): Promise<User> {
    const {
      username,
      name,
      surname,
      email,
      password,
      datanasc,
      sex,
      numberPhone,
      height,
      weight,
    } = signUp;

    const user = new User();

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    user.username = username;
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = hashPassword;
    user.datanasc = datanasc;
    user.sex = sex;
    user.numberPhone = numberPhone || null;
    user.height = height || null;
    user.weight = weight || null;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    const saltRounds = 10;
    const currentTime = new Date().getTime().toString();
    const hashmail = bcrypt.hashSync(email + currentTime, saltRounds);

    user.shaemail = hashmail;
    user.validatemail = false;

    const userCreate = await this.usersRepository.create(user);
    const savedUser = await this.usersRepository.save(userCreate);
    return savedUser;
  }

  async checkIfExistUsername(username: string): Promise<User[]> {
    const findOptions: FindManyOptions = {
      where: { username },
    };
    return await this.usersRepository.find(findOptions);
  }

  async checkIfExistEmail(email: string): Promise<User[]> {
    const findOptions: FindManyOptions = {
      where: { email },
    };
    return await this.usersRepository.find(findOptions);
  }
}
