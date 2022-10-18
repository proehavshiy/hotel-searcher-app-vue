const validateLoginForm = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Поле обязательное';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
    errors.login = 'Введите емейл';
  }

  if (!values.password) {
    errors.password = 'Поле обязательное';
  } else if (/[ЁёА-я]/g.test(values.password)) {
    errors.password = 'Не должно быть кириллицы';
  } else if (values.password.length <= 8) {
    errors.password = 'Пароль - минимум 8 симв.';
  }

  return errors;
};

export default validateLoginForm;
