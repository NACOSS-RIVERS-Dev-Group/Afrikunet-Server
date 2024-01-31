import { MailerOptions } from '@nestjs-modules/mailer';
// import nodemailer from 'nodemailer';
// import Mailgen from 'mailgen';

export const mailerConfig: MailerOptions = {
  transport: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'afrikunet@gmail.com', // process.env.MAILER_ID, //"info.prohelpng@gmail.com",
      pass: 'jzdofhcibydztqag', //process.env.MAILER_PASSWORD, ///"jzdo fhci bydz tqag",
    },
  },
};

export function verificationEmailContent(code: any, firstname: string): string {
  return `<body
  class="clean-body u_body"
  style="
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    background-color: #f9f9f9;
    color: #000000;
  "
>
  <table
    id="u_body"
    style="
      border-collapse: collapse;
      table-layout: fixed;
      border-spacing: 0;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      vertical-align: top;
      min-width: 320px;
      margin: 0 auto;
      background-color: #f9f9f9;
      width: 100%;
    "
    cellpadding="0"
    cellspacing="0"
  >
    <tbody>
      <tr style="vertical-align: top">
        <td
          style="
            word-break: break-word;
            border-collapse: collapse !important;
            vertical-align: top;
          "
        >
          <div
            class="u-row-container"
            style="padding: 0px; background-color: transparent"
          >
            <div
              class="u-row"
              style="
                margin: 0 auto;
                min-width: 320px;
                max-width: 600px;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                background-color: #ffffff;
              "
            >
              <div
                style="
                  border-collapse: collapse;
                  display: table;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                "
              >
                <div
                  class="u-col u-col-100"
                  style="
                    max-width: 320px;
                    min-width: 600px;
                    display: table-cell;
                    vertical-align: top;
                  "
                >
                  <div style="height: 100%; width: 100% !important">
                    <div
                      style="
                        box-sizing: border-box;
                        height: 100%;
                        padding: 0px;
                        border-top: 0px solid transparent;
                        border-left: 0px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 0px solid transparent;
                      "
                    >
                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 20px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                              >
                                <tr>
                                  <td
                                    style="
                                      padding-right: 0px;
                                      padding-left: 0px;
                                    "
                                    align="center"
                                  >
                                  <div
                                  style="
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                  "
                                >
                                  <img
                                    align="center"
                                    border="0"
                                    src="https://i.imgur.com/QY47W6J.png"
                                    alt="Image"
                                    title="Image"
                                    style="
                                      outline: none;
                                      text-decoration: none;
                                      -ms-interpolation-mode: bicubic;
                                      clear: both;
                                      display: inline-block !important;
                                      border: none;
                                      height: auto;
                                      float: none;
                                      width: 22%;
                                      max-width: 140px;
                                    "
                                    width="140.0"
                                  />
                                  <h1 style="padding-left: 21px">
                                    AfriKunet
                                  </h1>
                                </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="u-row-container"
            style="padding: 0px; background-color: transparent"
          >
            <div
              class="u-row"
              style="
                margin: 0 auto;
                min-width: 320px;
                max-width: 600px;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                background-color: #0066f5;
              "
            >
              <div
                style="
                  border-collapse: collapse;
                  display: table;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                "
              >
                <div
                  class="u-col u-col-100"
                  style="
                    max-width: 320px;
                    min-width: 600px;
                    display: table-cell;
                    vertical-align: top;
                  "
                >
                  <div style="height: 100%; width: 100% !important">
                    <div
                      style="
                        box-sizing: border-box;
                        height: 100%;
                        padding: 0px;
                        border-top: 0px solid transparent;
                        border-left: 0px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 0px solid transparent;
                      "
                    >

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 10px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  color: #e5eaf5;
                                  line-height: 140%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="font-size: 14px; line-height: 140%">
                                  <strong
                                    >THANKS\t FOR\t SIGNING\t UP!</strong
                                  >
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 0px 10px 31px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  color: #e5eaf5;
                                  line-height: 140%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="font-size: 14px; line-height: 140%">
                                  <span
                                    style="font-size: 28px; line-height: 39.2px"
                                    ><strong
                                      ><span
                                        style="
                                          line-height: 39.2px;
                                          font-size: 28px;
                                        "
                                        >Verify Your Account</span
                                      ></strong
                                    >
                                  </span>
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="u-row-container"
            style="padding: 0px; background-color: transparent"
          >
            <div
              class="u-row"
              style="
                margin: 0 auto;
                min-width: 320px;
                max-width: 600px;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                background-color: #ffffff;
              "
            >
              <div
                style="
                  border-collapse: collapse;
                  display: table;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                "
              >
                <div
                  class="u-col u-col-100"
                  style="
                    max-width: 320px;
                    min-width: 600px;
                    display: table-cell;
                    vertical-align: top;
                  "
                >
                  <div style="height: 100%; width: 100% !important">
                    <div
                      style="
                        box-sizing: border-box;
                        height: 100%;
                        padding: 0px;
                        border-top: 0px solid transparent;
                        border-left: 0px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 0px solid transparent;
                      "
                    >
                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 33px 55px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  line-height: 160%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="font-size: 14px; line-height: 160%">
                                  <span
                                    style="font-size: 22px; line-height: 35.2px"
                                    >${'Hi ' + firstname}
                                  </span>
                                </p>
                                <p style="font-size: 14px; line-height: 160%">
                                  <span
                                    style="font-size: 18px; line-height: 28.8px"
                                    >You're almost ready to get started. Please use the code below to verify your account and enjoy our platform!  </span
                                  >
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 10px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div align="center">
                                <a
                                  href=""
                                  target="_self"
                                  class="v-button"
                                  style="
                                    box-sizing: border-box;
                                    display: inline-block;
                                    font-family: 'Cabin', sans-serif;
                                    text-decoration: none;
                                    -webkit-text-size-adjust: none;
                                    text-align: center;
                                    color: #ffffff;
                                    background-color: #18113c;
                                    border-radius: 4px;
                                    -webkit-border-radius: 4px;
                                    -moz-border-radius: 4px;
                                    width: auto;
                                    max-width: 100%;
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    word-wrap: break-word;
                                    mso-border-alt: none;
                                    font-size: 22px;
                                    font-weight: 700;
                                  "
                                >
                                  <span
                                    style="
                                      display: block;
                                      padding: 14px 44px 13px;
                                      line-height: 120%;
                                    "
                                    >${code}</span
                                  >
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 33px 55px 60px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  line-height: 160%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="line-height: 160%; font-size: 14px">
                                  <span
                                    style="font-size: 18px; line-height: 28.8px"
                                    >Regards,</span
                                  >
                                </p>
                                <p style="line-height: 160%; font-size: 14px">
                                  <span
                                    style="font-size: 18px; line-height: 28.8px"
                                    >The Afrikunet Team</span
                                  >
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="u-row-container"
            style="padding: 0px; background-color: transparent"
          >
            <div
              class="u-row"
              style="
                margin: 0 auto;
                min-width: 320px;
                max-width: 600px;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                background-color: #e5eaf5;
              "
            >
              <div
                style="
                  border-collapse: collapse;
                  display: table;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                "
              >
                <div
                  class="u-col u-col-100"
                  style="
                    max-width: 320px;
                    min-width: 600px;
                    display: table-cell;
                    vertical-align: top;
                  "
                >
                  <div style="height: 100%; width: 100% !important">
                    <div
                      style="
                        box-sizing: border-box;
                        height: 100%;
                        padding: 0px;
                        border-top: 0px solid transparent;
                        border-left: 0px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 0px solid transparent;
                      "
                    >
                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 41px 55px 18px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  color: #003399;
                                  line-height: 160%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="font-size: 14px; line-height: 160%">
                                  <span
                                    style="font-size: 20px; line-height: 32px"
                                    ><strong>Get in touch</strong></span
                                  >
                                </p>
                                <p style="font-size: 14px; line-height: 160%">
                                  <span
                                    style="
                                      font-size: 16px;
                                      line-height: 25.6px;
                                      color: #000000;
                                    "
                                    >+11 111 333 4444</span
                                  >
                                </p>
                                <p style="font-size: 14px; line-height: 160%">
                                  <span
                                    style="
                                      font-size: 16px;
                                      line-height: 25.6px;
                                      color: #000000;
                                    "
                                    >hello@afrikunet.com</span
                                  >
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 10px 10px 33px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div align="center">
                                <div style="display: table; max-width: 244px">
                                  <table
                                    align="left"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    width="32"
                                    height="32"
                                    style="
                                      width: 32px !important;
                                      height: 32px !important;
                                      display: inline-block;
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      margin-right: 17px;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          align="left"
                                          valign="middle"
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                          "
                                        >
                                          <a
                                            href="https://facebook.com/"
                                            title="Facebook"
                                            target="_blank"
                                          >
                                            <img
                                              src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                                              alt="Facebook"
                                              title="Facebook"
                                              width="32"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                max-width: 32px !important;
                                              "
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    align="left"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    width="32"
                                    height="32"
                                    style="
                                      width: 32px !important;
                                      height: 32px !important;
                                      display: inline-block;
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      margin-right: 17px;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          align="left"
                                          valign="middle"
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                          "
                                        >
                                          <a
                                            href="https://linkedin.com/"
                                            title="LinkedIn"
                                            target="_blank"
                                          >
                                            <img
                                              src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                                              alt="LinkedIn"
                                              title="LinkedIn"
                                              width="32"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                max-width: 32px !important;
                                              "
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    align="left"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    width="32"
                                    height="32"
                                    style="
                                      width: 32px !important;
                                      height: 32px !important;
                                      display: inline-block;
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      margin-right: 17px;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          align="left"
                                          valign="middle"
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                          "
                                        >
                                          <a
                                            href="https://instagram.com/"
                                            title="Instagram"
                                            target="_blank"
                                          >
                                            <img
                                              src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                                              alt="Instagram"
                                              title="Instagram"
                                              width="32"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                max-width: 32px !important;
                                              "
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    align="left"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    width="32"
                                    height="32"
                                    style="
                                      width: 32px !important;
                                      height: 32px !important;
                                      display: inline-block;
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      margin-right: 17px;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          align="left"
                                          valign="middle"
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                          "
                                        >
                                          <a
                                            href="https://youtube.com/"
                                            title="YouTube"
                                            target="_blank"
                                          >
                                            <img
                                              src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png"
                                              alt="YouTube"
                                              title="YouTube"
                                              width="32"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                max-width: 32px !important;
                                              "
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    align="left"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                    width="32"
                                    height="32"
                                    style="
                                      width: 32px !important;
                                      height: 32px !important;
                                      display: inline-block;
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      margin-right: 0px;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          align="left"
                                          valign="middle"
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                          "
                                        >
                                          <a
                                            href="https://email.com/"
                                            title="Email"
                                            target="_blank"
                                          >
                                            <img
                                              src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png"
                                              alt="Email"
                                              title="Email"
                                              width="32"
                                              style="
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                clear: both;
                                                display: block !important;
                                                border: none;
                                                height: auto;
                                                float: none;
                                                max-width: 32px !important;
                                              "
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="u-row-container"
            style="padding: 0px; background-color: transparent"
          >
            <div
              class="u-row"
              style="
                margin: 0 auto;
                min-width: 320px;
                max-width: 600px;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                background-color: #0066f5;
              "
            >
              <div
                style="
                  border-collapse: collapse;
                  display: table;
                  width: 100%;
                  height: 100%;
                  background-color: transparent;
                "
              >
                <div
                  class="u-col u-col-100"
                  style="
                    max-width: 320px;
                    min-width: 600px;
                    display: table-cell;
                    vertical-align: top;
                  "
                >
                  <div style="height: 100%; width: 100% !important">
                    <div
                      style="
                        box-sizing: border-box;
                        height: 100%;
                        padding: 0px;
                        border-top: 0px solid transparent;
                        border-left: 0px solid transparent;
                        border-right: 0px solid transparent;
                        border-bottom: 0px solid transparent;
                      "
                    >

                      <table
                        style="font-family: 'Cabin', sans-serif"
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                overflow-wrap: break-word;
                                word-break: break-word;
                                padding: 10px;
                                font-family: 'Cabin', sans-serif;
                              "
                              align="left"
                            >
                              <div
                                style="
                                  color: #fff;
                                  line-height: 180%;
                                  text-align: center;
                                  word-wrap: break-word;
                                "
                              >
                                <p style="font-size: 14px; line-height: 180%">
                                  <span
                                    style="font-size: 16px; line-height: 28.8px"
                                    >Copyright © Afrikunet. All Rights
                                    Reserved</span
                                  >
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </td>
      </tr>
    </tbody>
  </table>
</body>
`;
}

// export const sendVerificationCode = async (
//   email: string,
//   code: number,
//   firstname: string,
// ) => {
//   const msg = {
//     from: 'afrikunet@gmail.com', // process.env.MAILER_ID,
//     to: email,
//     subject: 'Account Verification',
//     html: content,
//   };

//   // return transporter.sendMail(msg);
// };
