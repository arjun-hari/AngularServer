user = {
  1000: { acno: 1000, uname: "Aahil", password: "userone", balance: 3000, transaction: [] },
  1001: { acno: 1001, uname: "Aahan", password: "usertwo", balance: 1000, transaction: [] },
  1002: { acno: 1002, uname: "Laisha", password: "userthree", balance: 3000, transaction: [] },
  1003: { acno: 1003, uname: "Neer", password: "userfour", balance: 3000, transaction: [] },
  1004: { acno: 1004, uname: "Rishika", password: "userfive", balance: 3000, transaction: [] }
}

const register = (acno, uname, password) => {


  if (acno in user) {

    return {
      statusCode: 422,
      status: false,
      message: "Account already exists!!!! Please Log in...."
    }
  }
  else {
    user[acno] = {
      acno,
      uname,
      password,
      balance: 0,
      transaction: []
    }

    return {
      statusCode: 200,
      status: true,
      message: "Registered successfully...."
    }

  }
}

const login = (acno, pswd) => {


  if (acno in user) {

    if (pswd == user[acno]["password"]) {
      currentUser = user[acno]["uname"]
      currentAcc = acno

      return {
        statusCode: 200,
        status: true,
        message: "Successful Log in"
      }
    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect password"
      }
    }
  }
  else {
    return {
      statusCode: 422,
      status: false,
      message: "Invalid user"
    }
  }

}

const deposit = (acno, pswd, amt) => {

  var amount = parseInt(amt)

  if (acno in user) {

    if (pswd == user[acno]["password"]) {
      user[acno]["balance"] += amount
      user[acno].transaction.push({
        amount: amount,
        type: "CREDIT"
      })

      return {
        statusCode: 200,
        status: true,
        message: amount + " Deposited Successfully and new balance is : " + user[acno]["balance"]
      }

    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect Password"
      }
    }
  }
  else {
    return {
      statusCode: 422,
      status: false,
      message: "Invalid Account"
    }

  }

}

const withdraw = (acno, pswd, amt) => {

  var amount = parseInt(amt)

  if (acno in user) {

    if (pswd == user[acno]["password"]) {

      if (user[acno]["balance"] > amount) {
        user[acno]["balance"] -= amount
        user[acno].transaction.push({
          amount: amount,
          type: "DEBIT"
        })

        return {
          statusCode: 200,
          status: true,
          message: amount + " Debited Successfully and new balance is : " + user[acno]["balance"]

        }
      }
      else {
        return {
          statusCode: 422,
          status: false,
          message: "Insufficient Balance"
        }
      }

    }
    else {
      return {
        statusCode: 422,
        status: false,
        message: "Incorrect Password"
      }
    }
  }
  else {
    return {
      statusCode: 422,
      status: false,
      message: "Invalid Account"
    }
  }

}



module.exports = {
  register,
  login,
  deposit,
  withdraw
}
