const { Router } = require('express');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const push = require('push.js');
const database = require('../database');


router.post('/notifications', async (req, res) => {
    const { id } = req.body
if(id==1){
    const notificaciones = [{"id":1,"tituloNotificacion":"Carlos te ha enviado un mensaje","contenidoNotificacion":"Men Va a asistir?","tipo":"mensaje"},
    {"id":2,"tituloNotificacion":"Tienes asesoria a las 4","contenidoNotificacion":"El profe esteban te espera en la asesoria","tipo":"asesoria"},
    {"id":3,"tituloNotificacion":"Auditoria programada","contenidoNotificacion":"Recuerda la auditoria, no la dejes pasar :)" ,"tipo":"auditoria"},
    {"id":4,"tituloNotificacion":"Lana te ha enviado un mensaje","contenidoNotificacion":"Vienes a mi casa?","tipo":"mensaje"},
    {"id":4,"tituloNotificacion":"Ivonne te ha enviado un mensaje","contenidoNotificacion":"Cristian usted por que es asi?","tipo":"mensaje"},
    {"id":5,"tituloNotificacion":"Registro exitoso","contenidoNotificacion":"Te has registrado correctamente, gracias por preferirnos","tipo":"registro"},
    {"id":6,"tituloNotificacion":"Inicio de sesion","contenidoNotificacion":"Has iniciado sesion 24/12/2021","tipo":"login"}]
    res.send(notificaciones);
}else{
res.send("Sin datos");
}
});


router.get('/',(req,res) =>{
 res.send("DATOS ENVIADOS OK");
})

router.post('/insertarPC', async (req, res) => {
    
    const { tipo } = req.body;
    const { marca, referencia, procesador, ram, almacenamiento, grafica } = req.body;

    const newPC = {
        comp_tipo: tipo,
        comp_marca: marca,
        comp_ref: referencia,
        comp_proc: procesador,
        comp_ram: ram,
        comp_alm: almacenamiento,
        comp_vid: grafica,
        image_url: result.url,
        public_id: result.public_id
   };
try {
    const pc = await database.query('INSERT INTO computador set ?', [newPC]);
    res.send("Status: 200  Insercion OK");
} catch (error) {
    res.send("Status: 500  aLGO HA FALLADO");
}
   

    
});


router.post('/mirarJSON', (req,res)=>{
    const { name } = req.body;
    const { secondname } = req.body;
  
    const newUser = {
         vend_nombre: name,
         vend_apell: secondname
    }

    res.cookie('token','12fwra43ywdcris');
    push.Push.create('Hello World!')
    res.send('OK = '+name+secondname)
    

})



