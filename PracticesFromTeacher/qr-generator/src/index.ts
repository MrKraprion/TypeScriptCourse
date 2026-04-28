import * as qrcode from 'qrcode';
import { QRCodeToStringOptions } from 'qrcode';

// Функция разбора аргументов командной строки
function parseArgs() {
    const args = process.argv.slice(2);

    // Проверяем наличие команды 'generate'
    const genIndex = args.indexOf('generate');
    if (genIndex === -1) {
        console.error('Ошибка: Используйте команду generate.');
        console.log('Пример: npm start -- generate "Текст"');
        process.exit(1);
    }

    // Получаем текст
    const text = args[genIndex + 1];
    if (!text) {
        console.error('Ошибка: Укажите текст или ссылку.');
        process.exit(1);
    }

    // Проверяем опцию размера --size
    const sizeIndex = args.indexOf('--size');
    let scale: number = 4; // Явно указываем тип number

    if (sizeIndex !== -1 && args[sizeIndex + 1]) {
        const sizeVal = parseInt(args[sizeIndex + 1], 10);
        if (isNaN(sizeVal) || sizeVal < 1 || sizeVal > 20) {
            console.error('Ошибка: Размер должен быть числом от 1 до 20.');
            process.exit(1);
        }
        scale = sizeVal;
    }

    return { text, scale };
}

async function main() {
    const { text, scale } = parseArgs();

    try {
        // Явно формируем объект опций с правильными типами
        const options: QRCodeToStringOptions = {
            type: 'terminal',
            scale: scale, // Теперь TypeScript точно знает, что это число
            version: 'auto' as any // 'auto' иногда требует приведения типа в старых версиях определений
        };

        // Вызываем метод. Так как мы не передали callback, он возвращает Promise<string>
        const qrString: string = await qrcode.toString(text, options);

        console.log('\nВаш QR-код:\n');
        console.log(qrString);
        console.log(`\nЗакодировано: ${text}`);

    } catch (err) {
        console.error('Ошибка генерации QR-кода:', (err as Error).message);
        console.log('Совет: Попробуйте сократить текст или уменьшить размер.');
        process.exit(1);
    }
}

main();