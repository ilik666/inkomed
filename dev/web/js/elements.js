let $globalHtmlElements = {};
window.$globalHtmlElements = $globalHtmlElements;

$globalHtmlElements.modalLogin = `
    <div class='login'>
        <img src="./web/images/general/login.png", alt="Вход в личный кабинет">
        <form>
            <label class='label'>
                <span>E-mail</span>
                <input type='text' name='email' placeholder='Ivanov@inko-service.ru'>
            </label>
            <label class='label label--password'>
                <span>Пароль</span>
                <input type='password' name='password' placeholder='Введите пароль'>
                <button type='button' class='checked-password'>
                    <svg class="svg-sprite-icon icon-eye">
                        <use xlink:href="web/images/sprite/symbol/sprite.svg#eye"></use>
                    </svg>
                </button>
            </label>
            <button type='submit' class='g-btn'> Войти </button> 
        </form>
    </div> `

$globalHtmlElements.modalCallback = `
    <form>
        <label class='label'>
            <span>Фамилия</span>
            <input type='text' name='first-name' placeholder='Иванов'>
        </label>
        <label class='label'>
            <span>Имя</span>
            <input type='text' name='name' placeholder='Иван'>
        </label>
        <label class='label'>
            <span>Отчество</span>
            <input type='text' name='last-name' placeholder='Иванович'>
        </label>
        <label class='label'>
            <span>Телефон</span>
            <input type='tel' name='phone' placeholder='+7 952 540-45-44'>
        </label>
        <label class='label'>
            <span>Что Вас беспокоит? </span>
            <textarea rows='3' name='text' placeholder='Меня беспокоит...'></textarea>
        </label>
        <button type='submit' class='g-btn'> Отправить </button> 
    </form> `

const createHeaderAppointment = (arg) => {
    return `
        <div class='modal-card'>
            <img src='${arg.imgUrl}' alt='${arg.name}'>
            <div class='modal-card__info'>
                <p class='modal-card__name'>${arg.name}</p>
                ${arg.secondDescr ? "<span class='modal-card__second'>" + arg.secondDescr +"</span>" : ''}
                <ul>
                    ${arg.specialisation ? "<li><span>Специализация:</span> <span>" +  arg.specialisation +"</span> </li>": ''}
                    ${arg.address ? "<li><span>Адресс:</span> <span>" +  arg.address +"</span> </li>" : ''}
                    ${arg.category ? "<li><span>Категория:</span>  <span>" + arg.category +"</span> </li>" : ''}
                    ${arg.experience ? "<li><span>Стаж работы:</span> <span>" + arg.experience +"</span> </li>" : ''}
                    ${arg.cost ? "<li><span>Стоимость:</span> <span>" + arg.cost +"</span> </li>" : ''}
                </ul>
            </div>
        </div>
    `
}

const createOptionElement = (arg, selectedTime = null) => {
    let _str = '';
    arg.forEach(time => {
        _str += `
            <option
                ${time == selectedTime ? 'selected': ''}
                value='${time}'> ${time}</option> `
    });
    return _str;
}

$globalHtmlElements.createModalAppointmentDoctor = (options) => {
    return `
        ${ createHeaderAppointment(options) }
        <form action='' method='' class='form-modal'>
            <input type='hidden' name='id' value='${options.id}'>
            <label class='label'>
                <span>Фамилия</span>
                <input type='text' name='first-name' placeholder='Иванов'>
            </label>
            <label class='label'>
                <span>Имя</span>
                <input type='text' name='name' placeholder='Иван'>
            </label>
            <label class='label'>
                <span>Отчество</span>
                <input type='text' name='last-name' placeholder='Иванович'>
            </label>
            <label class='label'>
                <span>e-mail</span>
                <input type='text' name='email' placeholder='Ivanov@inko-service.ru'>
            </label>
            <label class='label'>
                <span>Телефон</span>
                <input type='tel' name='phone' placeholder='+7 952 540-45-44'>
            </label>

            <div class='date-wrap'>
                <span>Желаемая дата и время посещения</span>
                <label class='calendar'>
                    <input type='date' name='date' 
                        ${options.selectedDate != '' ? 'value="'+ options.selectedDate +'"': 'value=""'}>
                </label>
                <select name='time'>
                    <option value=''>Время</option>
                    ${createOptionElement(options.times, options.selectedTime)}
                </select>
            </div>

            <label class='date-wrap'>
                <span>Описание проблемы</span>
                <textarea rows='3' name='text' placeholder='Ваш комментарий'></textarea>
            </label>

            <button type='submit' class='g-btn g-btn--accent'> Записаться </button> 

            <p class='form__bonus'>
                Нажимая “Записаться на прием”, я принимаю 
                <a href='#'> условия пользовательского соглашения </a>
                и даю согласие на 
                <a href='#'> обработку персональных данных </a>
            </p>
        </form> `
}


$globalHtmlElements.createModalBooking = (options) => {
    return `
        ${ createHeaderAppointment(options) }
        <form action='' method='' class='form-modal'>
            <input type='hidden' name='id' value='${options.id}'>
            <label class='label'>
                <span>Фамилия</span>
                <input type='text' name='first-name' placeholder='Иванов'>
            </label>
            <label class='label'>
                <span>Имя</span>
                <input type='text' name='name' placeholder='Иван'>
            </label>
            <label class='label'>
                <span>Отчество</span>
                <input type='text' name='last-name' placeholder='Иванович'>
            </label>
            <label class='label'>
                <span>e-mail</span>
                <input type='text' name='email' placeholder='Ivanov@inko-service.ru'>
            </label>
            <label class='label'>
                <span>Телефон</span>
                <input type='tel' name='phone' placeholder='+7 952 540-45-44'>
            </label>
            
            <div class='date-wrap'>
                <span>Варианты лечения и питания</span>
                <label class='calendar'>
                    <select name='treatment'>
                        <option value='Вариант лечения'>Вариант лечения</option>
                        ${createOptionElement(options.treatment)}
                    </select>
                </label>
                <label class='calendar'>
                    <select name='food'>
                        <option value='Вариант питания'>Вариант питания</option>
                        ${createOptionElement(options.food)}
                    </select>
                </label>
            </div>

            <div class='date-wrap'>
                <label class='calendar'>
                    <span>Заезд</span>
                    <input type='date' name='date'>
                </label>
                
                <label class='calendar'>
                    <span>Выезд</span>
                    <input type='date' name='date'>
                </label>
            </div>

            <div class='date-wrap'>
                <label class='calendar'>
                    <span>Взрослые</span>
                    <select name='child'>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </label>
                <label class='calendar'>
                    <span>Дети</span>
                    <select name='parent'>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </label>
            </div>

            <button type='submit' class='g-btn g-btn--accent'> Забронировать </button> 

            <p class='form__bonus'>
                Нажимая “Записаться на прием”, я принимаю 
                <a href='#'> условия пользовательского соглашения </a>
                и даю согласие на 
                <a href='#'> обработку персональных данных </a>
            </p>
        </form> `
}