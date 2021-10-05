// go to https://hypercharts.co/tsla use the console to find the data object, then
// use this function to get the data as csv.
// > console.log(csv(temp0))

function csv(data) {
  var headers = Object.keys(data)
  var t = ''

  data.labels.forEach(function (_, i) {
    t += headers.map(function (header) {
      return data[header][i]
    }).join(',') + '\n'
  })
  return t
}



