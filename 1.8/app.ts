import Cropper from 'cropperjs';

// Получаем элементы с типизацией
const imageInput = document.getElementById('imageInput') as HTMLInputElement;
const imageElement = document.getElementById('image') as HTMLImageElement;
const editorContainer = document.querySelector('.editor-container') as HTMLElement;
const cropBtn = document.getElementById('cropBtn') as HTMLButtonElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
const resultContainer = document.querySelector('.result-container') as HTMLElement;
const croppedImageElement = document.getElementById('croppedImage') as HTMLImageElement;

let cropper: Cropper | null = null;

// 1. Загрузка картинки
imageInput.addEventListener('change', (e: Event) => {
    console.log("Change event fired!"); // <--- СРАБОТАЛО ЛИ СОБЫТИЕ?
    
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) {
        console.log("No file selected");
        return;
    }

    console.log("File size:", file.size);

    if (file.size > 300 * 1024) {
        alert('Файл слишком большой! Максимальный размер: 300 Кб.');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = () => {
        console.log("Reader onload triggered"); // <--- ЗАГРУЗИЛСЯ ЛИ ФАЙЛ?
        
        if (typeof reader.result === 'string') {
            imageElement.src = reader.result;
            console.log("Image src set");
            
            // Показываем редактор
            if (editorContainer) {
                editorContainer.style.display = 'block';
                console.log("Editor container shown");
            } else {
                console.error("Editor container not found!");
            }
            
            resultContainer.style.display = 'none'; 
            
            if (cropper) {
                cropper.destroy();
            }

            // Инициализируем Cropper.js
            try {
                cropper = new Cropper(imageElement, {
                    aspectRatio: NaN, 
                    viewMode: 1,      
                    autoCropArea: 0.8, 
                });
                console.log("Cropper initialized"); // <--- СОЗДАЛСЯ ЛИ КРОППЕР?
            } catch (err) {
                console.error("Error initializing Cropper:", err);
            }
        }
    };

    reader.readAsDataURL(file);
});

// 2. Обрезка картинки
// 2. Обрезка картинки
console.log("Поиск кнопки cropBtn...", cropBtn); // Проверка, нашли ли кнопку

cropBtn.addEventListener('click', () => {
    console.log("Клик по кнопке 'Обрезать'!"); // <--- СРАБОТАЛ ЛИ КЛИК?
    
    if (!cropper) {
        console.error("Ошибка: Cropper не инициализирован!");
        alert("Сначала выберите изображение!");
        return;
    }

    console.log("Cropper найден, начинаем обрезку...");

    try {
        // Получаем канвас
        const canvas = cropper.getCroppedCanvas();
        console.log("Canvas получен:", canvas);

        // Конвертируем в Data URL
        const croppedDataUrl = canvas.toDataURL('image/jpeg');
        console.log("Data URL создан");

        // Отображаем результат
        croppedImageElement.src = croppedDataUrl;
        
        // Показываем контейнер результата
        resultContainer.style.display = 'block';
        console.log("Результат отображен");
        
        // Активируем кнопку скачивания
        downloadBtn.disabled = false;
        console.log("Кнопка скачивания активирована");
        
    } catch (error) {
        console.error("Ошибка при обрезке:", error);
        alert("Произошла ошибка при обрезке. См. консоль.");
    }
});

// 3. Скачивание картинки
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = croppedImageElement.src;
    link.download = 'cropped-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});