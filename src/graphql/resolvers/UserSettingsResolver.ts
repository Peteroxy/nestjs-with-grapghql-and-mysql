import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserSetting } from "../models/UserSettings";
import { createUserSettingsInput } from "../utils/CreateUserSettingsInput";
import { mockUserSettings } from "src/__mocks__/mockUserSettings";
import { UserSettingService } from "src/users/UserSettingService";

@Resolver()
export class userSettingsResolver{
  constructor(private userSettingsService: UserSettingService) { }
  
  @Mutation(returns => UserSetting)
  async createUserSettings(@Args('createUserSettingsData') createUserSettingsData: createUserSettingsInput) {
    
    const userSetting = await this.userSettingsService.createUserSettings(createUserSettingsData);
    return userSetting;
  }

}