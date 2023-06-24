import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaprModule } from '@dbc-tech/nest-dapr';
import { CommunicationProtocolEnum } from "@dapr/dapr";


@Module({
  imports: [DaprModule.register({
    serverHost:process.env.DAPR_SERVER_HOST,
    serverPort:process.env.DAPR_SERVER_PORT,
    communicationProtocol: CommunicationProtocolEnum.HTTP,
    clientOptions:{
      daprHost:process.env.DAPR_HOST,
      daprPort:process.env.DAPR_PORT,
      communicationProtocol:CommunicationProtocolEnum.HTTP
    }

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
