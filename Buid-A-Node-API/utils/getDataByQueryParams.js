export const getDataByQueryparams = (data, query) => {
   return data.filter(item => {
    let isMatch = true
    if(query.country) {
     isMatch = isMatch && item.country.toLowerCase() === query.country.toLowerCase()
    }
    if(query.continent) {
     isMatch = isMatch && item.continent.toLowerCase() === query.continent.toLowerCase()
    }
    if(query.is_open_to_public) {
     isMatch = isMatch && String(item.is_open_to_public) === String(query.is_open_to_public)
    }
    return isMatch
   })

   
}