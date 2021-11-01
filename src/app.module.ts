import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config'
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`src/config/env/${process.env.NODE_ENV}.env`,
      load:[configuration]
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
