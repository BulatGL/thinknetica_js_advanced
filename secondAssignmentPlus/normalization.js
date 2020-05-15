const normalizeTime = (time) => {
  let hour = '';
  let minute = '';
  let ampm = '';

  for (i = 0, hasHour = false; i < time.length; i++) {
    const numb = Number.parseInt(time[i], 10);
    if (Number.isInteger(numb)) {
      if (!hasHour) {
        hour += time[i];
      } else {
        minute += time[i];
      }
    } else if (hasHour === false) {
      hasHour = true;
    } else if (time[i] === 'a' || time[i] === 'p') {
      ampm = time[i];
    } else if (time[i] === 'm' && ampm === 'a' || ampm === 'p') {
      ampm += time[i];
    }
  };

  const intHour = Number.parseInt(hour, 10);
  const intMinute = Number.parseInt(minute, 10);

  if (intHour > 24 || intMinute > 60) {
    console.log('Ошибка. Такого времени не бывает.');
    return;
  }

  if (ampm === 'am') {
    if (hour === '12') {
      hour = '00';
    }
  } else if (ampm === 'pm') {
    if (intHour > 0) {
      hour = `${intHour + 12}`;
    }
  }

  if (hour.length < 2) {
    hour = 0 + hour;
  }

  if (minute.length < 2) {
    minute = 0 + minute;
  }

  return `${hour}:${minute}`;
}
