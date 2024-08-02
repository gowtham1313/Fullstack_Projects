import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../service/rest.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
// datalist:any = [];
//   constructor(private _activeRouter: ActivatedRoute,public service:RestService) {
//     _activeRouter.params.subscribe((paramsData) => {
//       console.log(this.datalist)
//       console.log(this.datalist.firstName)
//       let params = {
//         'Template':`<!DOCTYPE html>
//
// <html
//   lang="en"
//   xmlns:o="urn:schemas-microsoft-com:office:office"
//   xmlns:v="urn:schemas-microsoft-com:vml"
// >
//   <head>
//     <title></title>
//     <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
//     <meta content="width=device-width, initial-scale=1.0" name="viewport" />
//     <!--[if mso
//       ]><xml
//         ><o:OfficeDocumentSettings
//           ><o:PixelsPerInch>96</o:PixelsPerInch
//           ><o:AllowPNG /></o:OfficeDocumentSettings></xml
//     ><![endif]-->
//     <style>
//       * {
//         box-sizing: border-box;
//       }
//
//       body {
//         margin: 0;
//         padding: 0;
//       }
//
//       a[x-apple-data-detectors] {
//         color: inherit !important;
//         text-decoration: inherit !important;
//       }
//
//       #MessageViewBody a {
//         color: inherit;
//         text-decoration: none;
//       }
//
//       p {
//         line-height: inherit;
//       }
//
//       .desktop_hide,
//       .desktop_hide table {
//         mso-hide: all;
//         display: none;
//         max-height: 0px;
//         overflow: hidden;
//       }
//
//       .image_block img + div {
//         display: none;
//       }
//
//       @media (max-width: 660px) {
//         .desktop_hide table.icons-inner {
//           display: inline-block !important;
//         }
//
//         .icons-inner {
//           text-align: center;
//         }
//
//         .icons-inner td {
//           margin: 0 auto;
//         }
//
//         .image_block img.fullWidth {
//           max-width: 100% !important;
//         }
//
//         .social_block.desktop_hide .social-table {
//           display: inline-block !important;
//         }
//
//         .row-content {
//           width: 100% !important;
//         }
//
//         .stack .column {
//           width: 100%;
//           display: block;
//         }
//
//         .mobile_hide {
//           max-width: 0;
//           min-height: 0;
//           max-height: 0;
//           font-size: 0;
//           display: none;
//           overflow: hidden;
//         }
//
//         .desktop_hide,
//         .desktop_hide table {
//           max-height: none !important;
//           display: table !important;
//         }
//       }
//
//       table {
//         border: 0;
//         padding: 0;
//         border-spacing: 0;
//       }
//     </style>
//   </head>
//   <body
//     style="
//       text-size-adjust: none;
//       background-color: #030512;
//       margin: 0;
//       padding: 0;
//     "
//   >
//     <table
//       class="nl-container"
//       role="presentation"
//       style="
//         mso-table-lspace: 0pt;
//         mso-table-rspace: 0pt;
//         background-color: #030512;
//       "
//       width="100%"
//     >
//       <tbody>
//         <tr>
//           <td>
//             <table
//               align="center"
//
//
//               class="row row-1"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 50px;
//                                     padding-left: 30px;
//                                     padding-right: 30px;
//                                     padding-top: 30px;
//                                     width: 100%;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Your logo"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_yourlogo.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 256px;
//                                         width: 100%;
//                                       "
//                                       title="Your logo"
//                                       width="256"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-2"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Girl Hero Image"
//                                       src="../../../../Web/src/assets/Template_Images/VGD_Girl_BG_gradient.jpg"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 640px;
//                                         width: 100%;
//                                       "
//                                       title="Girl Hero Image"
//                                       width="640"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-left: 60px;
//                                     padding-right: 60px;
//                                     width: 100%;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Glitch Effect Banner"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_GLITCHLOGO_SIZE.gif"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 256px;
//                                         width: 100%;
//                                       "
//                                       title="Glitch Effect Banner"
//                                       width="256"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//
//               class="row row-3"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 28px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 42px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >5 GAMES YOU SHOULD PLAY THIS
//                                             MONTH</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat
//                                         volutpat. Ut wisi enim ad minim veniam,
//                                         quis nostrud exerci tation ullamcorper
//                                         suscipit lobortis nisl ut aliquip.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 15px;
//                                 line-height: 15px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="paragraph_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                             >Discover now ></a
//                                           ></em
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-5"
//                               style="
//                                 height: 20px;
//                                 line-height: 20px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-6"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     width: 100%;
//                                     padding-right: 0px;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider2.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 480px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="480"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-7"
//                               style="
//                                 height: 50px;
//                                 line-height: 50px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//
//               class="row row-4"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 40px;
//                                 line-height: 40px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 20px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 30px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >GALACTIC ARMORY</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >AVAILABLE ON</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               class="social_block block-5"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 padding="10"
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="164.95999999999998px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PlayStation"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/PS.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PlayStation"
//                                               width="41.6"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Xbox"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/xbox.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Xbox"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PC"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/pc.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PC"
//                                               width="31.36"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-6"
//                               style="
//                                 height: 40px;
//                                 line-height: 40px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-7"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider3.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="GAME ONE"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_Galactic.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="GAME ONE"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-5"
//               role="presentation"
//               style="
//                 mso-table-lspace: 0pt;
//                 mso-table-rspace: 0pt;
//                 background-position: top center;
//               "
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 30px;
//                                 line-height: 30px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-6"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="GAME TWO"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_TREASURE.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="GAME TWO"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 20px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 30px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >TREASURE TROVE</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >AVAILABLE ON</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="social_block block-5"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="103.36px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Xbox"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/xbox.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Xbox"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PC"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/pc.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PC"
//                                               width="31.36"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-6"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-7"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider3.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-7"
//               role="presentation"
//               style="
//                 mso-table-lspace: 0pt;
//                 mso-table-rspace: 0pt;
//                 background-position: center top;
//               "
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 30px;
//                                 line-height: 30px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     width: 100%;
//                                     padding-right: 0px;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Glitch Effect Game of the Month banner"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_GAMEOFTHEMONTH.gif"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 480px;
//                                         width: 100%;
//                                       "
//                                       title="Glitch Effect Game of the Month banner"
//                                       width="480"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 10px;
//                                 line-height: 10px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-8"
//               role="presentation"
//               style="
//                 mso-table-lspace: 0pt;
//                 mso-table-rspace: 0pt;
//                 background-image: url('../../../../Web/src/assets/Template_Images/vgd_race_bg2.png');
//                 background-position: center top;
//                 background-repeat: no-repeat;
//               "
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="GAME THREE"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_race_glow.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 640px;
//                                         width: 100%;
//                                       "
//                                       title="GAME THREE"
//                                       width="640"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-9"
//               role="presentation"
//               style="
//                 mso-table-lspace: 0pt;
//                 mso-table-rspace: 0pt;
//                 background-position: center top;
//               "
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 20px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 20px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 30px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >RACING SIMULATOR 2</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >PC ONLY | FIND IT ON</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="social_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="142.88px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Steam"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/STEAM.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Steam"
//                                               width="31.68"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Epic Games"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/EPIC.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Epic Games"
//                                               width="27.52"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Origin"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/ORIGIN.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Origin"
//                                               width="23.68"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-10"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider4.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 640px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="640"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-2"
//                               style="
//                                 height: 30px;
//                                 line-height: 30px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-11"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 20px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 30px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >LILAC NEBULA</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >AVAILABLE ON</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="social_block block-5"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="164.95999999999998px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PlayStation"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/PS.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PlayStation"
//                                               width="41.6"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Xbox"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/xbox.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Xbox"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PC"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/pc.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PC"
//                                               width="31.36"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-6"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-7"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider3.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="GAME FOUR"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_LILAC-NEBULA2.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="GAME FOUR"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-12"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 30px;
//                                 line-height: 30px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-13"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <table
//
//
//                               class="image_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="GAME FIVE"
//                                       src="../../../../Web/src/assets/Template_Images/dragon.jpg"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="GAME FIVE"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="50%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 20px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 30px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >DRAGON SLAYER</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 10px;
//                                     padding-right: 10px;
//                                     padding-top: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >AVAILABLE ON</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="social_block block-5"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="164.95999999999998px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PlayStation"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/PS.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PlayStation"
//                                               width="41.6"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Xbox"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/xbox.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Xbox"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 10px 0 10px">
//                                           <a
//                                             href="https://www.example.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="PC"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/pc.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="PC"
//                                               width="31.36"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-6"
//                               style="
//                                 height: 35px;
//                                 line-height: 35px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-7"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider3.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 320px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="320"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-14"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 50px;
//                                 line-height: 50px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     width: 100%;
//                                     padding-right: 0px;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/5abb578d-a808-4786-a6e3-557fa1ac023d.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 480px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="480"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 10px;
//                                 line-height: 10px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//                               cellpadding="20"
//                               cellspacing="0"
//                               class="image_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_LATESTBLOG.gif"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 352px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="352"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-15"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna aliquam erat
//                                         volutpat. Ut wisi enim ad minim veniam,
//                                         quis nostrud exerci tation ullamcorper
//                                         suscipit lobortis nisl ut aliquip.</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-2"
//                               style="
//                                 height: 15px;
//                                 line-height: 15px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-16"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                             >Discover now ></a
//                                           ></em
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-2"
//                               style="
//                                 height: 40px;
//                                 line-height: 40px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-17"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="66.66666666666667%"
//                           >
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 28px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 42px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >OVERWATCH LEAGUE 2</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna </span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="5"
//                               cellspacing="0"
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                             >Read </a
//                                           ></em
//                                         ></span
//                                       ><span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                           >
//                                             now ></a
//                                           ></em
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="33.333333333333336%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 10px;
//                                 line-height: 10px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Overwatch Pro Player"
//                                       src="../../../../Web/src/assets/Template_Images/VGD_guy.jpg"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 213.33333333333331px;
//                                         width: 100%;
//                                       "
//                                       title="Overwatch Pro Player"
//                                       width="213.33333333333331"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-18"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider4.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 640px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="640"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-19"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="66.66666666666667%"
//                           >
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 28px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 42px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >VALORANT GOES LIVE</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="5"
//                               cellspacing="0"
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                             >Read </a
//                                           ></em
//                                         ></span
//                                       ><span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                           >
//                                             now ></a
//                                           ></em
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="33.333333333333336%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 10px;
//                                 line-height: 10px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Keyboard"
//                                       src="../../../../Web/src/assets/Template_Images/keyboard.jpg"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 213.33333333333331px;
//                                         width: 100%;
//                                       "
//                                       title="Keyboard"
//                                       width="213.33333333333331"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-20"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad" style="width: 100%">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider4.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 640px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="640"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-21"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="66.66666666666667%"
//                           >
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 28px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 42px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><strong
//                                           ><span style="color: #ffffff"
//                                             >LEC VS LCS</span
//                                           ></strong
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//
//                               class="paragraph_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="5"
//                               cellspacing="0"
//                               class="paragraph_block block-3"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 150%;
//                                       text-align: center;
//                                       mso-line-height-alt: 24px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                             >Read </a
//                                           ></em
//                                         ></span
//                                       ><span
//                                         ><em
//                                           ><a
//                                             href="https://www.example.com"
//                                             rel="noopener"
//                                             style="
//                                               text-decoration: none;
//                                               color: #ffffff;
//                                             "
//                                             target="_blank"
//                                           >
//                                             now ></a
//                                           ></em
//                                         ></span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td
//                             class="column column-2"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="33.333333333333336%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 10px;
//                                 line-height: 10px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-right: 30px;
//                                     width: 100%;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="LEC"
//                                       src="../../../../Web/src/assets/Template_Images/CROWN.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 149.33333333333331px;
//                                         width: 100%;
//                                       "
//                                       title="LEC"
//                                       width="149.33333333333331"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-22"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 40px;
//                                 line-height: 40px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="image_block block-2"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     width: 100%;
//                                     padding-right: 0px;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       class="fullWidth"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_divider2.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 480px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="480"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-3"
//                               style="
//                                 height: 50px;
//                                 line-height: 50px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//                               cellpadding="5"
//                               cellspacing="0"
//                               class="image_block block-4"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     align="center"
//                                     class="alignment"
//                                     style="line-height: 10px"
//                                   >
//                                     <img
//                                       alt="Alternate text"
//                                       src="../../../../Web/src/assets/Template_Images/vgd_followus.png"
//                                       style="
//                                         height: auto;
//                                         display: block;
//                                         border: 0;
//                                         max-width: 262px;
//                                         width: 100%;
//                                       "
//                                       title="Alternate text"
//                                       width="262"
//                                     />
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-5"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="social_block block-6"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     text-align: center;
//                                     padding-right: 0px;
//                                     padding-left: 0px;
//                                   "
//                                 >
//                                   <div align="center" class="alignment">
//                                     <table
//
//                                       cellpadding="0"
//                                       cellspacing="0"
//                                       class="social-table"
//                                       role="presentation"
//                                       style="
//                                         mso-table-lspace: 0pt;
//                                         mso-table-rspace: 0pt;
//                                         display: inline-block;
//                                       "
//                                       width="126px"
//                                     >
//                                       <tr>
//                                         <td style="padding: 0 5px 0 5px">
//                                           <a
//                                             href="https://www.facebook.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Facebook"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/facebook2x.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Facebook"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 5px 0 5px">
//                                           <a
//                                             href="https://www.twitter.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Twitter"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/twitter2x.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Twitter"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                         <td style="padding: 0 5px 0 5px">
//                                           <a
//                                             href="https://www.instagram.com"
//                                             target="_blank"
//                                             ><img
//                                               alt="Instagram"
//                                               height="32"
//                                               src="../../../../Web/src/assets/Template_Images/instagram2x.png"
//                                               style="
//                                                 height: auto;
//                                                 display: block;
//                                                 border: 0;
//                                               "
//                                               title="Instagram"
//                                               width="32"
//                                           /></a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <div
//                               class="spacer_block block-7"
//                               style="
//                                 height: 25px;
//                                 line-height: 25px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                             <table
//
//
//                               class="paragraph_block block-8"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     padding-bottom: 10px;
//                                     padding-left: 20px;
//                                     padding-right: 20px;
//                                   "
//                                 >
//                                   <div
//                                     style="
//                                       color: #555555;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 16px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 19.2px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Lorem ipsum dolor sit amet,
//                                         consectetuer adipiscing elit, sed diam
//                                         nonummy nibh euismod tincidunt ut
//                                         laoreet dolore magna</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-9"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #c0c0c0;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       Changed your mind? You can
//                                       <a
//                                         href="*|UNSUB|*"
//                                         rel="noopener"
//                                         style="text-decoration: underline"
//                                         target="_blank"
//                                         >unsubscribe</a
//                                       >  at any time.
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                             <table
//
//                               cellpadding="10"
//                               cellspacing="0"
//                               class="paragraph_block block-10"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                                 word-break: break-word;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td class="pad">
//                                   <div
//                                     style="
//                                       color: #c0c0c0;
//                                       font-family: Montserrat, Trebuchet MS,
//                                         Lucida Grande, Lucida Sans Unicode,
//                                         Lucida Sans, Tahoma, sans-serif;
//                                       font-size: 14px;
//                                       line-height: 120%;
//                                       text-align: center;
//                                       mso-line-height-alt: 16.8px;
//                                     "
//                                   >
//                                     <p
//                                       style="margin: 0; word-break: break-word"
//                                     >
//                                       <span style="color: #ffffff"
//                                         >Copyright © 2020</span
//                                       >
//                                     </p>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-23"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         background-color: #030512;
//                         background-position: top;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <div
//                               class="spacer_block block-1"
//                               style="
//                                 height: 30px;
//                                 line-height: 30px;
//                                 font-size: 1px;
//                               "
//                             ></div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <table
//               align="center"
//
//               cellpadding="0"
//               cellspacing="0"
//               class="row row-24"
//               role="presentation"
//               style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
//               width="100%"
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <table
//                       align="center"
//
//                       cellpadding="0"
//                       cellspacing="0"
//                       class="row-content stack"
//                       role="presentation"
//                       style="
//                         mso-table-lspace: 0pt;
//                         mso-table-rspace: 0pt;
//                         color: #000;
//                         width: 640px;
//                         margin: 0 auto;
//                       "
//                       width="640"
//                     >
//                       <tbody>
//                         <tr>
//                           <td
//                             class="column column-1"
//                             style="
//                               mso-table-lspace: 0pt;
//                               mso-table-rspace: 0pt;
//                               text-align: left;
//                               font-weight: 400;
//                               padding-bottom: 5px;
//                               padding-top: 5px;
//                               vertical-align: top;
//                               border-top: 0px;
//                               border-right: 0px;
//                               border-bottom: 0px;
//                               border-left: 0px;
//                             "
//                             width="100%"
//                           >
//                             <table
//
//
//                               class="icons_block block-1"
//                               role="presentation"
//                               style="
//                                 mso-table-lspace: 0pt;
//                                 mso-table-rspace: 0pt;
//                               "
//                               width="100%"
//                             >
//                               <tr>
//                                 <td
//                                   class="pad"
//                                   style="
//                                     vertical-align: middle;
//                                     color: #9d9d9d;
//                                     font-family: inherit;
//                                     font-size: 15px;
//                                     padding-bottom: 5px;
//                                     padding-top: 5px;
//                                     text-align: center;
//                                   "
//                                 >
//                                   <table
//                                     cellpadding="0"
//                                     cellspacing="0"
//                                     role="presentation"
//                                     style="
//                                       mso-table-lspace: 0pt;
//                                       mso-table-rspace: 0pt;
//                                     "
//                                     width="100%"
//                                   >
//                                     <tr>
//                                       <td
//                                         class="alignment"
//                                         style="
//                                           vertical-align: middle;
//                                           text-align: center;
//                                         "
//                                       >
//                                         <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
//                                         <!--[if !vml]><!-->
//                                         <table
//                                           cellpadding="0"
//                                           cellspacing="0"
//                                           class="icons-inner"
//                                           role="presentation"
//                                           style="
//                                             mso-table-lspace: 0pt;
//                                             mso-table-rspace: 0pt;
//                                             display: inline-block;
//                                             margin-right: -4px;
//                                             padding-left: 0px;
//                                             padding-right: 0px;
//                                           "
//                                         >
//                                           <!--<![endif]-->
//                                           <tr>
//                                             <td
//                                               style="
//                                                 vertical-align: middle;
//                                                 text-align: center;
//                                                 padding-top: 5px;
//                                                 padding-bottom: 5px;
//                                                 padding-left: 5px;
//                                                 padding-right: 6px;
//                                               "
//                                             >
//                                               <a
//                                                 href="https://www.designedwithbee.com/"
//                                                 style="text-decoration: none"
//                                                 target="_blank"
//                                                 ><img
//                                                   align="center"
//                                                   alt="Designed with BEE"
//                                                   class="icon"
//                                                   height="32"
//                                                   src="../../../../Web/src/assets/Template_Images/bee.png"
//                                                   style="
//                                                     height: auto;
//                                                     display: block;
//                                                     margin: 0 auto;
//                                                     border: 0;
//                                                   "
//                                                   width="34"
//                                               /></a>
//                                             </td>
//                                             <td
//                                               style="
//                                                 font-family: Montserrat,
//                                                   Trebuchet MS, Lucida Grande,
//                                                   Lucida Sans Unicode,
//                                                   Lucida Sans, Tahoma,
//                                                   sans-serif;
//                                                 font-size: 15px;
//                                                 color: #9d9d9d;
//                                                 vertical-align: middle;
//                                                 letter-spacing: undefined;
//                                                 text-align: center;
//                                               "
//                                             >
//                                               <a
//                                                 href="https://www.designedwithbee.com/"
//                                                 style="
//                                                   color: #9d9d9d;
//                                                   text-decoration: none;
//                                                 "
//                                                 target="_blank"
//                                                 >Designed with BEE</a
//                                               >
//                                             </td>
//                                           </tr>
//                                         </table>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     <!-- End -->
//   </body>
// </html>
// `,
//         "toEmail": "crazykicks6969@gmail.com,bharathsriram2000@gmail.com",
//         "bccEmail": "donglee.at@gmail.com,lifetester0210@gmail.com"
//       }
//       this.service.postData(params,'/EmailNotification').subscribe((date:any)=>{
//         console.log('SUccess')
//       })
//
//
//     })
//   }

}
