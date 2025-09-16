export const filterData = (data, property, value) => {
  return data.filter(item => 
    item[property] && item[property].toLowerCase() === value.toLowerCase()
  )
}
