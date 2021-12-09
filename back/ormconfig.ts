import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  // 여기에 entities 넣어서 하면 만들어짐
  synchronize: false, // synchronize:true 이건 개발환경일때만 하자. (개발환경에서 디비 만들어서 올리는 케이스만 사용.)
  // 한번 만들고나면 false로 해두자! (안하면 실제데이터 날려먹을수있음)
  migrations: [__dirname + '/src/migrations/*ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  logging: true, // 개발할때는 로깅 켜두자.
  keepConnectionAlive: true, // 핫 리로딩하면 typeorm은 db연결을 끊어버림 디비연결끊겼다는 에러나오니까 해두자.
};

export = config;
