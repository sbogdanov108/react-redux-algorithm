/*
 * state - состояние данных (posts) приложения в момент обращения к редуктору
 * action - действие, при котором происходит обращение к редуктору
 * */
export const posts = (state, action) => {
  switch(action.type) {
    case 'ADD_POST':
      let id = +new Date; // bad practice :)

      // Формируем новый массив объектов, в котором будут объединены все необходимые нам данные
      // Возвращаем новое состояние данных приложения в нужном нам формате
      return [...state, Object.assign({}, action.text, {id})];

    default:
      return state || [];
  }
};