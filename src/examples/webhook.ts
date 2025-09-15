import axios from 'axios'
;(async () => {
  await axios
    .request({
      method: 'post',
      url: 'http://localhost:3000/webhook/decard',
      data: {
        amount: 1000,
        currency: 'TRY',
        token: 'token',
        status: 'success',
        number: '12345',
        type: 'payment',
        sign: '2a5511145ee2208b86947c736194ac268d33eb9538146cf547164e1d3781f57c',
      },
    })
    .then(() => {
      console.log('Запрос на webhook успешно отправлен')
    })
    .catch((error) => {
      console.log(error.response.data)
    })
})()
