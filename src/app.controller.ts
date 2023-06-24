import { Controller, Get ,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { DaprClient } from '@dapr/dapr';
import { DaprPubSub } from '@dbc-tech/nest-dapr';
import {PubSubPublishResponseType} from '@dapr/dapr/types/pubsub/PubSubPublishResponse.type'

const pubSubName = 'my-pubsub';
const topicName = 'my-topic';

interface Message {
  hello: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly daprClient: DaprClient,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('pubsub')
  async pubsub(): Promise<PubSubPublishResponseType> {
    const message: Message = { hello: 'world' };

    return this.daprClient.pubsub.publish(pubSubName, topicName, message);
  }

  @DaprPubSub(pubSubName, topicName)
  pubSubHandler(message: Message): void {
    console.log(`Received topic:${topicName} message:`, message);
  }
}
