import mongoose from "mongoose";

const workingHoursSchema = new mongoose.Schema({
    worksInHospitals: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    
    workinghours: {
        type:Number,
        required:true,
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required : true,
    },
    qualification : {
        type:String,
        required: true,
    },
    experienceInYears : {
        type:Number,
        default: 0
    },
    work : {
        type:[workingHoursSchema],
        required:true,
    }
},{timestamps:true})

export const Doctor  = mongoose.model("Doctor",doctorSchema);