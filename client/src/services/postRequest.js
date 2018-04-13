import Api from '@/services/Api'

export default {
    sendData (yearsToRetirement, initialInvestment, continousInvestment) {
      console.log(yearsToRetirement)
      console.log(initialInvestment)
      console.log(continousInvestment)

      Api().post('setDataFromCLient', {
        body:'test'
      }).then(response =>{
        console.log('Response: ', response)
      })
      .catch(errors => {
        console.log('Errors: ', errors)
      })
    }
}
