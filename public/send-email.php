<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function json_response(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['message' => 'Metodo no permitido']);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    json_response(400, ['message' => 'Solicitud invalida']);
}

// Mantener igual que el backend Node con Resend.
// En cPanel puedes crear resend-config.php fuera de public_html con:
// <?php return ['RESEND_API_KEY' => 're_xxxxxxxxx'];
$privateConfigPath = dirname(__DIR__) . '/resend-config.php';
$privateConfig = is_file($privateConfigPath) ? require $privateConfigPath : [];
$resendApiKey = getenv('RESEND_API_KEY') ?: ($privateConfig['RESEND_API_KEY'] ?? '');
$to = 'administra@notariaramirez.com.pe';
$from = 'administra@notariaramirez.com.pe';
$siteName = 'Notaria Ramirez';

if ($resendApiKey === '') {
    error_log('Resend API key no configurada.');
    json_response(500, ['message' => 'No se pudo enviar el correo']);
}

if (!function_exists('curl_init')) {
    error_log('La extension cURL de PHP no esta habilitada.');
    json_response(500, ['message' => 'No se pudo enviar el correo']);
}

if (clean_text($data, 'website') !== '') {
    json_response(200, ['message' => 'Correo enviado correctamente']);
}

function clean_text(array $data, string $key): string
{
    return trim((string) ($data[$key] ?? ''));
}

function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function render_field(string $label, string $value): string
{
    $safeValue = escape_html($value !== '' ? $value : 'No indicado');

    return "
        <tr>
            <td style=\"padding:10px 0;color:#6d6d6d;font-size:13px;width:42%;vertical-align:top;\">{$label}</td>
            <td style=\"padding:10px 0;color:#212121;font-size:14px;font-weight:600;vertical-align:top;\">{$safeValue}</td>
        </tr>
    ";
}

$nombres = clean_text($data, 'nombres');
$apellidos = clean_text($data, 'apellidos');
$email = clean_text($data, 'email');
$telefono = clean_text($data, 'telefono');
$tipoDocumento = clean_text($data, 'tipoDocumento');
$numeroDocumento = clean_text($data, 'numeroDocumento');
$direccion = clean_text($data, 'direccion');
$tipoReclamo = clean_text($data, 'tipoReclamo');
$detalleReclamo = clean_text($data, 'detalleReclamo');
$pedidoConsumidor = clean_text($data, 'pedidoConsumidor');
$aceptarTratamiento = isset($data['aceptarTratamiento']) ? 'Si' : 'No';

$required = [
    'nombres' => $nombres,
    'apellidos' => $apellidos,
    'email' => $email,
    'tipoDocumento' => $tipoDocumento,
    'numeroDocumento' => $numeroDocumento,
    'direccion' => $direccion,
    'tipoReclamo' => $tipoReclamo,
    'pedidoConsumidor' => $pedidoConsumidor,
];

