const Transaction = require('../models/Transaction');
    //@desc Get all transactions
//@route GET /api/v1/transactions
//@access public
exports.getTransactions = 

// (req,res,nest)=>{
//     //temporary for debugging
//     return res.send('this worksQQQ');

// }
async(req,res,next)=>{
    // res.send("get transaction")
    try{

        const transactions = await Transaction.find();

        return res.status(200).json({
           success: true,
            count: transactions.length,
            data: transactions
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            error:'Server error.'
        })
    }
}

//@desc Add transactions
//@route POST /api/v1/transactions
//@access public
exports.addTransaction = async(req,res,next)=>{
    try{
  const {text,amount}  = req.body;

    const transaction = await Transaction.create(req.body);  

    return res.status(201).json({
        success:true,
        data:transaction
    });
    }catch(err){
         return res.status(500).json({
            success: false,
            error:'Server error.'
        })

    }
  
}

//@desc Delete transactions
//@route DELETE /api/v1/transactions/:id
//@access public
exports.deleteTransaction = async(req,res,next)=>{
    try{
        const transaction = await Transaction.findById(req.params.id);
        
        if(!transaction){
            //if the transaction is not found
            return res.status(404).json({
                success:false,
                error: 'no transaction found'
            })
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            data:{}
        })

    }catch(err){
         return res.status(500).json({
            success: false,
            error:'Server error.'
        })
    }
}

