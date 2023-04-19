let userData = JSON.parse(localStorage.getItem("presentUserSignUp"))
// DEPOSITE//
// let newTime = Date.getTime()
// console.log(newTime)
allTransaction = []
moNey.innerText=Number()
resultMoney=moNey.innerText
const deposti=()=>{ 
  if(addMoney.value>=0){
    moNey.innerText =  Number(moNey.innerText) + Number(addMoney.value)
    //  console.log(addMoney.value)
    Swal.fire(
      `Successful 
      Amount :=: ₦${addMoney.value}`,
      `Check Dashboard`,
      'success'
      )
      allDeposit = []
      userdeposite={
        amount:addMoney.value,
        
    }
    allDeposit.push(userdeposite)
    localStorage.setItem("userDeposite",JSON.stringify(allDeposit))
  }
  else{
    Swal.fire(
      'Unccessful Deposite',
      'Follow The Instruction Provided',
      'error'
    )
  }
} 
// TRANSFER//
const send=()=>{	
    let newDateSet =new Date().toLocaleString()
    shortDetails.innerHTML=`        <div class="text-center shadow p-3 shadow-sm">
    <span class="fw-semibold" id="transactionName"></span>
    <span>
      <span class="text-light-emphasis ms-5" id="transactionMoney"></span><br>
      <span class="text-light-emphasis " id="transactionRealTime"></span>
      <span id="successOrfailed">
    
    </span>
      <div class="">
    </span>
  </div>`
    console.log(newDateSet)
    transactionRealTime.innerHTML=newDateSet
    transactionName.innerText=recName.value
    transactionMoney.innerText="₦"+amOunt.value
    // transactionRealTime=
    if(amOunt.value > moNey.innerText){
       Swal.fire(
         'DEPOSITE TO YOU ACCOUNT',
         'Follow The Instruction Provided',
         'info'
       )
       successOrfailed.innerHTML =`
       <div class=" btn btn-danger ms-4">Failed</div>
       `
     }
     else if(amOunt.value < 0){
      Swal.fire(
        'Erroor',
        'Transaction Error',
        'error'
      )
     }


        else if(!amOunt.value < moNey.innerText){
          moNey.innerText =  Number(moNey.innerText) - Number(amOunt.value)
        Swal.fire({
          icon: 'success',
          html: `<h2>SuccessFul Transaction<h2>
                  <h6>Debit Acc No :=: ${accNo.value}<h6>
                  <h6>Recipent Name :=: ${recName.value} <h6>
                  <h6>Bank Name :=: ${bank.value} <h6>
                  <h6>Credit Acc No :=: ${reccAcc.value} <h6>
                  <h6>Amount Transfered :=:₦${amOunt.value} <h6>
                   `,
        })
        successOrfailed.innerHTML =`
        <div class=" btn btn-success ms-4">Success</div>
          `}
      
       
      transaction ={
        DebitAccountNumber:accNo.value,
        recipientAccountName:recName.value,
        bankName:bank.value,
        CreditAccount:reccAcc.value,
        AmountTransfered:amOunt.value,
        timeTransfared:newDateSet,
      }
      allTransaction.push(transaction)
      console.log(allTransaction)
      localStorage.setItem("userTransaction",JSON.stringify(allTransaction))
}
// Air Time
const buyAirtime=async()=>{
  const { value: password } = await Swal.fire({
    title: 'Enter Airtime Amount',
    input: 'number',
    inputLabel: 'Amount',
    inputPlaceholder: 'Enter your Amount',
    inputAttributes: {
      maxlength: 10,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })
 if(password<0){
  Swal.fire(
    'Less Balance',
    'Add More Deposite',
    'warning'
  )

 }
 else if(password > moNey.innerHTML){
  Swal.fire(
    'Less Balance',
    'Add More Deposite',
    'error'
  )

 }
  else if(password > 0){
  moNey.innerText= moNey.innerText - password
  Swal.fire(
    'You Have Been Credited',
    `₦${password}`,
    'success'
  )
}
}
// Savings Account Yellow-BTN //
// Next//
const setMontincome=()=>{
  fakeicomeSpan.innerHTML=fakeincomeInput.value
}
//  Go Back//
const setlastmonthliyspending=()=>{
  fakespendMoneySpan.innerHTML=fakeSpendingInput.value

  // Swal.fire(
  //   'Fake Deposite Successful',
  //   `FakeIncome Of ₦${fakeSpendingInput.value} and FakeSpending Of ₦${fakeSpendingInput.value}`,
  //   'success'
  // )  
}
// Savings Account Green//
const notWorking=()=>{
  Swal.fire('Just For Decoration')
}

