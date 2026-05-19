import express from 'express'
import { Resend } from 'resend'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const requiredMailConfig = [
  'RESEND_API_KEY',
  'MAIL_FROM',
  'MAIL_TO'
]

const escapeHtml = (value = '') => {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

const renderField = (label, value) => `
  <tr>
    <td style="padding: 12px 0; color: #6d6d6d; font-size: 13px; width: 42%; vertical-align: top;">${label}</td>
    <td style="padding: 12px 0; color: #212121; font-size: 14px; font-weight: 600; vertical-align: top;">${escapeHtml(value || 'No indicado')}</td>
  </tr>
`

const renderSection = (title, rows) => `
  <div style="background-color: #ffffff; border: 1px solid #e6e6e6; border-radius: 12px; padding: 22px; margin-bottom: 18px;">
    <h3 style="color: #7c0600; font-size: 17px; margin: 0 0 12px; font-weight: 700;">${title}</h3>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
      ${rows.join('')}
    </table>
  </div>
`

const validateMailConfig = (res) => {
  const missingConfig = requiredMailConfig.filter((key) => !process.env[key])

  if (missingConfig.length > 0) {
    res.status(500).json({ message: 'Faltan variables de entorno para enviar el correo', missingConfig })
    return false
  }

  return true
}

app.post('/send-email', async (req, res) => {
  try {
    if (!validateMailConfig(res)) return

    const resend = new Resend(process.env.RESEND_API_KEY)
    const {
      nombres,
      apellidos,
      email,
      telefono,
      servicio,
      consulta,
      tipoDocumento,
      numeroDocumento,
      direccion,
      tipoReclamo,
      detalleReclamo,
      pedidoConsumidor,
      aceptarTratamiento
    } = req.body

    const isLibroReclamaciones = Boolean(tipoReclamo || detalleReclamo || pedidoConsumidor)
    const subject = isLibroReclamaciones
      ? 'Nuevo registro en el Libro de Reclamaciones'
      : 'Nueva consulta desde la web'

    const html = isLibroReclamaciones
      ? `
        <div style="background-color: #f4f4f4; padding: 36px 18px; font-family: Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 14px 38px rgba(33, 33, 33, 0.12);">
            <div style="background-color: #7c0600; padding: 28px 30px; border-bottom: 6px solid #fab937;">
              <p style="color: #ffead9; margin: 0 0 8px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">Notaria Ramirez</p>
              <h2 style="color: #ffffff; margin: 0; font-size: 28px; line-height: 1.2; font-weight: 700;">Libro de Reclamaciones</h2>
              <p style="color: #fde1c6; margin: 10px 0 0; font-size: 15px;">Nuevo registro recibido desde la pagina web</p>
            </div>

            <div style="padding: 28px 30px 12px; background-color: #fffbf8;">
              <div style="background-color: #ffffff; border-left: 5px solid #7c0600; border-radius: 12px; padding: 18px 20px; margin-bottom: 18px;">
                <p style="margin: 0 0 6px; color: #6d6d6d; font-size: 13px;">Datos del proveedor</p>
                <p style="margin: 0; color: #212121; font-size: 14px; line-height: 1.7;">
                  <strong>RUC:</strong> 10178949913<br>
                  <strong>Razon Social:</strong> Rolando Alejandro Ramirez Carranza<br>
                  <strong>Domicilio:</strong> Av. Cesar Vallejo 290, Lince
                </p>
              </div>

              ${renderSection('1. Datos del consumidor', [
                renderField('Nombres', nombres),
                renderField('Apellidos', apellidos),
                renderField('Tipo de documento', tipoDocumento),
                renderField('Numero de documento', numeroDocumento),
                renderField('Direccion', direccion),
                renderField('Correo electronico', email),
                renderField('Telefono', telefono)
              ])}

              ${renderSection('2. Detalle del reclamo', [
                renderField('Tipo de reclamo', tipoReclamo),
                renderField('Detalle', detalleReclamo)
              ])}

              ${renderSection('3. Pedido del consumidor', [
                renderField('Pedido', pedidoConsumidor),
                renderField('Acepta tratamiento de datos', aceptarTratamiento ? 'Si' : 'No')
              ])}
            </div>
          </div>
        </div>
      `
      : `
        <div style="background-color: #ffffff; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a; margin: 0 0 10px; font-size: 28px; font-weight: 700;">Nueva consulta web</h2>
            <p style="color: #666; margin: 0 0 25px; font-size: 16px;">Formulario de contacto - Notaria Ramirez</p>

            <div style="background-color: #f5f5f5; border-left: 4px solid #bd1714; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
              <p><strong>Nombres:</strong> ${escapeHtml(nombres)}</p>
              <p><strong>Apellidos:</strong> ${escapeHtml(apellidos)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
              <p><strong>Servicio:</strong> ${escapeHtml(servicio)}</p>
            </div>

            <div style="background-color: #f5f5f5; border-left: 4px solid #bd1714; border-radius: 8px; padding: 25px;">
              <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px;">Consulta</h3>
              <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin: 0;">${escapeHtml(consulta)}</p>
            </div>
          </div>
        </div>
      `

    const { error } = await resend.emails.send({
      from: `Notaria Ramirez <${process.env.MAIL_FROM}>`,
      to: [process.env.MAIL_TO],
      replyTo: email,
      subject,
      html
    })

    if (error) {
      console.error(error)
      return res.status(400).json({ message: error.message || 'Resend rechazo el envio del correo', error })
    }

    res.status(200).json({ message: 'Correo enviado correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message || 'Error al enviar el correo' })
  }
})

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001')
})
