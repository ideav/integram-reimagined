<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required_fields = ['name', 'phone', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// Telegram Bot configuration
$bot_token = getenv('TELEGRAM_BOT_TOKEN') ?: 'YOUR_BOT_TOKEN_HERE';
$chat_id = getenv('TELEGRAM_CHAT_ID') ?: 'YOUR_CHAT_ID_HERE';

// Validate configuration
if ($bot_token === 'YOUR_BOT_TOKEN_HERE' || empty($bot_token)) {
    http_response_code(500);
    echo json_encode(['error' => 'Telegram bot token not configured']);
    exit();
}

if ($chat_id === 'YOUR_CHAT_ID_HERE' || empty($chat_id)) {
    http_response_code(500);
    echo json_encode(['error' => 'Telegram chat ID not configured']);
    exit();
}

// Prepare message
$message = "🆕 Новая заявка с сайта INTEGRAM\n\n";
$message .= "👤 Имя: " . htmlspecialchars($data['name']) . "\n";
$message .= "📞 Телефон: " . htmlspecialchars($data['phone']) . "\n";
$message .= "📧 Email: " . htmlspecialchars($data['email']) . "\n";

if (!empty($data['company'])) {
    $message .= "🏢 Компания: " . htmlspecialchars($data['company']) . "\n";
}

$message .= "💬 Сообщение:\n" . htmlspecialchars($data['message']) . "\n\n";
$message .= "🕐 Время: " . date('d.m.Y H:i:s') . "\n";
$message .= "🌐 Источник: " . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

// Send message to Telegram
$telegram_url = "https://api.telegram.org/bot{$bot_token}/sendMessage";
$post_data = [
    'chat_id' => $chat_id,
    'text' => $message,
    'parse_mode' => 'HTML'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegram_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message to Telegram']);
    exit();
}

$result = json_decode($response, true);

if ($http_code === 200 && $result['ok']) {
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message',
        'details' => $result['description'] ?? 'Unknown error'
    ]);
}
?>