import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";
import { UserService } from "./UsersService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { UserSettingService } from "./UserSettingService";
import { UserSetting } from "src/graphql/models/UserSettings";
import { userSettingsResolver } from "src/graphql/resolvers/UserSettingsResolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([User,UserSetting])
  ],
  providers:[UserResolver,UserService,UserSettingService,userSettingsResolver]
})
export class UsersModule{

}