const mongoose=require('mongoose');

let employeeSchema=mongoose.Schema({
    empId:{type:Number,require:true,unique:true},
    empName:{type:String,require:true},
    empRole:{type:String}
});

module.exports=mongoose.model('employee',employeeSchema);