router.get('/sendMail', async (req, res) => {

    const { email} = req.body
    const contentHTML = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;margin:0 auto"> 
    <tbody> 
    <tr> 
    <td valign="top" style="word-break:break-word;border-collapse:collapse"> 
     
    <table width="640" style="margin:0 auto;border-spacing:0;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0"> 
    <tbody>
    <tr> 
    <td bgcolor="#FFFFFF" style="border-collapse:collapse;background-color:#ffffff"> 
    <table style="margin:0 auto;width:600px" align="center" border="0" cellpadding="0" cellspacing="0" width="600"> 
     
    <tbody>
    <tr> 
    <td height="15" style="line-height:1px;font-size:1px">&nbsp; </td> 
    </tr> 
    <tr> 
    <td width="120" valign="top" align="left"> 
    <div id="m_6655362251918668093Logo-bp">
    <img alt="Logo" border="0" src="https://res.cloudinary.com/sqa/image/upload/v1639229396/port-2_esdndl.jpg" width="696" class="CToWUd">
    </div> </td> 
    </tr> 
     
    <tr> 
    <td height="15" style="line-height:1px;font-size:1px">&nbsp; </td> 
    </tr> 
    </tbody>
    </table> </td> 
    </tr> 
    </tbody>
    </table> 
     
    <table width="640" align="center" id="m_6655362251918668093boxing" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;margin:0 auto;min-width:640px"> 
    <tbody>
    <tr> 
    <td id="m_6655362251918668093module-wrapper" style="word-break:break-word;border-collapse:collapse">
    <table id="m_6655362251918668093Title87cdb47d-f4ec-4953-b0e5-82337e3effee" style="border-spacing:0;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
    <tbody> 
    <tr> 
    <td bgcolor="#FFFFFF" style="background-color:#ffffff"> 
    <table style="width:600px;margin:0 auto;text-align:center;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="600"> 
     
    <tbody> 
    <tr> 
    <td style="line-height:1px;font-size:1px" height="20">&nbsp;</td> 
    </tr> 
    <tr> 
    <td style="font-size:20px;color:#000000;font-family:Arial,Helvetica,sans-serif;line-height:26px" valign="top"> 
    <div id="m_6655362251918668093titlesec-main-title87cdb47d-f4ec-4953-b0e5-82337e3effee"> 
    <div style="text-align:left"> 
    <span style="color:#0c163b"><b>Gracias por registrarte con nosotros!</b></span> 
    </div> 
    </div> </td> 
    </tr> 
     
    <tr> 
    <td style="line-height:1px;font-size:1px" height="0">&nbsp;</td> 
    </tr> 
    <tr> 
    <td style="font-size:14px;color:#000000;font-family:Arial,Helvetica,sans-serif;line-height:20px" valign="top"> 
    <div id="m_6655362251918668093titlesec-main-sub-title87cdb47d-f4ec-4953-b0e5-82337e3effee"></div> </td> 
    </tr> 
     
    <tr> 
    <td style="line-height:1px;font-size:1px" height="0">&nbsp;</td> 
    </tr> 
    </tbody> 
    </table> </td> 
    </tr> 
    </tbody> 
    </table>
    <table id="m_6655362251918668093FreeText" style="border-spacing:0;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
    <tbody> 
    <tr> 
    <td bgcolor="#FFFFFF" style="background-color:#ffffff"> 
    <table style="width:600px;margin:0 auto;text-align:center;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="600"> 
     
    <tbody> 
    <tr> 
    <td style="line-height:1px;font-size:1px" height="20">&nbsp;</td> 
    </tr> 
    <tr> 
    <td style="font-size:14px;color:#000000;font-family:Arial,Helvetica,sans-serif;line-height:20px;text-align:left" valign="top"> 
    <div id="m_6655362251918668093FreeTextContent"> 
    <div>
     Los datos para iniciar sesion son los siguientes: 
    <br> 
    </div> 
    <ul style="color:#000000;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;text-decoration-style:initial;text-decoration-color:initial"> 
    <li><strong>Usuario: CristianT</strong><br></li> 
    <li><strong>Contraseña: @123dcr15</strong></li> 
    
    </ul> 
    <span style="color:#000000;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;text-decoration-style:initial;text-decoration-color:initial;display:inline!important;float:none">Gracias por preferirnos!</span> 
    <br> 
    </div> </td> 
    </tr> 
     
    <tr> 
    <td style="line-height:1px;font-size:1px" height="20">&nbsp;</td> 
    </tr> 
    </tbody> 
    </table> </td> 
    </tr> 
    </tbody> 
    </table>
    <table id="m_6655362251918668093Button" style="border-spacing:0;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"> 
    <tbody> 
    <tr> 
    <td bgcolor="#FFFFFF" style="background-color:#ffffff"> 
    <table style="width:600px;margin:0 auto;text-align:center;border-collapse:collapse" align="center" border="0" cellpadding="0" cellspacing="0" width="600"> 
     
    <tbody> 
    <tr> 
    <td style="line-height:1px;font-size:1px" height="10">&nbsp;</td> 
    </tr> 
     
    <tr> 
    <td valign="top"> 
    <div id="m_6655362251918668093banner-button1"> 
    <table style="margin:0 auto" width="auto" align="center" border="0" cellpadding="0" cellspacing="0"> 
    <tbody> 
    <tr> 
    <td style="background-color:#ff5050;border:1px solid #ff5050;border-radius:20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:22px;text-align:center;vertical-align:middle;color:#ffffff;display:block;padding:9px 40px 8px" valign="middle"> <a style="text-decoration:none;color:#ffffff!important;outline:none" href="https://email.cloudinary.com/Mzk2LUxSQi01MjQAAAGBGobA7ALw15RnVf8ZbcstHAM_ldBlT8awWoWZLsP3knljmaiSi9qEcxSl_-fx7Wfvbph5oz4=" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://email.cloudinary.com/Mzk2LUxSQi01MjQAAAGBGobA7ALw15RnVf8ZbcstHAM_ldBlT8awWoWZLsP3knljmaiSi9qEcxSl_-fx7Wfvbph5oz4%3D&amp;source=gmail&amp;ust=1639085166505000&amp;usg=AOvVaw0TWdLzxW3wIrfooUD7cjlC"> <span style="color:#ffffff">VISITANOS</span> </a> </td> 
    </tr> 
    </tbody> 
    </table> 
    </div> </td> 
    </tr> 
    <tr> 
    <td style="line-height:1px;font-size:1px" height="30">&nbsp;</td> 
    </tr> 
    </tbody> 
    </table> </td> 
    </tr> 
    </tbody> 
    </table></td> 
    </tr> 
    </tbody>
    </table> </td> 
    </tr> 
    </tbody> 
    </table>`;
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    try {

        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "cristianricardotl@ufps.edu.co",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: "Portal <cristianricardotl@ufps.edu.co>",
            to: "cristian.tautiva@sqasa.co",
            subject: "Registro exitoso",
            html: contentHTML
        };

        await transporter.sendMail(mailOptions);
        res.send("enviado");

    } catch (err) {
        console.log("error " + err);
        res.send("error al enviar");
    }

})

module.exports = router;