foreach ($required as $field => $value) {
    if ($value === '') {
        json_response(422, ['message' => "Falta el campo {$field}"]);
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(422, ['message' => 'Correo electronico invalido']);
}

if (text_length($detalleReclamo) > 1000 || text_length($pedidoConsumidor) > 1000) {
    json_response(422, ['message' => 'El detalle o pedido excede el limite permitido']);
}

$safeFullName = trim($nombres . ' ' . $apellidos);
$subject = 'Nuevo registro en el Libro de Reclamaciones - ' . $safeFullName;
$plainText = implode("\n", [
    'Nuevo registro en el Libro de Reclamaciones',
    '',
    'Datos del proveedor',
    'RUC: 10178949913',
    'Razon Social: Rolando Alejandro Ramirez Carranza',
    'Domicilio: Av. Cesar Vallejo 290, Lince',
    '',
    'Datos del consumidor',
    "Nombres: {$nombres}",
    "Apellidos: {$apellidos}",
    "Tipo de documento: {$tipoDocumento}",
    "Numero de documento: {$numeroDocumento}",
    "Direccion: {$direccion}",
    "Correo electronico: {$email}",
    "Telefono: {$telefono}",
    '',
    'Detalle del reclamo',
    "Tipo de reclamo: {$tipoReclamo}",
    "Detalle: {$detalleReclamo}",
    '',
    'Pedido del consumidor',
    "Pedido: {$pedidoConsumidor}",
    "Acepta tratamiento de datos: {$aceptarTratamiento}",
]);

$html = "
<!doctype html>
<html lang=\"es\">
<body style=\"margin:0;background-color:#f4f4f4;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;\">
    <div style=\"max-width:680px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 32px rgba(33,33,33,.14);\">
        <div style=\"background:#7c0600;padding:26px 28px;border-bottom:6px solid #fab937;\">
            <p style=\"color:#ffead9;margin:0 0 8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;\">{$siteName}</p>
            <h1 style=\"color:#ffffff;margin:0;font-size:27px;line-height:1.2;\">Libro de Reclamaciones</h1>
            <p style=\"color:#fde1c6;margin:10px 0 0;font-size:15px;\">Nuevo registro recibido desde la pagina web</p>
        </div>
        <div style=\"padding:26px 28px;background:#fffbf8;\">
            <div style=\"background:#ffffff;border-left:5px solid #7c0600;border-radius:12px;padding:18px 20px;margin-bottom:18px;\">
                <p style=\"margin:0 0 6px;color:#6d6d6d;font-size:13px;\">Datos del proveedor</p>
                <p style=\"margin:0;color:#212121;font-size:14px;line-height:1.7;\">
                    <strong>RUC:</strong> 10178949913<br>
                    <strong>Razon Social:</strong> Rolando Alejandro Ramirez Carranza<br>
                    <strong>Domicilio:</strong> Av. Cesar Vallejo 290, Lince
                </p>
            </div>
            <div style=\"background:#ffffff;border:1px solid #e6e6e6;border-radius:12px;padding:20px;margin-bottom:18px;\">
                <h2 style=\"color:#7c0600;font-size:17px;margin:0 0 12px;\">1. Datos del consumidor</h2>
                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;border-collapse:collapse;\">
                    " . render_field('Nombres', $nombres) . "
                    " . render_field('Apellidos', $apellidos) . "
                    " . render_field('Tipo de documento', $tipoDocumento) . "
                    " . render_field('Numero de documento', $numeroDocumento) . "
                    " . render_field('Direccion', $direccion) . "
                    " . render_field('Correo electronico', $email) . "
                    " . render_field('Telefono', $telefono) . "
                </table>
            </div>
            <div style=\"background:#ffffff;border:1px solid #e6e6e6;border-radius:12px;padding:20px;margin-bottom:18px;\">
                <h2 style=\"color:#7c0600;font-size:17px;margin:0 0 12px;\">2. Detalle del reclamo</h2>
                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;border-collapse:collapse;\">
                    " . render_field('Tipo de reclamo', $tipoReclamo) . "
                    " . render_field('Detalle', $detalleReclamo) . "
                </table>
            </div>
            <div style=\"background:#ffffff;border:1px solid #e6e6e6;border-radius:12px;padding:20px;\">
                <h2 style=\"color:#7c0600;font-size:17px;margin:0 0 12px;\">3. Pedido del consumidor</h2>
                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;border-collapse:collapse;\">
                    " . render_field('Pedido', $pedidoConsumidor) . "
                    " . render_field('Acepta tratamiento de datos', $aceptarTratamiento) . "
                </table>
            </div>
        </div>
    </div>
</body>
</html>";

$payload = [
    'from' => "{$siteName} <{$from}>",
    'to' => [$to],
    'reply_to' => $email,
    'subject' => $subject,
    'html' => $html,
    'text' => $plainText,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $resendApiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    CURLOPT_TIMEOUT => 12,
]);

$response = curl_exec($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $httpCode < 200 || $httpCode >= 300) {
    error_log('Resend rechazo el envio. HTTP ' . $httpCode . ' ' . ($curlError ?: (string) $response));
    json_response(500, ['message' => 'No se pudo enviar el correo']);
}

json_response(200, ['message' => 'Correo enviado correctamente']);
