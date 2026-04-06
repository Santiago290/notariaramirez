import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/send-email', async (req, res) => {
  try {
    const { nombres, apellidos, email, telefono, servicio, consulta } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: `"${nombres} ${apellidos}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'Nueva consulta desde la web',
      html: `
    <div style="background-color: #ffffff; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto;">
        
        <!-- Encabezado Estilo Minimal -->
        <div style="margin-bottom: 30px; text-align: left;">
          <h2 style="color: #1a1a1a; margin: 0; font-size: 28px; font-weight: 700;">Nueva consulta recibida</h2>
          <p style="color: #666; margin-top: 10px; font-size: 16px;">Aquí tienes los detalles del formulario de contacto.</p>
        </div>

        <!-- Tarjeta Principal (Basada en la imagen) -->
        <div style="background-color: #ffead9; border-radius: 32px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <p style="color: #7c0600; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; font-size: 13px; margin-bottom: 15px;">
            Resumen de la consulta
          </p>

          <h3 style="color: #1a1a1a; font-size: 22px; margin: 0 0 5px 0;">${nombres} ${apellidos}</h3>
          <p style="color: #555; font-size: 16px; margin: 0 0 30px 0;">${servicio}</p>

          <!-- Tabla de Datos -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(124, 6, 0, 0.1); color: #666; font-size: 15px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(124, 6, 0, 0.1); color: #1a1a1a; text-align: right; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(124, 6, 0, 0.1); color: #666; font-size: 15px;">Teléfono</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(124, 6, 0, 0.1); color: #1a1a1a; text-align: right; font-weight: 500;">${telefono}</td>
            </tr>
          </table>

          <!-- Sección de Mensaje / Consulta -->
          <div style="margin-top: 10px;">
            <p style="color: #666; font-size: 14px; margin-bottom: 8px;">Mensaje:</p>
            <div style="font-size: 16px; color: #1a1a1a; line-height: 1.6; font-weight: 400;">
              ${consulta}
            </div>
          </div>

          <!-- Botón de Acción Estilo Moderno -->
          <div style="margin-top: 40px; text-align: center;">
            <a href="mailto:${email}" style="background-color: #7c0600; color: #ffffff; padding: 15px 35px; border-radius: 12px; text-decoration: none; font-weight: 600; display: inline-block; font-size: 16px;">
              Responder ahora
            </a>
          </div>

        </div>

        <!-- Pie de página -->
        <div style="margin-top: 30px; text-align: center; color: #999; font-size: 12px;">
          Enviado desde el sistema de gestión web.
        </div>
      </div>
    </div>
  `
    })

    res.status(200).json({ message: 'Correo enviado correctamente' })

  } catch (error) {
    console.error(error)
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)
    res.status(500).json({ message: 'Error al enviar correo' })

  }
})

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001')
})