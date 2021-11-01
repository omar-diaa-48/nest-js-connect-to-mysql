import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { configuration } from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`src/config/env/${process.env.NODE_ENV}.env`,
      load:[configuration],
      isGlobal:true
    }),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      name:'db-connection',
      useFactory: async (configService : ConfigService) => ({
      type:'mysql',
        host:configService.get('db.host'),
        port:configService.get('db.port'),
        username:configService.get('db.username'),
        password:configService.get('db.password'),
        database:configService.get('db.name'),
        entities:[__dirname + '/**/*.entity{.ts,.js}'],
        synchronize:true
      }),
      inject:[ConfigService]
    })
  ],



  controllers: [AppController],
  
  
  
  providers: [],
})
export class AppModule {}
