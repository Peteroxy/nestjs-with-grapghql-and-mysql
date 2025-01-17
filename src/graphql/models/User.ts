import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserSetting } from "./UserSettings";

@Entity({name:'users'})
@ObjectType()
export class User{

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  
  @Column()
  @Field()
  username: string;

  @Column({nullable:true})
  @Field({nullable:true})
  displayName?: string;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field({nullable:true})
  settings?:UserSetting

}