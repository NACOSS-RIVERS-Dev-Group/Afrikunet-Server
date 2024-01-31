import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/utils/email';

@Module({
  imports: [MailerModule.forRoot(mailerConfig)],
  providers: [MailService],
})
export class MailModule {}
