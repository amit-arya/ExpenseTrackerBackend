const Expense = require('../models/expense');

exports.postAddExpense = async (req, res) => {
    try {
        const amount = req.body.amount;
        const desc = req.body.desc;
        const category = req.body.category;
        const userId = req.user.id;

        const expense = await Expense.create({ amount: amount, desc: desc, category: category , userId:userId});
        res.status(201).json({ newExpense: expense });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getExpense = async (req, res) => {

    Expense.findAll({where: {userId: req.user.id}}).then(expenses=>{
        return res.status(200).json({ expenses, success:true })
    })
    .catch(err=>{
        console.log(err);
        return res.status(500).json({ error: err, success:false })
    })
}

exports.deleteExpense = async (req, res)=>{
    try{
        const expenseId = req.params.id;
        await Expense.destroy({where : {id:expenseId, userId:req.user.id}});
        res.sendStatus(201);
    } catch(err) {
        res.status(500).json({ error: err });
    }
}