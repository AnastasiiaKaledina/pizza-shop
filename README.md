# pizza-shop-react
Приложение социальной сети на React, Redux Toolkit.

# Как смотреть проект

1. https://anastasiiakaledina.github.io/pizza-shop-react/

## Что было реализовано:
— Подгрузка пицц с сервера по указанным параметрам на главную страницу;  
— Реализация корзины с выбранными пиццами и их общей стоимостью;   
— Поиск по странице;  
— Различные сценарии пользователя: открытие пустой корзины, удаление всех товаров из корзины, неправильно вбитая ссылка;  
— Эффект загрузки пицц до ответа запроса;  
— Пагинация страниц;  

## Какие были проблемы

— Вшивание параметров запроса при первом рендере, даже если сайт был открыт не по ссылке с выбранными категориями (решение: сделать проверку на первоначальный рендер по ссылке и без)
— Не совсем корректно работают категории совместно с пагинацией из-за тестового сервера для хранения данных (решается использованием ручной сортировки или использованием api, на котором хорошо сделана сортировка по нескольким параметрам)

