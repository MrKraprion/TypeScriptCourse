import * as vscode from 'vscode';
// @ts-ignore - игнорируем ошибку типов для markdown-it-container, так как у него нет строгих типов TS
import markdownItContainer from 'markdown-it-container';

/**
 * Эта функция вызывается при активации расширения.
 * Мы возвращаем объект с методом extendMarkdownIt, чтобы внедрить наши плагины.
 */
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "helloworld" is now active!');

	// 1. Регистрируем стандартную команду Hello World (можно использовать через палитру команд)
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from TypeScript!');
	});

	context.subscriptions.push(disposable);

	// 2. Возвращаем API для расширения Markdown
	return {
		extendMarkdownIt(md: any) {
			
			// --- Настройка :::alert ---
			// Пример использования в MD:
			// :::alert
			// Текст предупреждения
			// :::
			md.use(markdownItContainer, 'alert', {
				validate: (params: string) => {
					return params.trim().match(/^alert\s*(.*)$/);
				},
				render: (tokens: any, idx: number) => {
					if (tokens[idx].nesting === 1) {
						return '<div class="alert">\n';
					} else {
						return '</div>\n';
					}
				}
			});

			// --- Настройка :::spoiler ---
			// Пример использования в MD:
			// :::spoiler "Мой заголовок"
			// Скрытый текст
			// :::
			md.use(markdownItContainer, 'spoiler', {
				validate: (params: string) => {
					return params.trim().match(/^spoiler\s*(.*)$/);
				},
				render: (tokens: any, idx: number) => {
					if (tokens[idx].nesting === 1) {
						// Извлекаем заголовок из строки параметров
						const params = tokens[idx].info.trim();
						const match = params.match(/^spoiler\s*(.*)$/);
						let title = match && match[1] ? match[1].trim() : 'Нажмите, чтобы раскрыть';
						
						// Убираем кавычки, если они есть
						title = title.replace(/^["'](.*)["']$/, '$1');

						return `<details class="spoiler"><summary>${title}</summary>\n`;
					} else {
						return '</details>\n';
					}
				}
			});

			return md;
		}
	};
}

/**
 * Эта функция вызывается, когда расширение деактивируется (выключается).
 * Сейчас она пустая, так как нам не нужно очищать ресурсы.
 */
export function deactivate() {}