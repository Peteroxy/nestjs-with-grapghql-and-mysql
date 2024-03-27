import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserResolver } from './users/UserResolver';
import { userSettingsResolver } from './graphql/resolvers/UserSettingsResolver';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSettings';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Mysql111a',
      database: 'graphql_tutorial',
      entities: [User, UserSetting],
      synchronize: true,
      logging:true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}