function camelize(str) { 
  return str.split('-')
          .map(
            (value, ind) => ind === 0 ? value : value[0].toUpperCase() + value.slice(1)
          )
          .join('');
}