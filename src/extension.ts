import * as vscode from 'vscode';
// @ts-ignore
import markdownItContainer from 'markdown-it-container';
// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "helloworld" is now active!');

	// Сохраняем原有ную команду
	const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from TypeScript!');
	});

	context.subscriptions.push(disposable);

	// Возвращаем объект для расширения Markdown
	return {
		extendMarkdownIt(md: any) {
			// :::alert Текст :::
			md.use(markdownItContainer, 'alert', {
				validate: () => true,
				render: (tokens: any, idx: number) => {
					if (tokens[idx].nesting === 1) {
						const content = tokens[idx].info.trim().replace(/^alert\s*/, '');
						return `<div class="alert">${content ? content + '<br>' : ''}`;
					} else {
						return '</div>\n';
					}
				}
			});

			// ???spoiler "Заголовок"
			md.use(markdownItContainer, 'spoiler', {
				marker: '?',
				validate: (params: string) => params.trim().startsWith('spoiler'),
				render: (tokens: any, idx: number) => {
					if (tokens[idx].nesting === 1) {
						const params = tokens[idx].info.trim();
						const match = params.match(/spoiler\s*(.*)/);
						let title = match?.[1]?.trim() || 'Спойлер';
						// Убираем внешние кавычки, если есть
						title = title.replace(/^["'](.*)["']$/, '$1');
						return `<details class="spoiler"><summary>${title}</summary>`;
					} else {
						return '</details>\n';
					}
				}
			});

			return md;
		}
	};
}

// This method is called when your extension is deactivated
export function deactivate() {}