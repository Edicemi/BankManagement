const Account = require("../models/account");
const accountNumber = require("../lib/tenDigit");
const CustomError = require("../lib/error");
const responseHandler = require("../utils/responseHandler");
const { validationResult, body } = require("express-validator");
const { jwtSign } = require("../lib/ath");

//create bank account
exports.create_account = async (req, res, next) => {
    const { accountname, deposit, accounttype, dob } = req.body;
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            throw new CustomError().check_input();
        }
        if (accountname && deposit && accounttype && dob) {
            let accountExist = await Account.findOne({ accountname: accountname });
            if (accountExist) {
                throw new CustomError(
                    `Account name ${accountname} already exist, try another one.`,
                    400
                );
            };
            if (deposit < 500) {
                throw new CustomError(
                    ` Initial deposit should be greater than 500`,
                    400
                );
            }
            const user = new Account({
                accountname: accountname,
                deposit: deposit,
                accounttype: accounttype,
                dob: dob,
                accountnumber: accountNumber,
            });

    await user.save();
            return res.status(200).json({
                message: "Account created succesfully",
                code: 200,
                status: "success",
                accountname,
                accounttype,
                deposit,
                accountNumber,
            });
        } else {
            throw new CustomError().invalid_parameter();
        }
    } catch (error) {
        next(error);
    }
};


//fetch individual account info
exports.fetchByAccountInfo = async (req, res, next) => {
    try {
        const { accountnumber } = req.body
        const users = await Account.findOne({ accountnumber});
        if (users) {
            const account = await Account.find().select(["accountname", "deposit", "accountnumber", "dob", "accounttype"]);
            return res.status(200).json({
                status: "success",
                message: 'Account Info fetched succesfully',
                users,
            });
        } else {
            throw Error('Invalid account number, check correctly',
                400);
        }
    } catch (error) {
        next(error);
    }
};

//fetch all account info
exports.fetchAllAccountInfo = async (req, res, next) => {
    try {
        const account = await Account.find();
         return res.status(200).json({
                status: "success",
                message: 'Account details Info fetched succesfully',
                account,
            });
    } catch (error) {
        next(error);
    }
};

