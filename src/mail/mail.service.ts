import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerificationMail(
    receiverEmail: string,
    subject: string,
    content: string,
  ) {
    try {
      await this.mailerService.sendMail({
        to: receiverEmail,
        subject: subject,
        html: content,
      });
      return true;
    } catch (error) {
      console.log('Error sending emails: ', error);
      return false;
    }
  }
}
