
import React from 'react'
import {connect} from 'react-redux'
import CreateTransaction from '../component/transaction/create'
import UpdateTransaction from '../component/transaction/updateTransaction'


import {LoadTransactions,removeTransaction} from '../store/action/transactionAction'


 class Dashboard extends React.Component {


    state = {
        createModalOpen: false,
        updateModalOpen: false,
        id: ''
    }

    componentDidMount(){

        this.props.LoadTransactions()
    }

    OpenCreateModal = ()=>{
        this.setState({
            createModalOpen:true
        })
    }

    closeCreateModal = ()=>{
        this.setState({
            createModalOpen:false
        })
    }
    OpenUpdateModal = (id)=>{
        this.setState({
            updateModalOpen:true,
            id
        })
    }

    closeUpadeModal = (id)=>{
        this.setState({
            updateModalOpen:false,
            id:''
        })
    }

   
  render() {
    let {auth,transactions} = this.props
    return (
      <div className="row">
          <div className="col-md-8 offset-md-2">
              <h1>Welcome {auth.user.name} </h1>
              <p>You Email is {auth.user.email} </p>

              <button
                  className='btn btn-primary'
                  onClick={this.OpenCreateModal}
              >
                  Create New Transaction
              </button>
              <CreateTransaction
                  isOpen={this.state.createModalOpen}
                  close={this.closeCreateModal}
                  
              />
              <br />
              <h1>Transactions: </h1>
              {transactions.length > 0 ? <ul className='list-group'>
                  {
                      transactions.map(transaction => (
                          <li
                              key={transaction._id}
                              className='list-group-item'>
                              <p>Type: {transaction.type}</p>
                              <p>Amount: {transaction.amount}</p>
                              {
                                this.state.id === transaction._id ?
                                <UpdateTransaction
                                        isOpen={this.state.updateModalOpen}
                                        close={this.closeUpadeModal}
                                        transaction = {transaction}
                                />:
                                null
                              }
                              <button
                               className='btn-warming'
                               onClick={()=>this.props.removeTransaction(transaction._id)}
                               >
                                remove
                               </button>
                              <button
                               className='btn-warming'
                               onClick={()=>this.OpenUpdateModal(transaction._id)}
                               >
                                update
                               </button>
                          </li>
                      ))
                  }
              </ul> : <p>There is no transaction</p>}
          </div>
      </div>
  )
}
}

const mapStateToProps = state =>({
  auth:state.auth,
  transactions:state.transactions
})
export default connect(mapStateToProps,{LoadTransactions,removeTransaction})( Dashboard )
